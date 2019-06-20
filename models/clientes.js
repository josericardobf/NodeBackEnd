module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                {'codigo': 1, 'nome': 'unilever'},
                {'codigo': 2, 'nome': 'bombril'},
            ])
        }
    }
};