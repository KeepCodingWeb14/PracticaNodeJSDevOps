'use strict';

const mongoose = require('mongoose');

// Esquema de los anuncios
const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

// Creación modelo de Anuncio
const Anuncio = mongoose.model('Anuncio',anuncioSchema);

// Exportar el modelo
module.exports = Anuncio;