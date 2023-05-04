//OK
const editoraController = require('../controllers/editoraController');
const express = require('express');

const router = express.Router();

router.get('/', editoraController.listar);
router.get('/:codigo', editoraController.buscarPorCodigo);
router.post('/', editoraController.salvar);
router.put('/:codigo', editoraController.atualizar);
router.delete('/:codigo', editoraController.excluir);

module.exports = router;