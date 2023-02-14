/***********************************************************************
* Objetivo: Sistema que gerencia números pares e impares
* Autor: Julia Soares de Almeida.
* Data: 13/02/23
* Versão: 1.0
***********************************************************************/
var separador = require('./modulo/separador.js')

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Número inicial: ', function (numInicial) {
    let numeroInicial = Number(String(numInicial.replace(',', '.')));

    entradaDados.question('Número final: ', function (numFinal) {
        let numeroFinal = Number(String(numFinal.replace(',', '.')));

        entradaDados.question('Quais números irão aparecer? \n 1-Ímpar \n 2-Par \n 3-Ímpares e Pares \n', function(escolhaUsuario){
            let escolhaUser = escolhaUsuario
            let resultado;

                resultado = separador.separador(numeroInicial, numeroFinal, escolhaUser);
                entradaDados.close();

        });
    });
});