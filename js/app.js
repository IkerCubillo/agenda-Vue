import { VueFire, VueFireFirestoreOptionsAPI } from 'vuefire';
import { db } from './firebase';

Vue.use(VueFire, {
    modules: [VueFireFirestoreOptionsAPI],
});

new Vue({
    el: '#app',
    firestore() {
        return {
            contactos: this.$firestore.collection('contactos'), // Enlace con la colección en Firestore
        };
    },
    data: {
        contactos: [], // Esta lista se sincronizará automáticamente con Firestore
        nuevoContacto: { nombre: '', email: '', telefono: '' },
    },
    methods: {
        async agregarContacto() {
            if (
                this.nuevoContacto.nombre &&
                this.nuevoContacto.email &&
                this.nuevoContacto.telefono
            ) {
                await this.contactos.add({ ...this.nuevoContacto });
                this.nuevoContacto = { nombre: '', email: '', telefono: '' };
            } else {
                alert('Por favor, completa todos los campos.');
            }
        },
        async eliminarContacto(id) {
            await this.contactos.doc(id).delete();
        },
    },
});
