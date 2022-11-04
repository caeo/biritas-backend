const database = require('../models')

class UsuarioController {
  static async getUsuario(req, res) {
    try {
      const todosOsUsuario = await database.usuario.findAll()
      return res.status(200).json(todosOsUsuario)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async getUsuarioId(req, res) {
    const { id } = req.params
    try {
      const umUsuario = await database.usuario.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(umUsuario)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criarUsuario(req, res) {
    const novoUsuario = req.body
    try {
      const novoUsuarioCriado = await database.usuario.create(novoUsuario)
      return res.status(200).json(novoUsuarioCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaUsuario(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      database.Usuario.update(novasInfos, { where: { id: Number(id) } })
      const usuarioAtualizado = await database.usuario.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json({ message: `Usuario atualizado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletarUsuario(req, res) {
    const { id } = req.params
    try {
      await database.Usuario.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `id ${id} deletado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = UsuarioController
