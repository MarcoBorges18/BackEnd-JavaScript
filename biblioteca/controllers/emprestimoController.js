const emprestimoModel = require('../models/emprestimoModel');


class EmprestimoController{

    async listarEmprestimos(req, res){
        const resultado = await emprestimoModel.find({});
        res.json(resultado);
    }

    async emprestarLivro(req, res){
        
    }

    async listarEmprestimoPorCodigo(req, res){
        const codigo = req.params.codigo;
        const resultado = await emprestimoModel.findOne({'codigo': codigo});
        res.json(resultado);
    }

}

module.exports = new EmprestimoController();