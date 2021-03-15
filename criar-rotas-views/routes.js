const express = require("express");
const router = express.Router();

//Especifica a pasta contendo arquivos estáticos. 
//O nome 'public' não precisará ser colocado na rota 
//Para serem alcançados os arquivos e pastas que estão dentro dele. 
//Por isso na imagem que está na página home.ejs só há o indicativo para 'images'
router.use(express.static('public'));


router.get('/',(req,res)=>{
    // res.render('Minha página Home!!');
    res.render('pages/home');
});

router.get('/about',(req,res)=>{
    //res.send('Minha página Sobre');
    res.render('about',{title: 'Sobre quem criou esta página', message:'Sou eu!!!'})
});

router.get('/curriculo',(req,res)=>{
    res.send('Meu currículo');
});

//Essa linha permite que este código seja exportado como um módulo e possa ser usado em outras partes da aplicação.
module.exports = router; 