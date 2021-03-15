const express = require("express");
const router = express.Router();

router.use(express.static('public'));
//router.use(express.static(__dirname + 'public'));

router.get('/',(req,res)=>{
    // res.render('Minha página Home!!');
    res.render('pages/home');
});

router.get('/about',(req,res)=>{
    res.send('Minha página Sobre');
});
router.get('/curriculo',(req,res)=>{
    res.send('Meu currículo');
});


module.exports = router;