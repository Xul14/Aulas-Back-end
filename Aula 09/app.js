/***********************************************************************
 * Objetivo: API para integração entre back e banco de dados (GET, POST, PUT , DELETE)
 * Autor: Julia Soares de Almeida.
 * Data: 14/04/23
 * Versão: 1.0
 ***********************************************************************/

/**
* Prisma -> Biblioteca que estabelece a conexão com o banco
    * npm install prisma --save
    * npx prisma (verifica se foi instalado)
    * npx prisma init (inicializa o prisma e cria pastas)
    * npm install @prisma/client --save
    * 
    * npx prisma migrate dev => sincronismo entre o prisma e o banco

 */

//Import das bibliotecas para API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Cria  objeto app conforme a classe do express
const app = express()

app.use((request, response, next) => {

    //Define quem poderá acessar a API
    response.header('Access-Control-Allow-Origin', '*')

    //Define quais métodos serão ultilizaos na API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Atribui permissões ao cors
    app.use(cors())

    next()
})

//Endpoint que retorna todos os dados dos alunos
app.get('/v1/lion-school/aluno', cors(), async function(request, response) {

    //Import do arquivo da controller que irá solicitar a model dos dados do banco.
    let controllerAluno = require('./controller/controller_aluno.js')

    //Recebe od dados da controller do aluno
    let dadosAluno = await controllerAluno.getAlunos();

    //Valida se existe registro de alunos
    if (dadosAluno) {
        response.json(dadosAluno)
        response.status(200)
    } else {
        response.json()
        response.status(404)
    }

})

//Endpoint que retorna o aluno filtrando pelo id
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response) {
    let id = request.params.id
    let controllerAluno = require('./controller/controller_aluno.js')

    let dadosAluno = await controllerAluno.getBuscarAlunoId(id);

    //Valida se existe registro de alunos
    if (dadosAluno) {
        response.json(dadosAluno)
        response.status(200)
    } else {
        response.json()
        response.status(404)
    }

})

//Endpoint que retorna o aluno filtrando pelo nome
app.get('/v1/lion-school/aluno/nome/:nome', cors(), async function(request, response) {
    let nome = request.params.nome
    let controllerAluno = require('./controller/controller_aluno.js')

    let dadosAluno = await controllerAluno.getBuscarAlunoNome(nome);

    //Valida se existe registro de alunos
    if (dadosAluno) {
        response.status(200)
        response.json(dadosAluno)
    } else {
        response.status(404)
        response.json()
    }

})

//Endpoint que insere um dados novo no banco
app.post('/v1/lion-school/aluno', cors(), async function(request, response) {

})

//Endpoint que atualiza o dado de um aluno existente filtrando pelo id 
app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response) {

})

//Endpoint que exclui um aluno, filtrando pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response) {

})

app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080');
})