const { Router } = require('express')

const PagamentoController = require('../controllers/PagamentoController.js')

const router = Router()

router.get('/pagamentos', PagamentoController.getPagamento)
router.get('/pagamentos/:id', PagamentoController.getPagamentoId)
router.post('/pagamentos', PagamentoController.criarPagamento)
router.put('/pagamentos/:id', PagamentoController.atualizaPagamento)
router.delete('/pagamentos/:id', PagamentoController.deletarPagamento)

module.exports = router
