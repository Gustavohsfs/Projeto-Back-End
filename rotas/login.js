const Logar = require('../repositorio/loginFunction')
const jwt = require('jsonwebtoken')
const SECRET = 'testetoken'
 
module.exports = app => {
    app.post('/usuario/login/', async (req, res) => {

        const email = req.body.email
        const senha = req.body.senha

        const id = await Logar.getId(email)
        const resultado = await Logar.loginRep(email, senha)

        if (resultado) {
            const token =  jwt.sign({id_usuario: id}, SECRET, {expiresIn: 1800})
            res.status(200).json({ message: 'usuario autenticado', token })
        }
        else res.status(200).json({ message: 'usuario ou senha incorreto' })
    })
}