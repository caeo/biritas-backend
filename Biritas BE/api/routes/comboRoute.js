const { Router } = require('express')

const ComboController = require('../controllers/ComboController.js')

const router = Router()

router.get('/combos', ComboController.getCombo)
router.get('/combos/:id', ComboController.getComboId)
router.post('/combos', ComboController.criarCombo)
router.put('/combos/:id', ComboController.atualizaCombo)
router.delete('/combos/:id', ComboController.deletarCombo)

module.exports = router
