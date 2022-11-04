const { Router } = require('express')

const EnderecoController = require('../controllers/EnderecoController.js')

const router = Router()

router.get('/enderecos', EnderecoController.getEndereco)
router.get('/enderecos/:id', EnderecoController.getEnderecoId)
router.post('/enderecos', EnderecoController.criarEndereco)
router.put('/enderecos/:id', EnderecoController.atualizaEndereco)
router.delete('/enderecos/:id', EnderecoController.deletarEndereco)

module.exports = router
