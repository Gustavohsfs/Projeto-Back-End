const query = require('../infraestrutura/query')

class Cadastro {
    adicionarUsuarioRep(cadastro) {
        const sql = 'INSERT INTO usuarios SET ?'
        return query(sql, cadastro)
    }

    adicionarCidadeRep(cadastro) {
        const sql = 'INSERT INTO cidade SET?'
        return query(sql, cadastro)
    }

    adicionarEstadoRep(cadastro) {
        const sql = 'INSERT INTO estado SET?'
        return query(sql, cadastro)
    }


    atualizarCadastroRep(id, valores) {
        const sql = 'UPDATE usuarios SET ? WHERE id_usuario = ?'
        return query(sql, [valores, id])
    }

    deletarCadastroRep(id) {
        const sql = 'DELETE FROM usuarios WHERE id_usuario=?'
        return query(sql, id)
    }
}

module.exports = new Cadastro