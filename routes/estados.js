const express = require('express');
const Estado = require('../models/estados');
const router = express.Router();

router.get("/", (req, res) =>
Estado.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ msg: error.message });
        }));

router.get("/:id", (req, res) => {
    Estado.findOne({
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
    Estado.findAll({ where: { nome: { [Op.like]: query } } })
        .then(estados => res.json(estados))
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {
    console.log(req.body);
    Estado.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ msg: error.message });
        });
});

router.put('/', (req, res) => {
    Estado.update(req.body, {
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
    Estado.destroy({
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