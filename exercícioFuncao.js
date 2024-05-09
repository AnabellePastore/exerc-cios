// Fazer um menu de exercícios utilizando o exemplo dado em aula
// Criar um menu, onde é possível executar 6 dos exercícios anteriores 
// Cada exercício deve ser encapsulado em uma função, e o menu deve executar essas funções 
// O usuário poderá escolher qual exercício ele quer visualizar.

// O usuário devera apertar 0 para sair do menu

let opcao = prompt("Escolha uma opção: \n1 - Verificação de Login\n2 - Exemplo de repeticao ")

switch (opcao) {
    case "1":
        console.log("Verificação de Login");
        break;


        case "2":
            exemploRepeticao()
        break;

        default:
            break;


}

function Login(){
 

let username = prompt(" Digite um nome de usuário:")
let senha = prompt("Digite a senha:")



if(username =="admin" && senha == "senha123"){
    console.log("Login bem sucedido");
} else{
    console.log("Voce não tem permissão de acesso!")
}
}