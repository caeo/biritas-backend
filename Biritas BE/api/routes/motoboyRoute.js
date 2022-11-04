const { Router } = require('express')

const MotoboyController = require('../controllers/MotoboyController.js')

const router = Router()

router.get('/motoboys', MotoboyController.getMotoboy)
router.get('/motoboys/:id', MotoboyController.getMotoboyId)
router.post('/motoboys', MotoboyController.criarMotoboy)
router.put('/motoboys/:id', MotoboyController.atualizaMotoboy)
router.delete('/motoboys/:id', MotoboyController.deletarMotoboy)

module.exports = router
