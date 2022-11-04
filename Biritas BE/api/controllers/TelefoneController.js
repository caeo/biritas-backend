const database = require('../models')

class TelefoneController {
  static async getTelefone(req, res) {
    try {
      const todosOsTelefone = await database.telefone.findAll()
      return res.status(200).json(todosOsTelefone)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async getTelefoneId(req, res) {
    const { id } = req.params
    try {
      const umTelefone = await database.telefone.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(umTelefone)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criarTelefone(req, res) {
    const novoTelefone = req.body
    try {
      const novoTelefoneCriado = await database.telefone.create(novoTelefone)
      return res.status(200).json(novoTelefoneCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaTelefone(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      database.telefone.update(novasInfos, { where: { id: Number(id) } })
      const telefoneAtualizado = await database.telefone.findOne({
        where: { id: Number(id) }
      })
      return res
        .status(200)
        .json({ message: `Telefone atualizado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletarTelefone(req, res) {
    const { id } = req.params
    try {
      await database.telefone.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `id ${id} deletado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = TelefoneController
