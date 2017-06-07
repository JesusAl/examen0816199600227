var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/usuarios', function(req,res,next){
  var usuarios = [
                {"user":"admin","rol":["admin","public"]},
                {"user":"any","rol":["public"]},
              ];
  res.json(usuarios);
});

router.get('/suma', function(req,res,next){
  res.render('numero1',{"resul":"","msg":""});
});

router.post('/suma', function(req, res, next){
  console.log(req.body);
    resultado.push(req.body.fsuma());


});

module.exports = router;
