/***********************************************************************
* Objetivo: Utilizar códigos e métodos de Array.
* Autor: Julia Soares de Almeida.
* Data: 24/02/23
* Versão: 1.0
***********************************************************************/

// [] -> Representa um Objeto do tipo Array
// {} -> Representa um Objeto do tipo Json

/*
    * O JSON é composto por chave (atributo) e valor
    *  chave  valor   chave       valor     chave         valor
    * {nome: 'José', celular: '1140028922', email: 'jose@gmail.com'}
    *
*/

// Forma número 1 de criar um Json e já atribuir chaves e valores
// let listProdutosJson = {produtos: listaProdutos, clientes: listaNomes}

// Forma número 2 de criar um Json, onde as chaves e valores são atribuídos no decorrer do projeto
// let listProdutosJson = {}

// listProdutosJson.produtos = listaProdutos
// listProdutosJson.clientes = listaNomes

// //Extraindoo valores de um JSON e Array
// console.log(listProdutosJson)
// console.log(listProdutosJson.produtos[1])
// console.log(listProdutosJson.clientes[5])


const listaNomes = ['José', 'Maria', 'Luiz', 'Antônio', 'Ana', 'Carlos']
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Gabinete', 'HD', 'Memória']

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
    if (listaProdutos.indexOf('Teclado') >= 0) {
        console.log('Item encontrado')
    } else {
        console.log('Item não encontrado')
    }

}

const removerProduto = function (nomeProduto) {
    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome)
    let status

    //Splice -> Remove itens do array com base no indice, 
    // apaga do item selecionado para baixo, por isso informar quantos itens deseja apagar.
    if (indice >= 0) {
        listaProdutos.splice(indice, 1)
        status = true
    } else {
        status = false
    }

    return status

}

const removerProvisorio = function (nomeDoProduto, list) {
    let status
    let nome = nomeDoProduto
    const removerItem = list.slice()
    let indice = listaProdutos.indexOf(nome)


    if (indice >= 0) {
        removerItem.splice(indice, 1)
        status = true

    } else {
        status = false
    }

    if (status == true) {
        return removerItem
    } else {
        return status
    }
}

//JSON
const listagemProdutos = function () {
    let listProdutosJson = {}
    let listProdutosArray = [
        { nome: 'Monitor', quantidade: 300, marca: 'DELL', valor: 1000, codigo: 1 },
        { nome: 'Monitor', quantidade: 280, marca: 'LG', valor: 1300, codigo: 2 },
        { nome: 'Teclado', quantidade: 800, marca: 'DELL', valor: 200, codigo: 3 },
        { nome: 'Teclado', quantidade: 360, marca: 'LG', valor: 230, codigo: 4 },
        { nome: 'Teclado', quantidade: 80, marca: 'Logitech', valor: 120, codigo: 5 },
        { nome: 'Teclado', quantidade: 100, marca: 'Razer', valor: 1230, codigo: 6 },
        { nome: 'Mouse', quantidade: 790, marca: 'DELL', valor: 115, codigo: 7 },
        { nome: 'Mouse', quantidade: 25, marca: 'Razer', valor: 800, codigo: 8 },
    ]

    let listCoresDellArray = ['Preto', 'Branco', 'Cinza']
    let listCoresLGArray = ['Preto', 'Cinza']
    let listCoresTecladoArray = ['Preto', 'Cinza', 'Branco', 'Rosa', 'Azul']
    let listCoresMouseArray = ['Preto', 'Branco', 'Rosa', 'Azul', 'Verde', 'Amarelo', 'Vermelho', 'Roxo']

    //arrays para modelos de monitores e teclado
    let listModelosMonitor = ['LCD', 'LED', 'OLED', '4K', 'IPS']
    let listModelosTeclado = ['Mecânico', 'Semi-Mecânico', 'Membrana', 'Òptico']


    //Adiciona o Array de produtos dentro de um JSON
    listProdutosJson.produtos = listProdutosArray


    //Adicionar cores ao DELL
    listProdutosJson.produtos[0].cores = listCoresDellArray
    listProdutosJson.produtos[2].mouse = listCoresDellArray
    listProdutosJson.produtos[6].teclado = listCoresDellArray

    //Adicionar cores ao LG
    listProdutosJson.produtos[1].cores = listCoresLGArray
    listProdutosJson.produtos[3].mouse = listCoresLGArray

    //Mouse
    listProdutosJson.produtos[7].mouse = listCoresMouseArray
    listProdutosJson.produtos[7].cores = listCoresMouseArray

    //Teclado
    listProdutosJson.produtos[4].teclado = listCoresTecladoArray
    listProdutosJson.produtos[5].teclado = listCoresTecladoArray
    listProdutosJson.produtos[4].cores = listCoresTecladoArray
    listProdutosJson.produtos[5].cores = listCoresTecladoArray

    //Adicionar modelos aos monitores
    listProdutosJson.produtos[0].modelos = listModelosMonitor
    listProdutosJson.produtos[1].modelos = listModelosMonitor

    //Adicionar modelos aos teclados
    listProdutosJson.produtos[2].modelos = listModelosTeclado
    listProdutosJson.produtos[3].modelos = listModelosTeclado
    listProdutosJson.produtos[4].modelos = listModelosTeclado
    listProdutosJson.produtos[5].modelos = listModelosTeclado




    //Percorre o array de produtos para listar os itens
    listProdutosJson.produtos.forEach(function (itemProduto) {
        console.log('Nome: ' + itemProduto.nome)
        console.log('Marca: ' + itemProduto.marca)

        //Tratamento de erro para quando não existir array de cores
        if (itemProduto.cores != undefined) {

            //Percorre o array de cores que está dentro do array de produtos
            itemProduto.cores.forEach(function (itemCor) {
                console.log('Cores: ' + itemCor)
            })
        }

        //Tratamento de erro para quando não existir array de modelos
        if (itemProduto.modelos != undefined) {

            //Percorre o array de modelos que esta dentro do array de produtos(itemProduto)
            itemProduto.modelos.forEach(function (itemModelo) {
                console.log('Modelos: ' + itemModelo)
            })
        }

    })

    //Mesma estrutura mas ltilizando o For
    // for (let contProdutos = 0; contProdutos < listProdutosJson.produtos.length; contProdutos++) {
    //     console.log('Nome: ' + listProdutosJson.produtos[contProdutos].nome)
    //     console.log('Marca: ' + listProdutosJson.produtos[contProdutos].marca)

    //     for (let contCores = 0; contCores < listProdutosJson.produtos[contProdutos].cores.length; contCores++) {
    //         console.log('Cores: ' + listProdutosJson.produtos[contProdutos].cores[contCores])
    //     }

    // }


}

listagemProdutos()



// manipulandoDados()
// console.table(removerProvisorio('Teclado', listaProdutos))
// console.table(listaProdutos)



