const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const routes = require("../routes.js");
const app = express();
const port=3030;
//const host = 'localhost';

//Criando um servidor simples com o Node.js e o Express

const server = app.listen(port,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});


//Criando usando rotas simples que estão no arquivo routes.js
app.set('view engine','ejs');
app.use(expressLayouts);

app.use('/',routes);