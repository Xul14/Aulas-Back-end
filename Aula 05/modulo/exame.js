/***********************************************************************
* Objetivo: Atividade de aprendizagem 01 - Sistema de gerenciamento de médias escolares.
* Autor: Julia Soares de Almeida.
* Data: 10/02/23
* Versão: 1.0
***********************************************************************/

const exame = function(media, resExame){
    media = media.exame(media, resExame);
    let resultadoExame = (media + resExame) /2;
    let status = true

    if(resultadoExame < 60)
        status = false
    else
        status = true

    return status

}

module.exports = {
   exame
}