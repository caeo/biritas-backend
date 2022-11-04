const { Router } = require('express')

const BiritasController = require('../controllers/BiritasController.js')

const router = Router()

router.get('/biritas', BiritasController.getBiritas)
router.get('/biritas/:id', BiritasController.getBiritasId)
router.post('/biritas', BiritasController.criarBiritas)
router.put('/biritas/:id', BiritasController.atualizaBiritas)
router.delete('/biritas/:id', BiritasController.deletarBiritas)

module.exports = router
