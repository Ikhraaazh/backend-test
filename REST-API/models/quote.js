'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quote.init({
    quote: {
      type: DataTypes.STRING,
      unique: {msg: "Qoute unavailable"},
      allowNull: false,
      validate: {
        notNull: {msg: "Quote cannot be null"},
        notEmpty: {msg: "Quote cannot be empty"}
      }
    },
    favorites: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Quote',
  });
  return Quote;
};