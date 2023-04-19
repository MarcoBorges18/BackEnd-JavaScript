const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AutorSchema = new Schema({
    codigo: Number,
    nome: {
        type: String,
        required: [true, "Nome obrigatório!"]
    },
    dtaNascimentoautor: String, 
    nascionalidade: String,
    biografia: String
});

module.exports = mongoose.model('autor', AutorSchema);