const prompt = require('prompt-sync')();
console.log("---Divisão Inteira Sem Usar o Operador de Divisão---");
let num1 = Number(prompt("Insira um valor numérico:"));
let num2 = Number(prompt("Insira outro valor numérico:"));
let resultado = 0;
let dividendo = num1;
let divisor = num2;
while (dividendo >=divisor){
    dividendo -= divisor;
    resultado++;
}
console.log(`O resultado da divisão inteira é: ${resultado}`);
