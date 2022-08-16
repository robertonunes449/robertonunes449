const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const funcionario_controller = require('./funcionario_controller')
const cliente_controller  = require('./cliente_controller');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/http_app',
    {useNewUrlParser: true}
);

app.use('/funcionarios', funcionario_controller);
app.use('/clientes', cliente_controller);

app.listen(3000);