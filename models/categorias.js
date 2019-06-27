const Sequelize = require('sequelize');
const db = require('../config/database');

const Categoria = db.define('categoria', {
  codigo: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

module.exports = Categoria;