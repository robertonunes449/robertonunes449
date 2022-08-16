var mongoose = require('mongoose');
var schema = mongoose.Schema;

var funcionarioSchema = new schema({
    nome: String,
}, {versionKey: false});

module.exports = mongoose.model("Funcionario", funcionarioSchema);