const database = require('../models')

class TipoProdutoController {
  static async getTipoProduto(req, res) {
    try {
      const todosOsTipoProduto = await database.tipo_produtos.findAll()
      return res.status(200).json(todosOsTipoProduto)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async getTipoProdutoId(req, res) {
    const { id } = req.params
    try {
      const umTipoProduto = await database.tipo_produtos.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(umTipoProduto)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criarTipoProduto(req, res) {
    const novoTipoProduto = req.body
    try {
      const novoTipoProdutoCriado = await database.tipo_produtos.create(
        novoTipoProduto
      )
      return res.status(200).json(novoTipoProdutoCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaTipoProduto(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      database.tipo_produtos.update(novasInfos, { where: { id: Number(id) } })
      const tipoProdutoAtualizado = await database.tipo_produtos.findOne({
        where: { id: Number(id) }
      })
      return res
        .status(200)
        .json({ message: `TipoProduto atualizado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletarTipoProduto(req, res) {
    const { id } = req.params
    try {
      await database.tipo_produtos.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `id ${id} deletado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = TipoProdutoController
