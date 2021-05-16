'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Bookings.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
    persons: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    requests: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bookings',
  });
  return Bookings;
};