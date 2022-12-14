'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'cardapios',
      [
        {
          id: 1,
          descricao: 'cardápio de bebidas',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          descricao: 'cardápio de comida',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          descricao: 'cardápio misto',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cardapios', null, {})
  }
}
