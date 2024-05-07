//Exercício 4: Notas escolares
//Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
//notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
//notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.




let n1= parseFloat(prompt ("Informe a primeira nota: ")) ;


let n2= parseFloat (prompt ("Informe a segunda nota: ")) ;


let n3= parseFloat (prompt ("Informe a terceira nota: ")) ;


let n4= parseFloat (prompt ("Informe a quarta nota: ")) ;


let media = (n1 + n2 + n3 + n4)/4;


if (media >=7.0 ){
    console.log("Aprovado")
}

else if(media <=5){
    console.log("Recuperação")

}

else{
    console.log("Reprovado")
}