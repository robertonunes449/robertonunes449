var express = require('express');
var router = express.Router();
var Funcionario = require('./funcionario');
var Cliente = require('./cliente');

router.post('/', function(req,res) {
    console.log(req.body);
    let f = new Funcionario({ nome: req.body.nome });
    f.save((err, func) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(func);
    })
})

router.get('/', function(req, res) {
    Funcionario.find().exec((err, func) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(func);
    })
})

router.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let clies = await Cliente.find({funcionarios: id}).exec();
        if (clies.length > 0){
            res.status(500).send({
                msg: "não foi possível remover este Funcionario. você deve corrigir suas dependências antes."
            })
        }
        else {
            await Funcionario.deleteOne({_id: id});
            res.status(200).send({});
        }
    }
    catch(err) {
        res.status(500).send({msg: "Internal Error.", error: err})
    }
})

router.patch('/:id', (req, res) => {
    Funcionario.findById(req.params.id, (err, func) => {
        if (err)
            res.status(500).send(err);
        else if (!func)
            res.status(404).send({});
        else {
            func.nome = req.body.nome;
            func.save()
                .then((f) => res.status(200).send(f))
                .catch((e) => res.status(500).send(e));
        }
    })
})
module.exports = router;