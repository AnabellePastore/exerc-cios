//Exercício 5: Verificação de números em ordem crescente
//Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
//crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

let n1= parseFloat(prompt ("Informe o primeiro numero de 1 a 3: ")) ;

let n2= parseFloat(prompt ("Informe o segundo numero de 1 a 3: ")) ;

let n3= parseFloat(prompt ("Informe o terceiro numero de 1 a 3: ")) ;

if (n1 > n2 > n3){
    console.log( "os números estão em ordem crescente")
}
else{
    console.log("os números não estão em ordem crescente")
}