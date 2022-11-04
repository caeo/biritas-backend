const { Router } = require('express')

const CardapioController = require('../controllers/CardapioController.js')

const router = Router()

router.get('/cardapios', CardapioController.getCardapio)
router.get('/cardapios/:id', CardapioController.getCardapioId)
router.post('/cardapios', CardapioController.criarCardapio)
router.put('/cardapios/:id', CardapioController.atualizaCardapio)
router.delete('/cardapios/:id', CardapioController.deletarCardapio)

module.exports = router
