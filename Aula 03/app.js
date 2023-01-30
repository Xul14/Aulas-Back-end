/***********************************************************************
* Objetivo: Calcular a soma, subtração, divisão e multiplicação de dois valores
* Autor: Julia Soares de Almeida
* Data: 30/01/23
* Versão: 1.0
***********************************************************************/

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o primeiro valor: ', function (valorUsuario1) {
    let valor1 = valorUsuario1.replace(',', '.');

    entradaDados.question('Digite o segundo valor: ', function (valorUsuario2) {
        let valor2 = valorUsuario2.replace(',', '.');

        console.log(' 1 - Soma \n', ('2 - Subtração \n'), ('3 - Multiplicação \n'), ('4 - Divisão'));
        entradaDados.question('Qual a operação será realizada? ', function (operacao) {

            let respostaUsuario = operacao;

            if (respostaUsuario == " ") {
                console.log('ERRO: Digite a operação á ser realizada!')
            } else if (isNaN(valor1) || isNaN(valor2) || isNaN(respostaUsuario)) {
                console.log('ERRO: Digite apenas números!')
            } else {
                if (respostaUsuario < 1 || respostaUsuario > 4) {
                    console.log('ERRO: Digite um valor entre 1 e 4');
                } else if (respostaUsuario == 1) {
                    respostaUsuario = parseFloat(valor1) + parseFloat(valor2);
                } else if (respostaUsuario == 2) {
                    respostaUsuario = parseFloat(valor1) - parseFloat(valor2);
                } else if (respostaUsuario == 3) {
                    respostaUsuario = parseFloat(valor1) * parseFloat(valor2);
                } else {
                    respostaUsuario = parseFloat(valor1) / parseFloat(valor2);
                    if (valor2 == 0) {
                        respostaUsuario = 'Não é possível dividir por 0!'
                    }

                }

                console.log('Resultado: ' + respostaUsuario);
            }

        })

    })
});
