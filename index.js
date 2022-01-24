const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('Tabelas iniciadas')

        Tabelas.init(conexao)
    
        app = customExpress()

       app.listen(5000, () =>  console.log('Servidor rodando na porta 5000'))
    }
})