const prompt = require('prompt-sync')();
console.log("---Cálculo do Quadrado da Divisão de Dois Números Inteiros---");
let num1 = Number(prompt("Insira o primeiro valor numérico inteiros"));
let num2 = Number(prompt("Insira o segundo valor numérico inteiro"));
let resultado = Math.pow(num1 / num2, 2);
console.log(`O quadrado da divisão de ${num1} por ${num2} é de ${resultado.toFixed(2)}.`);
