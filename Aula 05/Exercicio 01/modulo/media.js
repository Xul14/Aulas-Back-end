/***********************************************************************
* Objetivo: Atividade de aprendizagem 01 - Sistema de gerenciamento de médias escolares.
* Autor: Julia Soares de Almeida.
* Data: 10/02/23
* Versão: 1.0
***********************************************************************/

const calcularMedia = function(nota1, nota2 ,nota3 ,nota4){
    let primeiraNota = nota1;
    let segundaNota = nota2;
    let terceiraNota = nota3;
    let quartaNota = nota4;
    let media;

        media = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;
    
    return media;

}

module.exports = {
    calcularMedia
}