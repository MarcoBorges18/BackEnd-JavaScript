//Solicitar ajuda ao professor
const emprestimoModel = require('../models/emprestimoModel');
const usuarioModel = require('../models/usuarioModel');
const livroModel = require('../models/livroModel');

class EmprestimoController{

    async listarEmprestimos(req, res){
        const resultado = await emprestimoModel.find({}, {_id:0, __v:0})
        .populate('livro', {_id:0, __v:0})
        .populate('usuario', {_id:0, __v:0});
        res.json(resultado);
    }

    async emprestarLivro(req, res){
        const user = req.body;
        const objeto = await editoraModel.findOne({}).sort({'codigo': -1});
        user.codigo = objeto == null ? 1 : objeto.codigo + 1;

        const usuario = await usuarioModel.findOne({'codigo': user.usuario});
        user.usuario = usuario;

        const livro = await livroModel.findOne({'codigo': user.livro});
        user.livro = livro;

        const restultado = await usuarioModel.create(user);
        res.json(restultado);
        
    }
    async listarEmprestimoPorCodigo(req, res){
        const codigo = req.params.codigo;
        const resultado = await emprestimoModel.findOne({'codigo': codigo})
        .populate('livro', {_id:0, __v:0})
        .populate('usuario', {_id:0, __v:0});
        res.json(resultado);
    }

    

}

module.exports = new EmprestimoController();