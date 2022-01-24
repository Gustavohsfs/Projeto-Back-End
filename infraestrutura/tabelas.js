class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarUsuario()
        this.criarEstado()
        this.criarCidade()
    }

    criarUsuario() {
        const sql = 'CREATE TABLE IF NOT EXISTS Usuarios (id_usuario int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, email varchar(50) NOT NULL, id_cidade varchar(20) NOT NULL, rua varchar(20) NOT NULL, numero varchar(20) NOT NULL, telefone varchar(20) NOT NULL, cpf varchar(20) NOT NULL, senhaHash varchar(255), PRIMARY KEY(id_usuario))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            }
        })
    }

    criarEstado() {
        const sql = 'CREATE TABLE IF NOT EXISTS Estado (id_estado int NOT NULL AUTO_INCREMENT, prefixo_estado varchar(20) NOT NULL, PRIMARY KEY(id_estado))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            }
        })
    }

    criarCidade() {
        const sql = 'CREATE TABLE IF NOT EXISTS Cidade (id_cidade int NOT NULL AUTO_INCREMENT, id_estado varchar(20) NOT NULL, nome_cidade varchar(50) NOT NULL, PRIMARY KEY(id_cidade))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            }
        })
    }
}

module.exports = new Tabelas