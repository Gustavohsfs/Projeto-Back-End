const query = require('../infraestrutura/query')
const bcrypt = require('bcrypt')

class Login {
    async loginRep(email, senha) {
        const sql = 'SELECT * FROM usuarios WHERE email = ?'

        const results = await query(sql, email)
        // console.log(results)
        return bcrypt.compare(senha, results[0].senha)
    }

    async getId(email) {
        const sql = 'SELECT id_usuario FROM usuarios WHERE email = ?'

        const id = await query(sql, email)
        //console.log(id)
        return id
    }
}

module.exports = new Login