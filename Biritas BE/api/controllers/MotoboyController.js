const database = require('../models')

class MotoboyController {
  static async getMotoboy(req, res) {
    try {
      const todosOsMotoboys = await database.Motoboy.findAll()
      return res.status(200).json(todosOsMotoboys)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async getMotoboyId(req, res) {
    const { id } = req.params
    try {
      const umMotoboy = await database.Motoboy.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(umMotoboy)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criarMotoboy(req, res) {
    const novoMotoboy = req.body
    try {
      const novoMotoboyCriado = await database.Motoboy.create(novoMotoboy)
      return res.status(200).json(novoMotoboyCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaMotoboy(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      database.Motoboy.update(novasInfos, { where: { id: Number(id) } })
      const motoboyAtualizado = await database.Motoboy.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json({ message: `Motoboy atualizado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletarMotoboy(req, res) {
    const { id } = req.params
    try {
      await database.Motoboy.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `id ${id} deletado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = MotoboyController
