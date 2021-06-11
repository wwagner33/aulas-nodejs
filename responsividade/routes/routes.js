const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
 
    res.render('pages/home',{title:'Usando Bootstrap com Node.js'});
});

router.get('/form',(req,res)=>{

    res.render('pages/form',{title:'Usando Bootstrap com Node.js'});
});

router.post('/form/submit',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;