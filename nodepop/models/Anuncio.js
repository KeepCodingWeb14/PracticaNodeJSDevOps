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

anuncioSchema.statics.lista = function(filtro, skip, limit, sort, fields) {
    const query = Anuncio.find(filtro);
    // Log del filtro que llega
    console.log('*** Filtro API: ', filtro);
    console.log('*** Fields API:', fields);
    // -----
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
    query.select(fields);
    return query.exec();
} 

anuncioSchema.statics.listaTags = function() {

    /**
     * ---->  He encontrado como hacer el SELECT DISTINCT, pero no dentro de los
     * ---->  elementos de un array
    const query = Anuncio.find();
    query.select('tags');
    return query.exec();
    */

    return ['lifestyle','motor','mobile','work'];
} 



// Creación modelo de Anuncio
const Anuncio = mongoose.model('Anuncio',anuncioSchema);

// Exportar el modelo
module.exports = Anuncio;