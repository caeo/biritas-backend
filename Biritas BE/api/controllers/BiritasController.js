const database = require('../models')

class BiritasController {
  static async getBiritas(req, res) {
    try {
      const todosOsBiritas = await database.biritas.findAll()
      return res.status(200).json(todosOsBiritas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async getBiritasId(req, res) {
    const { id } = req.params
    try {
      const umBiritas = await database.biritas.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(umBiritas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criarBiritas(req, res) {
    const novoBiritas = req.body
    try {
      const novoBiritasCriado = await database.biritas.create(novoBiritas)
      return res.status(200).json(novoBiritasCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaBiritas(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      database.biritas.update(novasInfos, { where: { id: Number(id) } })
      const BiritasAtualizado = await database.biritas.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json({ message: `Biritas atualizado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletarBiritas(req, res) {
    const { id } = req.params
    try {
      await database.biritas.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `id ${id} deletado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = BiritasController
