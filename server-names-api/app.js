const mongoose = require('mongoose');
const  Person = require('./person.js');
const faker = require('faker');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/namesdb', {useNewUrlParser: true});

app.get('/', (_req, res) => {

    Person.find({}).lean().exec((err, data) => {
        if (err) {
            return res.status(500).json({
                error: err,
                message: 'Internal error.'
            });               
        }
        return res.status(200).json(data);
    });
});


app.get('/:text', (_req, res) => {

        let text = _req.params.text;
    
        var query = { $or: [
            {firstname: { $regex: text, $options: 'i' } },
            {lastname: { $regex: text, $options: 'i' } },
            {email: { $regex: text, $options: 'i' } },
            {city: { $regex: text, $options: 'i' } },
            {country: { $regex: text, $options: 'i' } },
    ]};
    Person.find({}).lean().exec((err, data) => {
        if (err) {
            return res.status(500).json({
                error: err,
                message: 'Internal error.'
            });               
        }
        return res.status(200).json(data);
    });
});

app.use(function(_req, res, next) {
    res.status(404).send('Route does not exist.');
});
app.listen(9000);