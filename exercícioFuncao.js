// Fazer um menu de exercícios utilizando o exemplo dado em aula
// Criar um menu, onde é possível executar 6 dos exercícios anteriores 
// Cada exercício deve ser encapsulado em uma função, e o menu deve executar essas funções 
// O usuário poderá escolher qual exercício ele quer visualizar.

// O usuário devera apertar 0 para sair do menu

let opcao = prompt("Escolha uma opção: \n1 - Verificação de Login\n2 - Dia da Semana \n3 -Ímpar ou Par  \n4 - Números pares até 10 \n5 - Números pares até 50 \n6 - Descubra a tabuada até 10 de qualquer número  ")

switch (opcao) {
    case "1":
        console.log("Verificação de Login");
        Login()
        opcao = prompt("Escolha uma opção: \n1 - Verificação de Login\n2 - Dia da Semana \n3 -Ímpar ou Par  \n4 - Números pares até 10 \n5 - Números pares até 50 \n6 - Descubra a tabuada até 10 de qualquer número  ")
        break;


        case "2":
            DiaSemana()
            opcao = prompt("Escolha uma opção: \n1 - Verificação de Login\n2 - Dia da Semana \n3 -Ímpar ou Par  \n4 - Números pares até 10 \n5 - Números pares até 50 \n6 - Descubra a tabuada até 10 de qualquer número  ")

        break;

        default:
            break;

            case "3":
            Imparpar()
            opcao = prompt("Escolha uma opção: \n1 - Verificação de Login\n2 - Dia da Semana \n3 -Ímpar ou Par  \n4 - Números pares até 10 \n5 - Números pares até 50 \n6 - Descubra a tabuada até 10 de qualquer número  ")
        break;

        case "4":

            ParLoop()
            opcao = prompt("Escolha uma opção: \n1 - Verificação de Login\n2 - Dia da Semana \n3 -Ímpar ou Par  \n4 - Números pares até 10 \n5 - Números pares até 50 \n6 - Descubra a tabuada até 10 de qualquer número  ")
        break;
        case "5":
            Parcinquentaloop()
            opcao = prompt("Escolha uma opção: \n1 - Verificação de Login\n2 - Dia da Semana \n3 -Ímpar ou Par  \n4 - Números pares até 10 \n5 - Números pares até 50 \n6 - Descubra a tabuada até 10 de qualquer número  ")
        break;

        case "6":
            Tabuada()
            opcao = prompt("Escolha uma opção: \n1 - Verificação de Login\n2 - Dia da Semana \n3 -Ímpar ou Par  \n4 - Números pares até 10 \n5 - Números pares até 50 \n6 - Descubra a tabuada até 10 de qualquer número  ")
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

function DiaSemana(){
    let number = prompt(" digite um número de 1 a 7:")


if (number == "1"){
    console.log ("Segunda- feira")
}

if (number == "2"){
    console.log ("Terça-feira")
}

if (number == "3"){
    console.log ("Quarta-feira")
}

if (number == "4"){
    console.log ("Quinta-feira")
}

if (number == "5"){
    console.log ("Sexta-feira")
}

if (number == "6"){
    console.log ("Sábado")
}

if (number == "7"){
    console.log ("Domingo")
}
}

function Imparpar(){

    let ParouImpar = prompt("Digite um número: ") 


if (ParouImpar % 2 === 0) {
console.log("Par")        
    }
else {
    console.log("Impar")
}
}

function ParLoop(){

    for(let cont = 0; cont < 10; cont = cont+2){
        console.log(cont);
    
    }
}

function Parcinquentaloop(){
    for( let cont= 1; cont<= 50; cont = cont+2){
        console.log(cont);
    }
}

function  Tabuada (){
    let number = prompt("escolha um número: ");

    for( let cont =1; cont <=10; cont ++){
        console.log((cont*number))
    }
}



