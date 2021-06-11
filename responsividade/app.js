const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const routes = require('./routes/routes');

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(expressLayouts);

//Inserindo o Bootstrap na aplicação
//app.use('/css', express.static(path.join(_dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/@popperjs/core/dist')))


app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));

app.use('/', routes);

module.exports = app;