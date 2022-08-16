var express = require('express');
var router = express.Router();
var Cliente = require('./cliente');

router.post('/', function(req,res) {
    console.log(req.body);
    let c = new Cliente({ 
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        funcionarios: req.body.funcionarios
    });
    c.save((err, clie) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(clie);
    })
})

router.get('/', function(req, res) {
    Cliente.find().exec((err, clies) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(clies);
    })
})

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Cliente.deleteOne({_id: req.params.id}, (err) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send({});
    })
})

router.patch('/:id', (req, res) => {
    Cliente.findById(req.params.id, (err, clie) => {
        if (err)
            res.status(500).send(err);
        else if (!clie)
            res.status(404).send({});
        else {
            clie.nome = req.body.nome;
            clie.endereco = req.body.endereco;
            clie.bairro = req.body.bairro;
            clie.cidade = req.body.cidade; 
            clie.funcionarios = req.body.funcionarios;
            clie.save()
                if (err)
                    res.status(500).send(err);
                else
                    res.status(200).send(clie);
        }
    })
})

module.exports = router;