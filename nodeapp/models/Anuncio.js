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

/**
 * METODOS
 * - ESTATICO: lista(); --> Devuelve una lista de anuncios
 */

anuncioSchema.statics.lista = function(filtro) {
    const query = Anuncio.find(filtro);
    return query.exec();
} 



// Creación modelo de Anuncio
const Anuncio = mongoose.model('Anuncio',anuncioSchema);

// Exportar el modelo
module.exports = Anuncio;