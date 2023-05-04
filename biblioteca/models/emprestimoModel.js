//Verificar Datas
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
    dataEmprestimo: {
        type: Date,
        default: Date.now()
    },
    dataDevolucao: String,
    dataDevolucaoReal: String,
});

module.exports = mongoose.model('emprestimo', EmprestimoSchema);