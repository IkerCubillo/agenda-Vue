new Vue({
    el: '#app',
    data: {
        contactos: [
            { nombre: 'John Doe', email: 'john.doe@deusto.es', telefono: '555555555' },
        ],
        nuevoContacto: { nombre: '', email: '', telefono: '' },
    },
    methods: {
        agregarContacto() {
            if (
                this.nuevoContacto.nombre &&
                this.nuevoContacto.email &&
                this.nuevoContacto.telefono
            ) {
                this.contactos.push({ ...this.nuevoContacto });
                this.nuevoContacto = { nombre: '', email: '', telefono: '' };
            } else {
                alert('Por favor, completa todos los campos.');
            }
        },
        eliminarContacto(index) {
            this.contactos.splice(index, 1);
        },
    },
});
