var mongoose = require('mongoose');
var schema = mongoose.Schema;

var clienteSchema = new schema({
    nome: String,
    endereco: String,
    bairro: String,
    cidade: String,
    funcionarios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Funcionario'}]
}, {versionKey: false});

module.exports = mongoose.model("Cliente", clienteSchema);