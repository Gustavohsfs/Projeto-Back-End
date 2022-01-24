const Cadastro = require('../repositorio/cadastros')
const Exibir = require('../repositorio/exibirResultados')

class Model {
    adicionarUsuario(cadastro) {

        return Cadastro.adicionarUsuarioRep(cadastro)
        .then(resultados => {
            const id = resultados.insertId

            return {...cadastro, id}
        })
    }

    adicionarCidade(cadastro) {
        
        return Cadastro.adicionarCidadeRep(cadastro)
        .then(resultados => {
            const id = resultados.insertId

            return {...cadastro, id}
        })
    }

    adicionarEstado(cadastro) {

            return Cadastro.adicionarEstadoRep(cadastro)
            .then(resultados => {
                const id = resultados.insertId

                return {...cadastro, id}
            })
    }

    listarUsuarios() {

        return Exibir.listarUsuariosRep()
    }

    listarUsuariosID(id) {

        return Exibir.listarUsuariosIDRep(id)
    }

    atualizarCadastro(id, valores) {

        return Cadastro.atualizarCadastroRep(id, valores)
    }

    deletarCadastro(id) {

        return Cadastro.deletarCadastroRep(id)
    }

    listarUsuariosPorEstado(id) {

        return Exibir.listarUsuariosPorEstadoRep(id)
    }

    buscarPorEmail(email) {

        return Exibir.buscarPorEmailRep(email)
    }

}

module.exports = new Model