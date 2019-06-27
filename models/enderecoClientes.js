const Sequelize = require('sequelize');
const db = require('../config/database');

const EnderecoCliente = db.define('enderecoCliente', {
  codigo: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cliente: {
    type: Sequelize.STRING,
    allowNull: false
  },
  logradouro: {
    type: Sequelize.STRING,
    allowNull: false
  },
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  complemento: {
    type: Sequelize.STRING
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

module.exports = EnderecoCliente;