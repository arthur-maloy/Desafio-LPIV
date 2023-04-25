var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var calculos = require('./routes/calculo');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/calculo', calculos);

module.exports = app;

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));