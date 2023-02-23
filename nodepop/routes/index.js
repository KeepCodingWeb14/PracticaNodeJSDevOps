var express = require('express');
var router = express.Router();

const {query, validationResult} = require ('express-validator');
const Anuncio = require('../models/Anuncio');


/* GET home page. */
// router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
// });

router.get('/', async function(req,res,next) {
  try {
    const anuncios = await Anuncio.find();
    res.locals.anuncios = anuncios;
    res.render('index');
    
  } catch (error) {
    next(error);
  }
});


module.exports = router;
