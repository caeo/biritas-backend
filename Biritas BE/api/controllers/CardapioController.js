const database = require('../models')

class CardapioController {
  static async getCardapio(req, res) {
    try {
      const todosOsCardapio = await database.cardapio.findAll()
      return res.status(200).json(todosOsCardapio)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async getCardapioId(req, res) {
    const { id } = req.params
    try {
      const umCardapio = await database.cardapio.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(umCardapio)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criarCardapio(req, res) {
    const novoCardapio = req.body
    try {
      const novoCardapioCriado = await database.cardapio.create(novoCardapio)
      return res.status(200).json(novoCardapioCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaCardapio(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      database.cardapio.update(novasInfos, { where: { id: Number(id) } })
      const CardapioAtualizado = await database.cardapio.findOne({
        where: { id: Number(id) }
      })
      return res
        .status(200)
        .json({ message: `Cardapio atualizado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletarCardapio(req, res) {
    const { id } = req.params
    try {
      await database.cardapio.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `id ${id} deletado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = CardapioController
