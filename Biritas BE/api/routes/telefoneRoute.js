const { Router } = require('express')

const TelefoneController = require('../controllers/TelefoneController.js')

const router = Router()

router.get('/telefones', TelefoneController.getTelefone)
router.get('/telefones/:id', TelefoneController.getTelefoneId)
router.post('/telefones', TelefoneController.criarTelefone)
router.put('/telefones/:id', TelefoneController.atualizaTelefone)
router.delete('/telefones/:id', TelefoneController.deletarTelefone)

module.exports = router
