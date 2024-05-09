//nome

// let nome ="thiago";
// let nome ="felipe";


// //apelido
// //let apelido = "thigas"
// //let apelido = "tadeu"

let pessoa1 ={
    nome: "thiago",
    apelido: "thigas"

}

let pessoa2 ={
    nome: "felipe",
    apelido: "tadeu"
}
let produto ={
    nomeProduto: "Tônico Capilar",
    marca: "Manual",
    descriçao: "Acabe com a calvíce",
    preço: 29.90
}


//concatenação
console.log( produto.preço + "  " + produto.descriçao);

//interpolação

console.log(`Olá ${produto.nome}, ${produto.descriçao}, utilizando a ${produto.marca}`)

//cadastro de produto

let produtoCadastrado ={
    nome: "",
    valor: "",
    marca: ""
}

produtoCadastrado.nome = prompt("Dgite o nome do produto: ")
produtoCadastrado.valor = parseFloat( prompt("digite o valor do produto: "))
produtoCadastrado.marca = prompt("Digite a marca do produto: ")

console.log(produtoCadastrado)