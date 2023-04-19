const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmprestimoSchema = new Schema({
    codigo: Number,
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario',
        required: [true, "Selecione o usuario que deseja emprestar o livro"]
    },
    livro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'livro',
        required: [true, "Selecione o livro que deseja emprestar"]
    },
    dtaEmprestimo: {
        type: Date,
        default: Date.now()
    },
    dtaDevolucao: String,
    dtaDevolucaoReal: String,
});

module.exports = mongoose.model('emprestimo', EmprestimoSchema);