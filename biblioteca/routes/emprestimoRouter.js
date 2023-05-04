//OK
const emprestimoController = require('../controllers/emprestimoController');
const express = require('express');

const router = express.Router();

router.get('/', emprestimoController.listarEmprestimos);
router.get('/:codigo', emprestimoController.listarEmprestimoPorCodigo);
router.post('/', emprestimoController.emprestarLivro);


module.exports = router;