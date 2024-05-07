//Exercício 3: Ímpar ou par
//Faça um programa que receba um número do usuário e informe se este número é par ou
//ímpar.

let ParouImpar = prompt("Digite um número: ") 

//% 2 == 0 : significa que se o resultado do úmero digitado dividido por 2 for igual a 0 quer dizer q ele é par
// else: significa que qualquer numero que não atender a essa condição é considerado impar
if (ParouImpar % 2 === 0) {
console.log("Par")        
    }
else {
    console.log("Impar")
}