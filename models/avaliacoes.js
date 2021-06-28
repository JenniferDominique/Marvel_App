'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class avaliacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      avaliacoes.belongsTo(models.itens)
    }
  };
  avaliacoes.init({
    nota: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'avaliacoes',
  });
  return avaliacoes;
};