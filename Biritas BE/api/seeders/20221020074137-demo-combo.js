'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'combos',
      [
        {
          id: 1,
          descr_combo: 'combo bebidas 1',
          FK_cardapio: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 2,
          descr_combo: 'combo comidas 1',
          FK_cardapio: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          descr_combo: 'combo misto',
          FK_cardapio: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('combos', null, {})
  }
}
