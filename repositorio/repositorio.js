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

    listarUsuariosRep() {
        const sql = 'SELECT * FROM usuarios'
        return query(sql)
    }

    listarUsuariosIDRep(id) {
        const sql = `SELECT * FROM usuarios
        INNER JOIN cidade c
        ON usuarios.id_cidade = c.id_cidade
        INNER JOIN estado e
        ON c.id_estado = e.id_estado
        WHERE id_usuario=${id}`
        return query(sql, id)
    }

    atualizarCadastroRep(id, valores) {
        const sql = 'UPDATE usuarios SET ? WHERE id_usuario = ?'
        return query(sql, [valores, id])
    }

    deletarCadastroRep(id) {
        const sql = 'DELETE FROM usuarios WHERE id_usuario=?'
        return query(sql, id)
    }

    listarUsuariosPorEstadoRep(id) {
        const sql = `SELECT * FROM estado
        INNER JOIN cidade
        ON estado.id_estado = cidade.id_estado
        INNER JOIN usuarios
        ON usuarios.id_cidade = cidade.id_cidade
        WHERE estado.id_estado = ${id}`

        return query(sql, id)
    }

    buscarPorEmailRep(email) {
        const sql = `SELECT * FROM usuarios
        INNER JOIN cidade
        ON usuarios.id_cidade = cidade.id_cidade
        INNER JOIN estado
        ON cidade.id_estado = estado.id_estado
         WHERE email='${email}'`

        return query(sql, email)
    }
}

module.exports = new Cadastro