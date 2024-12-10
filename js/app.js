import Vue from 'vue';
import { db } from './firebase';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';

new Vue({
  el: '#app',
  data: {
    contactos: [], 
    nuevoContacto: { nombre: '', email: '', telefono: '' },
  },
  created() {
    this.cargarContactos(); 
  },
  methods: {
    async cargarContactos() {
      const querySnapshot = await getDocs(collection(db, 'contactos'));
      this.contactos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    async agregarContacto() {
      if (this.nuevoContacto.nombre && this.nuevoContacto.email && this.nuevoContacto.telefono) {
        try {
          await addDoc(collection(db, 'contactos'), this.nuevoContacto);
          this.nuevoContacto = { nombre: '', email: '', telefono: '' }; 
          this.cargarContactos();
        } catch (error) {
          console.error('Error al añadir el contacto: ', error);
        }
      } else {
        alert('Por favor, completa todos los campos.');
      }
    },
    async eliminarContacto(id) {
      try {
        await deleteDoc(doc(db, 'contactos', id));
        this.cargarContactos();
      } catch (error) {
        console.error('Error al eliminar el contacto: ', error);
      }
    },
  },
});
