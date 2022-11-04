const { Router } = require('express')

const TipoProdutoController = require('../controllers/TipoProdutoController.js')

const router = Router()

router.get('/tipoProdutos', TipoProdutoController.getTipoProduto)
router.get('/tipoProdutos/:id', TipoProdutoController.getTipoProdutoId)
router.post('/tipoProdutos', TipoProdutoController.criarTipoProduto)
router.put('/tipoProdutos/:id', TipoProdutoController.atualizaTipoProduto)
router.delete('/tipoProdutos/:id', TipoProdutoController.deletarTipoProduto)

module.exports = router
