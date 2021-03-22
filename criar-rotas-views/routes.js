const express = require("express");
const router = express.Router();
const faker = require("faker");
const model = require("./app.js");
const criar = 

//Especifica a pasta contendo arquivos estáticos. 
//O nome 'public' não precisará ser colocado na rota 
//Para serem alcançados os arquivos e pastas que estão dentro dele. 
//Por isso na imagem que está na página home.ejs só há o indicativo para 'images'
router.use(express.static('public'));

//Exemplode Rotas: 
/*

/ = http://localhost:3030/
/about = http://localhost:3030/about
/curriculo =  http://localhost:3030/curriculo
/cadastro =  http://localhost:3030/cadastro

*/
router.get('/',(req,res)=>{
    res.render('pages/home');
});

router.get('/about',(req,res)=>{

    let usuarios=[];
    //Usando o Faker para criar 6 perfis para colocar no about
    for(let cont=1;cont<=6;cont++){
        usuarios.push({name:faker.name.findName(),email: faker.internet.email(),avatar: faker.image.image()});
    }
    console.log(usuarios);
    res.render('pages/about',{usuarios});
});

router.get('/curriculo',(req,res)=>{
    res.send('Meu currículo');
});

router.get('/cadastro/create',(req,res)=>{

    console.log("Meu cadastro");
    res.send({});
});



//Essa linha permite que este código seja exportado como um módulo e possa ser usado em outras partes da aplicação.
module.exports = router; 