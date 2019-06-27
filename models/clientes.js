const Sequelize = require('sequelize');
const db = require('../config/database');

const Cliente = db.define('cliente', {
  codigo: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cpfOuCnpj: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tipo: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
})

module.exports = Cliente;