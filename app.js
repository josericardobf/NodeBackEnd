const express = require('express');
const PORT = 3000;
const app = express();
const db = require('./config/database');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());

app.use(cors({
  origin: ['http://localhost:4200'],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

app.set("json spaces",4);

const index = require('./routes/index');
const clientes = require('./routes/clientes');
const categorias = require('./routes/categorias');
const cidades = require('./routes/cidades');
const enderecoClientes = require('./routes/enderecoClientes');
const estados = require('./routes/estados');
const produtos = require('./routes/produtos');

app.use('/', index);
app.use('/clientes', clientes);
app.use('/categorias', categorias);
app.use('/cidades', cidades);
app.use('/enderecoClientes', enderecoClientes);
app.use('/estados', estados);
app.use('/produtos', produtos);

app.listen(PORT, () => console.log("escutando na porta "+PORT));
