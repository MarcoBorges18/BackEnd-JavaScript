//OK
const usuarioModel = require('../models/usuarioModel');
const emprestimoModel = require('../models/emprestimoModel');

class UsuarioController{

    async salvar(req, res){
        const user = req.body;
        const objeto = await usuarioModel.findOne({}).sort({'codigo': -1});
        user.codigo = objeto == null ? 1 : objeto.codigo + 1;

        const emprestimo = await emprestimoModel.findOne({'codigo': user.emprestimo});
        user.emprestimo = emprestimo;

        const restultado = await usuarioModel.create(user);
        res.json(restultado);
    }

    async buscarPorCodigo(req, res){
        const codigo = req.params.codigo;
        const resultado = await usuarioModel.findOne({'codigo': codigo});
        res.json(resultado);
    }

    async listar(req, res){
        const resultado = await usuarioModel.find({}, {_id:0, __v:0});
        res.json(resultado);
    }

    async atualizar(req, res){
        const codigo = req.params.codigo;
        const user = req.body;

        const emprestimo = await emprestimoModel.findOne({'codigo': user.emprestimo});
        user.emprestimo = emprestimo;

        await usuarioModel.findOneAndUpdate({'codigo': codigo}, user);
    }

    async excluir(req, res){
        const codigo = req.params.codigo;
        await usuarioModel.findOneAndDelete({'codigo': codigo});
    }

}

module.exports = new UsuarioController();