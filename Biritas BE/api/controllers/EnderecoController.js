const database = require('../models')

class EnderecoController {
  static async getEndereco(req, res) {
    try {
      const todosOsEndereco = await database.endereco.findAll()
      return res.status(200).json(todosOsEndereco)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async getEnderecoId(req, res) {
    const { id } = req.params
    try {
      const umEndereco = await database.endereco.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(umEndereco)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criarEndereco(req, res) {
    const novoEndereco = req.body
    try {
      const novoEnderecoCriado = await database.endereco.create(novoEndereco)
      return res.status(200).json(novoEnderecoCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaEndereco(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      database.endereco.update(novasInfos, { where: { id: Number(id) } })
      const enderecoAtualizado = await database.endereco.findOne({
        where: { id: Number(id) }
      })
      return res
        .status(200)
        .json({ message: `Endereco atualizado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletarEndereco(req, res) {
    const { id } = req.params
    try {
      await database.endereco.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `id ${id} deletado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = EnderecoController
