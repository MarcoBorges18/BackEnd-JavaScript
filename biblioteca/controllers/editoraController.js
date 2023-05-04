//OK
const editoraModel = require('../models/editoraModel');

class EditoraController{

    async salvar(req, res){
        const user = req.body;
        const objeto = await editoraModel.findOne({}).sort({'codigo': -1});
        user.codigo = objeto == null ? 1 : objeto.codigo + 1;

        const restultado = await editoraModel.create(user);
        res.json(restultado);
    }

    async buscarPorCodigo(req, res){
        const codigo = req.params.codigo;
        const resultado = await editoraModel.findOne({'codigo': codigo});
        res.json(resultado);
    }

    async listar(req, res){
        const resultado = await editoraModel.find({}, {_id:0, __v:0});
        res.json(resultado);
    }

    async atualizar(req, res){
        const codigo = req.params.codigo;
        const user = req.body;

        await editoraModel.findOneAndUpdate({'codigo': codigo}, user);
    }

    async excluir(req, res){
        const codigo = req.params.codigo;
        await editoraModel.findOneAndDelete({'codigo': codigo});
    }

}

module.exports = new EditoraController();