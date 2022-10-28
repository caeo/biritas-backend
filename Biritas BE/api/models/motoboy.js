'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Motoboy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Motoboy.hasOne(models.telefone, {
        foreignKey: 'FK_motoboy'
      })
      Motoboy.hasMany(models.TA_entrega_produto, {
        foreignKey: 'FK_motoboy'
      })
      Motoboy.hasMany(models.TA_busca_produto, {
        foreignKey: 'FK_motoboy'
      })
    }
  }
  Motoboy.init(
    {
      nome: DataTypes.STRING,
      cpf: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Motoboy'
    }
  )
  return Motoboy
}
