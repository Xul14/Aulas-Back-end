/***********************************************************************
* Objetivo: Atividade de aprendizagem 01 - Sistema de gerenciamento de médias escolares.
* Autor: Julia Soares de Almeida.
* Data: 10/02/23
* Versão: 1.0
***********************************************************************/

const getExame = function(media, resExame){

    let resultadoExame = resExame;
    let mediaDoAluno = media;

    let mediaExame = (parseFloat(mediaDoAluno) + parseFloat(resultadoExame)) / 2;

    return mediaExame

}

module.exports = {
   getExame
}