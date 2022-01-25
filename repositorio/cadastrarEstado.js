const query = require('../infraestrutura/query')

class Cadastro {
    adicionarEstadoRep(cadastro) {
        const sql = 'INSERT INTO estado SET?'
        return query(sql, cadastro)
    }
}

module.exports = new Cadastro


