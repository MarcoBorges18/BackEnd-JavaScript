//OK
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EditoraSchema = new Schema({

    codigo: Number,
    nome: {
        type: String,
        required: [true, "Nome obrigatório"]
    },
    endereco: {
        type: String,
        required: [true, "endereço obrigatório"]
    },
    telefone: {
        type: String,
        required: [true, "Telefone obrigatório"]
    },
    email: String,
    site: String
});

module.exports = mongoose.model('editora', EditoraSchema);