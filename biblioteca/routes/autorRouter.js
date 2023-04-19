const autorController = require('../controllers/autorController');
const express = require('express');

const router = express.Router();

router.get('/', autorController.listar);
router.get('/:codigo', autorController.buscarPorCodigo);
router.post('/', autorController.salvar);
router.put('/:codigo', autorController.atualizar);
router.delete('/:codigo', autorController.excluir);

module.exports = router;