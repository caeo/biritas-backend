const database = require('../models')

class ComboController {
  static async getCombo(req, res) {
    try {
      const todosOscombo = await database.combo.findAll()
      return res.status(200).json(todosOscombo)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async getComboId(req, res) {
    const { id } = req.params
    try {
      const umCombo = await database.combo.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(umCombo)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criarCombo(req, res) {
    const novoCombo = req.body
    try {
      const novoComboCriado = await database.combo.create(novoCombo)
      return res.status(200).json(novoComboCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaCombo(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      database.combo.update(novasInfos, { where: { id: Number(id) } })
      const comboAtualizado = await database.combo.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json({ message: `Combo atualizado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletarCombo(req, res) {
    const { id } = req.params
    try {
      await database.combo.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `id ${id} deletado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = ComboController
