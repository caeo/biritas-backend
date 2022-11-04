'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'produtos',
      [
        {
          id: 1,
          nome_produto: 'Vodka',
          data_validade: '2023-09-21',
          qtd: 4,
          FK_combo: 1,
          FK_cardapio: 1,
          FK_produto: 1,
          preco_produto: 'R$24,00',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
