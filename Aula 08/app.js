/***********************************************************************
* Objetivo: Criar uma API para disponobilizar dados de Estados e Cidades.
* Autor: Julia Soares de Almeida.
* Data: 10/03/23
* Versão: 1.0
***********************************************************************/

/*
 * Express - Dependência para realizar requisições de API pelo protocolo HTTP.
 * npm install espress --save
 * 
 * Cors -> Dependência para gerenciar permissões de requisições da API.
 *  npm install cors --save
 * 
 * Body-Pasesr -> Dependência que gerencia o corpo das requisições da API.
 * npm install body-parser --save
 * 
 * npm i -> Faz o download das dependências novamente
 * 
 */

/**
 * API Pública -> Qualquer pessoa pode usar na sua aplicação.Representada pelo'*'. EX= ViaCep
 * API Privada -> Apenas responde para um IP, Representada pelo número de IP para onde a API vai.
 */

//Async -> Estabelece um status de aguarde, assim que eu processar te devolvo os dados.
// Obs = Se não usar o async a requisição é perdida pois o Front pensa que a API está fora do ar.

//Import das dependências do projeto

//Cria as requisições da API
const express = require('express')

//Gerencia as permissões da API
const cors = require('cors')

//Gerencia o corpo das requisições da API
const bodyParser = require('body-parser')
// const { estadosCidades } = require('./modulo/estados_cidades.js')

//Import do arquivo no modulo(funções)
const estadosCidades = require('./modulo/index.js')


//Cria um objjeto com as caracteristicas do express
const app = express()

app.use((request, response, next) => {
    //Define se a API vai ser pública ou privada
    response.header('Access-Control-Allow-Origin', '*')

    //Quais métodos poderão ser ultilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Envia para  o cors as regras de permissões
    app.use(cors())

    next()

})

//EndPoints

//EndPoint para listar todos os estados.
app.get('/estados',cors() ,async function(request, response, next){

    //Chama a função que vai listar todos os estados
    let estados = estadosCidades.getListaDeEstados()

    //Tratamento para validar o sucesso da validação
    if(estados){
        response.status(200)
        response.json(estados)
    }else{
        response.status(500)
    }

    
})

//Endpoint: Lista os dados do estado filtrando pela sigla
app.get('/estado/:uf', cors(), async function(request, response, next){
    let statusCode
    let dadosEstado = {}

    //Recebe a sigla o estado que sera enviada pela url da requisição
    let siglaEstado = request.params.uf

    //Tratamento  de validação de entrada de dados
    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){

       statusCode = 400
       dadosEstado.message = 'Não foi possível processar pois os dados de entrada que foi enviado não corresponde ao exigido, confira o valor pois não pode ser vazio, precisa ser um caractere e ter dois dígitos'

    }else{
        //Chama função para retornar os dados do estado
        let estado = estadosCidades.getDadosEstado(siglaEstado)

        if(estado){
            statusCode = 200
            dadosEstado = estado
        }else{
           statusCode = 404
        } 
    }

    //Retorna o código e o Json
    response.status(statusCode)
    response.json(dadosEstado)

})

app.get('/capital/:uf', cors(), async function(request, response, next){
    let statusCode
    let capitalEstado = {}

let siglaDoEstado = request.params.uf

if(siglaDoEstado == '' || siglaDoEstado == undefined || siglaDoEstado.length != 2 || !isNaN(siglaDoEstado)){

    statusCode = 400
    capitalEstado.message = 'Não foi possível processar pois os dados de entrada que foi enviado não corresponde ao exigido, confira o valor pois não pode ser vazio, precisa ser um caractere e ter dois dígitos'

 }else{
     let capital = estadosCidades.getCapitalEstado(siglaDoEstado)

     if(capital){
         statusCode = 200
         capitalEstado = capital
     }else{
        statusCode = 404
     } 
 }

 response.status(statusCode)
 response.json(capitalEstado)

})

app.get('/regiao/:uf', cors(), async function(request, response, next){
    let statusCode
    let regiaoEstado = {}

let siglaDoEstado = request.params.uf

if(siglaDoEstado == '' || siglaDoEstado == undefined || !isNaN(siglaDoEstado)){

    statusCode = 400
    regiaoEstado.message = 'Não foi possível processar pois os dados de entrada que foi enviado não corresponde ao exigido, confira o valor pois não pode ser vazio, precisa ser um caractere e ter dois dígitos'

 }else{
     let regiao = estadosCidades.getEstadosRegiao(siglaDoEstado)

     if(regiao){
         statusCode = 200
         regiaoEstado = regiao
     }else{
        statusCode = 404
     } 
 }

 response.status(statusCode)
 response.json(regiaoEstado)

})

app.get('/capitalpais',cors() ,async function(request, response, next){
    let statusCode
    let capitalPais = {}

    //Chama a função que vai listar todos os estados
    let capitalDoPais = estadosCidades.getCapitalPais()

    //Tratamento para validar o sucesso da validação
    if(capitalDoPais){
       statusCode = 200
       capitalPais = capitalDoPais
    }else{
        statusCode = 500
    }

    response.status(statusCode)
    response.json(capitalPais)

})

app.get('/cidades/:uf', cors(), async function(request, response, next){
    let statusCode
    let cidadePais = {}

let siglaDoEstado = request.params.uf

if(siglaDoEstado == '' || siglaDoEstado == undefined || siglaDoEstado.length != 2 || !isNaN(siglaDoEstado)){

    statusCode = 400
    cidadePais.message = 'Não foi possível processar pois os dados de entrada que foi enviado não corresponde ao exigido, confira o valor pois não pode ser vazio, precisa ser um caractere e ter dois dígitos'

 }else{
     let cidade = estadosCidades.getCidades(siglaDoEstado)

     if(cidade){
         statusCode = 200
         cidadePais = cidade
     }else{
        statusCode = 404
     } 
 }

 response.status(statusCode)
 response.json(cidadePais)

})






//Roda o serviço da API para ficar aguardando requisições
app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080.')
})