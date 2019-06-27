const express = require('express');
const Categoria = require('../models/categorias');
const router = express.Router();

router.get("/", (req, res) =>
    Categoria.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ msg: error.message });
        }));

router.get("/:id", (req, res) => {
    Categoria.findOne({
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
    var query = `%${req.query.nome}%`;

    console.log(query)
    Categoria.findAll({ where: { nome: { [Op.like]: query } } })
        .then(categorias => res.json(categorias))
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {
    console.log(req.body);
    Categoria.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ msg: error.message });
        });
});

router.put('/', (req, res) => {
    Categoria.update(req.body, {
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
    Categoria.destroy({
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