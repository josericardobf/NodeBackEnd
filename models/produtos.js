const Sequelize = require('sequelize');
const db = require('../config/database');

const Produto = db.define('produto', {
  codigo: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  preco: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
})

module.exports = Produto;