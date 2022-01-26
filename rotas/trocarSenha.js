const Cadastro = require('../models/function')
const verifyJWT = require('../middleware/verifyJWT')
const bcrypt = require('bcrypt')

module.exports = app => {
    app.patch('/usuario/cadastro/senha/:id', verifyJWT, async (req, res) => {
        
        const valores = req.body
        const id = parseInt(req.params.id)
       
        const senhaHash = await bcrypt.hash(req.body.senha, 12)

        Cadastro.atualizarCadastro(id, valores, valores.senha = senhaHash)
            .then(resultados => res.status(200).json({ id, ...valores, ...resultados }))
            .catch(erro => res.status(400).json(erro))
    })
}