/***********************************************************************
* Objetivo: Exercício com Array e Json
* Autor: Julia Soares de Almeida.
* Data: 03/03/23
* Versão: 1.0
***********************************************************************/

var estadosCidades = require('./estados_cidades.js');
const estados_cidades = require('./estados_cidades.js');

const getListaDeEstados = function (listaEstados) {
    let jsonEstados = {}
    let arrayEstados = []
    let status = false

    listaEstados.estados.forEach(estados => {
        arrayEstados.push(estados.sigla)
        status = true
    });


    if (status == true) {
        jsonEstados.uf = arrayEstados
        jsonEstados.quantidade = arrayEstados.length
        return jsonEstados
    } else {
        return status
    }
}

const getDadosEstado = function (sigla) {
    let dadosEstado
    let status = false

    estadosCidades.estadosCidades.estados.forEach(estado => {
        if (estado.sigla == sigla.toUpperCase()) {
            dadosEstado = {
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao
            }
        }

        status = true
    });

    if (status == true) {
        return dadosEstado
    } else {
        return status
    }

}

const getCapitalEstado = (function (sigla) {
    let getCapital
    let status = false

    estadosCidades.estadosCidades.estados.forEach(estado => {
        if (estado.sigla == sigla.toUpperCase()) {
            getCapital = {
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.regiao
            }
        }

        status = true

    });

    if (status == true) {
        return getCapital
    } else {
        return status
    }

})

const getEstadosRegiao = (function (regiao) {

    let jsonEstados = {}
    let arrayEstados = []
    let status = false

    estadosCidades.estadosCidades.estados.forEach(estado => {
        if (estado.regiao == regiao) {

            let getUfs = {}

            getUfs.uf = estado.sigla
            getUfs.descricao = estado.nome

            arrayEstados.push(getUfs)
            status = true
        }
    });


    if (status == true) {
        jsonEstados.regiao = regiao
        jsonEstados.estados = arrayEstados
        return jsonEstados
    } else {
        return status
    }

})

const getCapitalPais = (function () {
    let jsonCapitais = {}
    let arraysCapitais = []
    let status = false

    estadosCidades.estadosCidades.estados.forEach(estado => {

        if (estado.capital_pais != undefined) {

            let getCapitais = {}

            getCapitais.capital_atual = estado.capital_pais.capital
            getCapitais.uf = estado.sigla
            getCapitais.descricao = estado.nome
            getCapitais.capital = estado.capital
            getCapitais.regiao = estado.regiao
            getCapitais.capital_pais_ano_inicio = estado.capital_pais.ano_inicio
            getCapitais.capital_pais_ano_termino = estado.capital_pais.ano_fim

            arraysCapitais.push(getCapitais)
            status = true

        }
    });

    if (status == true) {
        jsonCapitais.capitais = arraysCapitais
        return jsonCapitais
    } else {
        return status
    }

})

const getCidades = (function (sigla) {
    let jsonCidades = {}
    let arrayCidades = []
    let status = false

    estadosCidades.estadosCidades.estados.forEach(estado => {


        if (estado.sigla == sigla.toUpperCase()) {

            jsonCidades.uf = estado.sigla
            jsonCidades.descricao = estado.nome
            jsonCidades.quantidade_cidades = estado.cidades.length
            jsonCidades.cidades = arrayCidades

            estado.cidades.forEach(cidade => {
                arrayCidades.push(cidade.nome)
            });
    
            jsonCidades.cidades = arrayCidades
            status = true
    

        }
    });

    if (status == true) {
        return jsonCidades
    } else {
        return status
    }
})


// console.log(getListaDeEstados(estadosCidades.estadosCidades))
// console.log(getDadosEstado('RJ'))
// console.log(getCapitalEstado('RJ'))
// console.log(getEstadosRegiao('Centro-Oeste'))
// console.log(getCapitalPais())
console.log(getCidades('AC'))


