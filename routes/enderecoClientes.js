const express = require('express');
const EnderecoCliente = require('../models/enderecoClientes');
const router = express.Router();

router.get("/", (req, res) =>
EnderecoCliente.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ msg: error.message });
        }));

router.get("/:id", (req, res) => {
    EnderecoCliente.findOne({
        where: {
            codigo: req.params.id,
        }
    }).then(result => {
        if (result) {
            res.json(result);
        } else {
            res.sendStatus(404);
        }
    }).catch(error => {
        res.status(412).json({ msg: error.message });
    });
})

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/search/params', (req, res) => {
    var query = `%${req.query.cliente}%`;

    console.log(query)
    EnderecoCliente.findAll({ where: { cliente: { [Op.like]: query } } })
        .then(enderecoCliente => res.json(enderecoCliente))
        .catch(err => console.log(err));
});

router.get('/search/params', (req, res) => {
    var query = `%${req.query.cep}%`;

    console.log(query)
    EnderecoCliente.findAll({ where: { cep: { [Op.like]: query } } })
        .then(enderecoCliente => res.json(enderecoCliente))
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {
    console.log(req.body);
    EnderecoCliente.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ msg: error.message });
        });
});

router.put('/', (req, res) => {
    EnderecoCliente.update(req.body, {
        where: {
            codigo: req.body.codigo
        }
    })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({ msg: error.message });
        });
});

router.delete("/:id", (req, res) => {
    EnderecoCliente.destroy({
        where: {
            codigo: req.params.id
        }
    })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({ msg: error.message });
        });
});

module.exports = router;