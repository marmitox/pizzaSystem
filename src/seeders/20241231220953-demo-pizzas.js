'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pizzas', [
      {
      name: 'Mussarela',
      code: '29',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Calabresa',
      code: '08',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Frango c/ Catupiry',
      code: '20',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Portuguesa',
      code: '34',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pizzas', null, {});
  }
};
