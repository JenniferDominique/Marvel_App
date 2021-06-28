'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('avaliacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nota: {
        type: Sequelize.DECIMAL
      },
      loginId: {
        type:Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'logins',
            schema: ''
          },
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      itensId: {
        type:Sequelize.INTEGER,
        references:{
          model:{
            tableName: 'itens',
            schema: ''
          },
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('avaliacoes');
  }
};