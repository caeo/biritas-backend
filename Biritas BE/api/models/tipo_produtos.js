'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class tipo_produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tipo_produtos.hasMany(models.produtos, {
        foreignKey: 'FK_produto'
      })
    }
  }
  tipo_produtos.init(
    {
      categoria: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'tipo_produtos'
    }
  )
  return tipo_produtos
}
