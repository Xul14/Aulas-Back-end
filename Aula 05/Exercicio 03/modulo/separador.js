/***********************************************************************
* Objetivo: Sistema que gerencia números pares e impares
* Autor: Julia Soares de Almeida.
* Data: 13/02/23
* Versão: 1.0
***********************************************************************/

const separador = function (numInicial, numFinal, escolhaUsuario) {
    let valorInicial = Number(String(numInicial).replace(',', '.'));
    let valorFinal = Number(String(numFinal).replace(',', '.'));
    let escolhaUser = parseInt(escolhaUsuario);

    if (valorInicial == '' || valorFinal == '') {

        console.log('ERRO: Entradas vazias!');

    } else if (isNaN(valorInicial) || isNaN(valorFinal)) {

        console.log('ERRO: O valor digitado deve ser um número!');

    } else if (valorInicial < 0 || valorInicial > 500) {

        console.log('ERRO: O valor inicial deve estar entre 0 e 100!');

    } else if (valorFinal < 100 || valorFinal > 1000) {

        console.log('ERRO: O valor inicial deve estar entre 100 e 1000!');

    } else if (valorFinal <= valorInicial) {

        console.log('ERRO: O valor inicial deve ser menor que o final!');

    } else {

        let cont = valorInicial
        let impar = 0

        if (escolhaUser == 1) {

            console.log('\n Tabela de números ímpares:');

            while (valorInicial <= valorFinal) {

                let resposta = valorInicial

                if (resposta % 2 !== 0) {
                    console.log(resposta)
                    impar++;
                }

                valorInicial++;
            }

            console.log('Quantidade de números ímpares: ' + impar);

        } else if (escolhaUser == 2) {
            valorInicial = cont
            let par = 0;

            console.log('\n Tabela de números pares:')

            while (valorInicial <= valorFinal) {

                let resposta = valorInicial

                if (resposta % 2 === 0) {
                    console.log(resposta)
                    par++;
                }

                valorInicial++;
            }

            console.log('Quantidade de números pares: ' + par);

        } else {

            console.log('\n Tabela de números ímpares:');

            while (valorInicial <= valorFinal) {

                let resposta = valorInicial

                if (resposta % 2 !== 0) {
                    console.log(resposta)
                    impar++;
                }

                valorInicial++;
            }

            console.log('Quantidade de números ímpares: ' + impar);


            let par = 0;

            console.log('\n Tabela de números pares:')

            valorInicial = cont

            while (valorInicial <= valorFinal) {

                let resposta = valorInicial

                if (resposta % 2 === 0) {
                    console.log(resposta)
                    par++;
                }

                valorInicial++;
            }

            console.log('Quantidade de números pares: ' + par);

        }
    }
}

module.exports = {
    separador
}
