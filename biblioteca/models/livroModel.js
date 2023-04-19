const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LivroSchema = new Schema({
    codigo: Number,
    titulo: {
        type: String,
        required: [true, "Nome obrigatório!"]
    },
    autor :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'autor'
    },
    editora :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'editora'
    },
    dtaPublicacao: Number, //mudar
    ISBN: Number,
    categoria: {
        type: String,
        required: [true, "Categoria obrigatório!"]
    },
    numeroPaginas: Number,
    idioma: {
        type: String,
        required: [true, "Idioma obrigatório!"]
    },
    descricao: {
        type: String,
        required: [true, "Descrição obrigatória"]
    },
    numExemplaresDisp: Number

});

module.exports = mongoose.model('livro', LivroSchema);