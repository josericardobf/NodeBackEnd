const Sequelize = require('sequelize');
const db = require('../config/database');

const Cidade = db.define('cidade', {
  codigo: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  estado: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

module.exports = Cidade;