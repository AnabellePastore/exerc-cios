//Exercício 6: Verificação de idade
//Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
//de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let year =  parseInt (prompt("digite seu ano de nascimento")) 

let calc = 2024 - year

if(calc >= 18){
    console.log("você é maior de idade")

}

else{
    console.log("você não é maior de idade, saia deste site!!!")
}