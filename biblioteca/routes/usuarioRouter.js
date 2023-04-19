const usuarioController = require('../controllers/usuarioController');
const express = require('express');

const router = express.Router();

router.get('/', usuarioController.listar);
router.get('/:codigo', usuarioController.buscarPorCodigo);
router.post('/', usuarioController.salvar);
router.put('/:codigo', usuarioController.atualizar);
router.delete('/:codigo', usuarioController.excluir);

module.exports = router;