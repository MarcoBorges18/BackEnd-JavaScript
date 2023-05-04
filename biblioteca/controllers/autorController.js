//OK
const autorModel = require('../models/autorModel');

class EditoraController{

    async salvar(req, res){
        const user = req.body;
        const objeto = await autorModel.findOne({}).sort({'codigo': -1});
        user.codigo = objeto == null ? 1 : objeto.codigo + 1;

        const restultado = await autorModel.create(user);
        res.json(restultado);
    }

    async buscarPorCodigo(req, res){
        const codigo = req.params.codigo;
        const resultado = await autorModel.findOne({'codigo': codigo});
        res.json(resultado);
    }

    async listar(req, res){
        const resultado = await autorModel.find({}, {_id:0, __v:0});
        res.json(resultado);
    }

    async atualizar(req, res){
        const codigo = req.params.codigo;
        const user = req.body;

        await autorModel.findOneAndUpdate({'codigo': codigo}, user);
    }

    async excluir(req, res){
        const codigo = req.params.codigo;
        await autorModel.findOneAndDelete({'codigo': codigo});
    }

}

module.exports = new EditoraController();