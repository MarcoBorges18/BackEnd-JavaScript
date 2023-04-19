const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EditoraSchema = new Schema({

    codigo: Number,
    nome: {
        type: String,
        required: [true, "Nome obrigatório"]
    },
    endereco: String,
    telefone: Number,
    email: String,
    site: String

});

module.exports = mongoose.model('editora', EditoraSchema);