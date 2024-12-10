import Vue from 'vue';
import { VueFire, VueFireFirestoreOptionsAPI, bindFirestoreRef } from 'vuefire';
import { db } from './firebase';

Vue.use(VueFire);

new Vue({
    el: '#app',
    firestore() {
        return {
            // Usamos bindFirestoreRef para hacer la referencia reactiva
            contactos: bindFirestoreRef('contactos', db.collection('contactos')),
        };
    },
    data: {
        contactos: [], // Esta lista se sincroniza automáticamente con Firestore
        nuevoContacto: { nombre: '', email: '', telefono: '' },
    },
    methods: {
        async agregarContacto() {
            if (
                this.nuevoContacto.nombre &&
                this.nuevoContacto.email &&
                this.nuevoContacto.telefono
            ) {
                // Añadimos el nuevo contacto a la colección
                await db.collection('contactos').add({ ...this.nuevoContacto });
                this.nuevoContacto = { nombre: '', email: '', telefono: '' }; // Limpiar formulario
            } else {
                alert('Por favor, completa todos los campos.');
            }
        },
        async eliminarContacto(id) {
            await db.collection('contactos').doc(id).delete(); // Eliminamos contacto por ID
        },
    },
});
