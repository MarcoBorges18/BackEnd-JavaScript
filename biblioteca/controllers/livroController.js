//OK
const livroModel = require('../models/livroModel');
const autorModel = require('../models/autorModel');
const editoraModel = require('../models/editoraModel');

class LivroController{

    async salvar(req, res){
        const user = req.body;
        const objeto = await livroModel.findOne({}).sort({'codigo': -1});
        user.codigo = objeto == null ? 1 : objeto.codigo + 1;

        const autor = await autorModel.findOne({'codigo': user.autor});
        user.autor = autor;

        const editora = await editoraModel.findOne({'codigo': user.editora});
        user.editora = editora;

        const restultado = await livroModel.create(user);
        res.json(restultado);
    }

    async buscarPorCodigo(req, res){
        const codigo = req.params.codigo;
        const resultado = await livroModel.findOne({'codigo': codigo})
        .populate('autor', {_id:0, __v:0})
        .populate('editora', {_id:0, __v:0});
        res.json(resultado);
    }

    async listar(req, res){
        const resultado = await livroModel.find({}, {_id:0, __v:0})
        .populate('autor', {_id:0, __v:0})
        .populate('editora', {_id:0, __v:0});
        res.json(resultado);
    }

    async atualizar(req, res){
        const codigo = req.params.codigo;
        const user = req.body;

        const autor = await autorModel.findOne({'codigo': user.autor});
        user.autor = autor;

        const editora = await editoraModel.findOne({'codigo': user.editora});
        user.editora = editora;

        await livroModel.findOneAndUpdate({'codigo': codigo}, user);
    }

    async excluir(req, res){
        const codigo = req.params.codigo;
        await livroModel.findOneAndDelete({'codigo': codigo});
    }

}

module.exports = new LivroController();