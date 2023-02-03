/***********************************************************************
* Objetivo: Correção do professor
* Autor: Julia Soares de Almeida
* Data: 03/02/23
* Versão: 1.0
***********************************************************************/

/* 
 Typeof => Identifica o tipo de dados de um elemento
 isNaN => identifica o tipo de conteúdo independente do tipo de dados
 Replace ⇒ Método da classe String que localiza um caracter e substitui por outro.
 ToUpperCase ⇒ Converte uma String em Maiúsculo.
 ToLowerCase ⇒ Converte uma String em minúsculo.
*/

var matematica = require('./modulo/calculadora.js') 

// Import da biblioteca de entrada de dados
var readline = require('readline');
const { isUndefined } = require('util');

// Crial um objeto para a entrada de dados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Valor 1: \n', function (numero1) {
    //Valor 1
    let valor1 = numero1.replace(',', '.');

    entradaDados.question('Valor 2: \n', function (numero2) {
        //Valor 2
        let valor2 = numero2.replace(',', '.');

        // Tipo de operação matemática
        entradaDados.question('Escolha uma operação matemática: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR] \n', function (tipoCalculo) {
            let operacao = tipoCalculo.toUpperCase();
            let resultado;

            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('ERRO: Não é possível calcular se algum dado estiver vazio!');
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERRO: Não é possível calcular se os dados digitados não forem números');
            } else {

                resultado = matematica.calculadora(valor1,valor2,operacao);
                if(resultado != false)
                    console.log(resultado);
                else
                entradaDados.close();
            }
        });
    });
});