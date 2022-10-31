const { Router } = require('express')

const UsuarioController = require('../controllers/UsuarioController.js')

const router = Router()

router.get('/usuarios', UsuarioController.getUsuario)
router.get('/usuarios/:id', UsuarioController.getUsuarioId)
router.post('/usuarios', UsuarioController.criarUsuario)
router.put('/usuarios/:id', UsuarioController.atualizaUsuario)
router.delete('/usuarios/:id', UsuarioController.deletarUsuario)

module.exports = router
