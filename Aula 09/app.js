/***********************************************************************
 * Objetivo: API para integração entre back e banco de dados (GET, POST, PUT , DELETE)
 * Autor: Julia Soares de Almeida.
 * Data: 14/04/23
 * Versão: 1.0
 ***********************************************************************/

//Import das bibliotecas para API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { request, response } = require('express')

//Cria  objeto app conforme a classe do express
const app = express()

app.use((request, reponse, next) => {

    //Define quem poderá acessar a API
    response.header('Access-Control-Allow-Origin', '*')

    //Define quais métodos serão ultilizaos na API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Atribui permissões ao cors
    app.use(cors())

    next()
})

/******************************************************************************
 * Objetivo: API de controle de alunos
 * Data: 14/04/2023
 * Autor: Julia
 * Versão: 1.0
 *******************************************************************************/

//Endpoint que retorna todos os dados dos alunos
app.get('/v1/lion-school/aluno', cors(), async, function(request, response) {

})

//Endpoint que retorna o aluno filtrando pelo id
app.get('/v1/lion-school/aluno/:id', cors(), async, function(request, response) {

})

//Endpoint que insere um dados novo no banco
app.post('/v1/lion-school/aluno', cors(), async, function(request, response) {

})

//Endpoint que atualiza o dado de um aluno existente filtrando pelo id 
app.put('/v1/lion-school/aluno/:id', cors(), async, function(request, response) {

})

//Endpoint que exclui um aluno, filtrando pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async, function(request, response) {

})

app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080');
})