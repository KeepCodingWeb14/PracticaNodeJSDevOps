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
        const filtro = {}
        const anuncios = await Anuncio.lista(filtro);
        res.json({results: anuncios});
        
    } catch (error) {
        next(error);
    }
});

module.exports = router;