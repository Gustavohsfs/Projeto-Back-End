const query = require('../infraestrutura/query')

class Cadastro {
    adicionarCidadeRep(cadastro) {
        const sql = 'INSERT INTO cidade SET?'
        return query(sql, cadastro)
    }
}

module.exports = new Cadastro