/***********************************************************************
* Objetivo: Sistema que gerencia números pares e impares
* Autor: Julia Soares de Almeida.
* Data: 13/02/23
* Versão: 1.0
***********************************************************************/

const par = function (numInicial, numFinal) {
    let valorInicial = Number(String(numInicial).replace(',', '.'));
    let valorFinal = Number(String(numFinal).replace(',', '.'));

    if(valorInicial == '' || valorFinal == ''){
        console.log('ERRO: Entradas vazias!');
    }else if(isNaN(valorInicial) || isNaN(valorFinal)){
        console.log('ERRO: O valor digitado deve ser um número!');
    }else if(valorInicial < 0 || valorInicial > 500){
        console.log('ERRO: O valor inicial deve estar entre 0 e 100!');
    }else if(valorFinal < 100 || valorFinal > 1000){
        console.log('ERRO: O valor inicial deve estar entre 100 e 1000!');
    }else if(valorFinal <= valorInicial){
        console.log('ERRO: O valor inicial deve ser menor que o final!');
    }else{
        
    }


}

//const impar = function (numInicial, numFinal) {
    // let valorInicial = Number(String(numInicial).replace(',', '.'));
    // let valorFinal = Number(String(numFinal).replace(',', '.'));

    // if(valorInicial == '' || valorFinal == ''){
    //     console.log('ERRO: Entradas vazias!');
    // }else if(isNaN(valorInicial) || isNaN(valorFinal)){
    //     console.log('ERRO: O valor digitado deve ser um número!');
    // }else if(valorInicial < 0 || valorInicial > 500){
    //     console.log('ERRO: O valor inicial deve estar entre 0 e 100!');
    // }else if(valorFinal < 100 || valorFinal > 1000){
    //     console.log('ERRO: O valor inicial deve estar entre 100 e 1000!');
    // }else if(valorFinal <= valorInicial){
    //     console.log('ERRO: O valor inicial deve ser menor que o final!');
    // }else{
    //     while((valorInicial % 2) == 0){

    //     }
    // }


//}


module.exports = {
    par,
    impar
}
