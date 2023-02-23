'use strict'

const express = require('express');
const router = express.Router();
const Anuncio = require('../../models/Anuncio');

/**
 * GET /api/anuncios
 * Devuelve la lista de anuncios
 */
router.get('/', async (req, res, next) => {
    try {
        // filtros
        const filterByNombre = req.query.nombre;
        const filterByVenta = req.query.venta;
        const filterByPrecio = req.query.precio;
        const filterByTag = req.query.tag;
        
        const filtro = {};

        if (filterByNombre) {
            filtro.nombre = filterByNombre;
        };
        if (filterByVenta) {
            filtro.venta = filterByVenta;
        };
        if (filterByPrecio) {
            // Convertimos el filtro en formato "MIN-MAX" en un array ["MIN","MAX"]
            const valores = filterByPrecio.split('-');
            if (valores[0]) {
                filtro.precio = {'$gte':valores[0]}
            };
            if (valores[1]) {
                // Se trata de MIN y MAX
                filtro.precio = {'$gte':valores[0], '$lte':valores[1]};
            };
        };
        if (filterByTag) {
            filtro.tags = filterByTag;
        };

        // paginación
        const skip = req.query.skip;
        const limit = req.query.limit;

        // ordenación
        const sort = req.query.sort;

        // campos
        const fields = req.query.fields;
       
        const anuncios = await Anuncio.lista(filtro, skip, limit, sort, fields);
        res.json({results: anuncios});
        
    } catch (error) {
        next(error);
    }
});

module.exports = router;