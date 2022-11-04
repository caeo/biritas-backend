const database = require('../models')

class PagamentoController {
  static async getPagamento(req, res) {
    try {
      const todosOsPagamento = await database.pagamento.findAll()
      return res.status(200).json(todosOsPagamento)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async getPagamentoId(req, res) {
    const { id } = req.params
    try {
      const umPagamento = await database.pagamento.findOne({
        where: { id: Number(id) }
      })
      return res.status(200).json(umPagamento)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criarPagamento(req, res) {
    const novoPagamento = req.body
    try {
      const novoPagamentoCriado = await database.pagamento.create(novoPagamento)
      return res.status(200).json(novoPagamentoCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaPagamento(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      database.pagamento.update(novasInfos, { where: { id: Number(id) } })
      const pagamentoAtualizado = await database.pagamento.findOne({
        where: { id: Number(id) }
      })
      return res
        .status(200)
        .json({ message: `Pagamento atualizado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletarPagamento(req, res) {
    const { id } = req.params
    try {
      await database.pagamento.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `id ${id} deletado com sucesso` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PagamentoController
