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

//Import do arquivo da controller que irá solicitar a model dos dados do banco.
var controllerAluno = require('./controller/controller_aluno.js')
var message = require('./controller/modulo/config.js')

//Import das bibliotecas para API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Define que os dados que irão chegar no body da requisição serão nos padrões JSON
const bodyParserJSON = bodyParser.json()

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

    let dadosAluno = await controllerAluno.getBuscarAlunoId(id);

    //Valida se existe registro de alunos
    if (dadosAluno) {
        response.status(200)
        response.json(dadosAluno)
    } else {
        response.status(404)
        response.json()
    }

})

//Endpoint que retorna o aluno filtrando pelo nome
app.get('/v1/lion-school/aluno/nome/:nome', cors(), async function(request, response) {
    let nome = request.params.nome

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
app.post('/v1/lion-school/aluno', cors(), bodyParserJSON, async function(request, response) {

    let contentType = request.headers['content-type']

    if (String(contentType).toLowerCase() == 'application/json') {

        //Recebe os dados encaminhados na requisição
        let dadosBody = request.body

        let resultDadosAluno = await controllerAluno.inserirAluno(dadosBody)

        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)

    } else {

        response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
        response.json(message.ERROR_INVALID_CONTENT_TYPE)

    }

})

//Endpoint que atualiza o dado de um aluno existente filtrando pelo id 
app.put('/v1/lion-school/aluno/:id', cors(), bodyParserJSON, async function(request, response) {

    let contentType = request.headers['content-type']

    //Validação para receber apenas json
    if (String(contentType).toLowerCase() == 'application/json') {

        //Recebe o id do auno pelo parâmetro
        let idAluno = request.params.id

        //Recebe os dados do aluno encaminhado no corpo da requisição
        let dadosBody = request.body

        //Encaminha dados para a controller
        let resultDadosAluno = await controllerAluno.atualizarAluno(dadosBody, idAluno)

        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)

    } else {

        response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
        response.json(message.ERROR_INVALID_CONTENT_TYPE)

    }

})

//Endpoint que exclui um aluno, filtrando pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response) {
    let id = request.params.id

    let dadosAluno = await controllerAluno.deletarAluno(id)

    if (dadosAluno.length != 0) {
        response.status(dadosAluno.status)
        response.json(dadosAluno)
    } else {
        return message.ERROR_ID_NOT_FOUND
    }

})

app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080');
})