const express = require("express");
const router = express.Router();
const faker = require("faker");

let db = require("./db");

//db.criarDB("minhaBaseDados");

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

router.get('/cadastro/insert',(req,res)=>{
    let usuario={name: "wellington", email: "wwagner@virtual.ufc.br"};
    /* for(let cont=1;cont<=6;cont++){
        usuarios.push({name:faker.name.findName(),email: faker.internet.email(),avatar: faker.image.image()});
    } */

    let result = db.inserirDado(usuario);
    console.log(result);
    //res.render('pages/insert',{result});
});

router.get('/cadastro/list',(req,res)=>{
    // Neste caso vamos precisar usar uma Promise. 😱
    // Porque o processo de consulta no DB é assíncrono, assim, a função retorna vazio,
    // Antes de haver um retorno do DB. 
    
    let resultados = db.buscarTodos({name:/^A/});
    console.log(resultados);
    res.render('pages/list',{resultados});
});

//Essa linha permite que este código seja exportado como um módulo e possa ser usado em outras partes da aplicação.
module.exports = router; 