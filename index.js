'use strict';

//  cargar la libreria express
const express = require('express');

// crear la aplicación
const app = express()

// añadimos la ruta
app.get('/', (request,response, next) => {
    response.send('Hola, <i>adiós</i>');
})


// arrancar el servidor
app.listen(8080, () => {
    console.log('Servidor HTTP arrancado en http://127.0.0.1:8080');
});