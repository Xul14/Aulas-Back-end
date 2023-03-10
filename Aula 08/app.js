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
const { estadosCidades } = require('./modulo/estados_cidades.js')

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

    const estadosCidades = require('./modulo/index.js')
    let estados = estadosCidades.getListaDeEstados()

    response.status(200)
    response.json(estados)
})

app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080.')
})