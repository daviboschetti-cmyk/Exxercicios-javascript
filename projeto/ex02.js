const prompt = require('prompt-sync')();
console.log("--- Conversão de Graus Fahrenheit ---");
let num1 = Number(prompt("Insira a temperatura em graus Celsius. "));
let resultado = (num1 - 32) * 5/9;
console.log(`A conversão de ${num1.toFixed(2)} graus Celsius para Graus Fahrenheit é de ${resultado.toFixed(2)}`);
