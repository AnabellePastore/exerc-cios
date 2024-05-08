//5. Imprimir os primeiros 10 números da sequência de Fibonacci.


let fib1 = 0;
let fib2 = 1;

console.log(" Os primeiro 10 números da sequência de Fibonacci são: ");
console.log(fib1);
console.log(fib2);

for(let number= 2; number < 10; number++){
    let fib1 = fib1 + fib2;
    console.log(nextFib)


    //atualiza os valores de fib1 e fib2 para os próximo cálculos
    fib1 = fib2;
    fib2 = nextFib;
}