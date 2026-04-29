const prompt = require('prompt-sync')();
console.log("---Conversão de Real para Dólar---");
let num1 = Number(prompt("Insira o valor em real para ser convertido para dólar. "));
let resultado = num1 / 5.25;
console.log(`A conversão de R$ ${num1} reais para dólares é de $ ${resultado.toFixed(2)}`);