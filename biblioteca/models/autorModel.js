//Verificar Datas
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AutorSchema = new Schema({
    codigo: Number,
    nome: {
        type: String,
        required: [true, "Nome obrigatório!"]
    },
    dataNascimentoAutor: String, 
    nacionalidade: String,
    biografia: String
});

module.exports = mongoose.model('autor', AutorSchema);