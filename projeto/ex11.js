const prompt = require('prompt-sync')();
console.log("---Conversão de Dólar para Real")
let num1 = Number(prompt("Insira o valor em dólar para ser convertido para real. "));
let resultado = num1 * 5.25;
console.log(`A conversão de ${num1} dólares para reais é de R$ ${resultado.toFixed(2)}`);