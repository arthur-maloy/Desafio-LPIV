const calculoService = require('../services/calculoService');

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:inferior&:superior&:metodo', function(req, res) {
  var inferior = parseInt(req.params.inferior);
  var superior = parseInt(req.params.superior);
  var metodo = req.params.metodo;

  if(Number.isNaN(inferior) || Number.isNaN(superior)) {
      res.json({resultado: "Digite valores válidos"});
  }
  if(metodo.toLowerCase() != 'recursivo' && metodo.toLowerCase() != 'iterativo') {
    res.json({resultado: "Digite um método válido"});
  }
  if(metodo.toLowerCase() == 'recursivo') {
    result = calculoService.recursiveWay(inferior, superior);
  } else {
    result = calculoService.iteractiveWay(inferior, superior);
  }
  res.json({resultado: result});
});

module.exports = router;
