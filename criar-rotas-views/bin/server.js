const express = require("express");
const app = express();
const routes = require("../routes.js");
const expressLayouts = require("express-ejs-layouts");

const port=3030;

//Criando um servidor simples com o Node.js e o Express

const server = app.listen(port,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});


//Configurando as Views
app.set('view engine','ejs');
app.use(expressLayouts);

//Criando usando rotas simples que estão no arquivo routes.js
app.use('/',routes);