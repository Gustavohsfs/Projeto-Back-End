const cadastro = require('../repositorio/cadastros')
const exibir = require('../repositorio/exibirResultados')

class Model {
    adicionarUsuario(cadastro) {

        return cadastro.adicionarUsuarioRep(cadastro)
        .then(resultados => {
            const id = resultados.insertId

            return {...cadastro, id}
        })
    }

    adicionarCidade(cadastro) {
        
        return cadastro.adicionarCidadeRep(cadastro)
        .then(resultados => {
            const id = resultados.insertId

            return {...cadastro, id}
        })
    }

    adicionarEstado(cadastro) {

            return cadastro.adicionarEstadoRep(cadastro)
            .then(resultados => {
                const id = resultados.insertId

                return {...cadastro, id}
            })
    }

    listarUsuarios() {

        return exibir.listarUsuariosRep()
    }

    listarUsuariosID(id) {

        return exibir.listarUsuariosIDRep(id)
    }

    atualizarCadastro(id, valores) {

        return cadastro.atualizarCadastroRep(id, valores)
    }

    deletarCadastro(id) {

        return cadastro.deletarCadastroRep(id)
    }

    listarUsuariosPorEstado(id) {

        return exibir.listarUsuariosPorEstadoRep(id)
    }

    buscarPorEmail(email) {

        return exibir.buscarPorEmailRep(email)
    }

}

module.exports = new Model