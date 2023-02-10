/***********************************************************************
* Objetivo: Tabuada usando repetições.
* Autor: Julia Soares de Almeida.
* Data: 09/02/23
* Versão: 1.0
***********************************************************************/

//Função que retorna o processamento de uma tabuada qualquer até um contador qualquer.
const calcularTabuada = function (multiplicando, maxMultiplicador) {
    let tabuada = Number(String(multiplicando).replace(',', '.'));
    let maxContador = Number(String(maxMultiplicador).replace(',', '.'));
    let status = true;
    let cont = 0;
    let resultado;


    if(tabuada == 0 || maxContador == 0)
        status = false;
    else if(isNaN(tabuada) || isNaN(maxContador))
        status = false;
    else{
        // while(cont <= maxContador){
        //     resultado =  tabuada * cont;
        //     console.log(tabuada + ' X ' + cont + ' = ' + resultado);
        //     cont += 1;
        //     cont = cont + 1;
            //cont++;

            for(let cont = 0; cont <= maxContador; cont++){
                resultado =  tabuada * cont;
                console.log(tabuada + ' X ' + cont + ' = ' + resultado);
            }

        }

        return status;
    }
    

// calcularTabuada(7,90)

module.exports = {
    calcularTabuada
}