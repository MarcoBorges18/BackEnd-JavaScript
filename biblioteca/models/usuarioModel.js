//Verificar Datas
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({

    codigo: Number,
    nome: {
        type: String,
            required:[true, "Nome completo!"]
    },
    endereco: {
        type: String,
            required:[true, "Endereço é obrigatorio!"]
    },
    emailUsuario: {
        type: String,
            required:[true, "email é obrigatório!"]
    },
    telefone: {
        type: String, 
            required:[true, "Numero de telefone é obrigatório!"]
    },

    dataNascimentoUsuario: String,

    dataInscricao: {
        type: Date,
            default: Date.now()
    }

    });

module.exports = mongoose.model('usuario', UsuarioSchema);