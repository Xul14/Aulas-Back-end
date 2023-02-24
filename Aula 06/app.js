/***********************************************************************
* Objetivo: Utilizar códigos e métodos de Array.
* Autor: Julia Soares de Almeida.
* Data: 24/02/23
* Versão: 1.0
***********************************************************************/

// [] -> Representa um Objeto do tipo Array
// {} -> Representa um Objeto do tipo Json

const listaNomes = ['José', 'Maria', 'Luiz', 'Antônio', 'Ana', 'Carlos']
const listaProdutos = ['Teclado', 'Mouse', 'Monitor']

const percorrerArray = function () {

    //Verifica o tipo de dados da listaNomes
    console.log(typeof (listaNomes))

    // Verifica tipo de dados dos itens do array
    console.log(typeof (listaNomes[0]))

    // Exibe conteúdo de um indice
    console.log(listaNomes[0])

    //Exibe todos os itens do array
    console.log(listaNomes)

    //Table -> Permite visualizar o conteúdo do array em formato de tabela.
    console.table(listaNomes)

    // Lenght -> Mostra quantos elementos tem dentro do seu array
    console.log(listaNomes.length)

    // Percorrendo um array com o while
    console.log('Exemplo com o While')
    let cont = 0 //start
    let quantidadeItens = listaNomes.length //stop

    while (cont < quantidadeItens) {
        console.log('O nome do aluno é: ' + listaNomes[cont])
        cont++
    }

    // Percorrer um array com o For
    console.log('Exemplo com o For')
    for (let cont = 0; cont < quantidadeItens; cont++) {
        console.log('O nome do aluno é: ' + listaNomes[cont])
    }

    // Percorrer array com FoerEach
    console.log('Exemplo com o ForEach')
    listaNomes.forEach(function (nome) {
        console.log('O nome do aluno é: ' + nome)
    })

}

const manipulandoDados = function () {

    //Push -> Adiciona novos itens no final do array, preservando os elementos anteriores
    listaProdutos.push('Memória')
    listaProdutos.push('Webcan', 'Gabinete', 'Fone')
    console.table(listaProdutos)

    //Unshift -> Adiciona novos itens no inicio do array reorganizando todos os elementos
    listaProdutos.unshift('HD', 'Placa Mãe', 'SSD')
    console.table(listaProdutos)

    // Pop -> Remove o ultimo item do array, preservando os elementos anteriores
    listaProdutos.pop()
    console.table(listaProdutos)

    // Shift -> Remove o primeiro item do array, reorganizando os elementos anteriores
    listaProdutos.shift()
    console.table(listaProdutos)

    // Slice -> Permite criar uma cópia de um array
    const novosProdutos = listaProdutos.slice()
    console.log(novosProdutos)

    // IndexOf -> Permite buscar dentro de um array um item, 
    // se o retorno for -1, o item não foi encontrado, 
    // se for maior ou igual á 0 o item foi encontrado
    console.log(listaProdutos.indexOf('Mouse'))


    // Exemplo utilização do IndexOf
    if(listaProdutos.indexOf('Teclado') >= 0){
        console.log('Item encontrado')
    }else{
        console.log('Item não encontrado')
    }

}

const removerProduto = function (nomeProduto){
    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome)
    let status

    //Splice -> Remove itens do array com base no indice, 
    // apaga do item selecionado para baixo, por isso informar quantos itens deseja apagar.
    if(indice >= 0){
        listaProdutos.splice(indice, 1)
        status = true
    } else{
        status = false
    }

    return status

}

const removerProvisorio = function(nomeDoProduto, list){
    let status
    let lista = list
    let nome = nomeDoProduto
    const removerItem = lista.slice()
    let indice = listaProdutos.indexOf(nome)
    

    if(indice >= 0){
        removerItem.splice(indice, 1)
        status = true
        
    } else{
        status = false
    }

    if(status == true){
        return removerItem
    }else{
        return status
    }
}

// manipulandoDados()
console.table(removerProvisorio('Teclado', listaProdutos))
console.table(listaProdutos)



