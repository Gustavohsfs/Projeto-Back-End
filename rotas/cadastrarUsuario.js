const Cadastro = require('../models/function')
const bcrypt = require('bcrypt')
 
module.exports = app => {
    app.post('/usuario/cadastro', async (req, res) => {

        const senhaHash = await bcrypt.hash(req.body.senha, 12)
        const { nome, email, id_cidade, rua, numero, telefone, cpf } = req.body

        Cadastro.adicionarUsuario({ nome, email, id_cidade, rua, numero, telefone, cpf, senha: senhaHash })

            .then(cadastro => res.status(201).json(cadastro))
            .catch(erro => res.status(400).json(erro))

    })
}