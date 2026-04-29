const prompt = require('prompt-sync')();
console.log("--- CCálculo do Quadrado de um Número Inteiro ---");
let num1 = Number(prompt("Insira um número inteiro."));
let resultado = num1 * num1;
console.log(`O quadrado de ${num1} é ${resultado}.`);   