module.exports = app => {
    const model = app.models.clientes;

    app.get("/clientes", (req, res) => {
        model.findAll({}, (clientes) => {
            res.json({clientes: clientes});
        });
    });
};