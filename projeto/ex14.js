const prompt = require('prompt-sync')();
console.log("---Cálculo do Quadrado da Soma de Três Números---");
let num1 = Number(prompt("Insira o primeiro número."));
let num2 = Number(prompt("Insira o segundo número."));
let num3 = Number(prompt("Insira o terceiro número."));
let resultado = Math.pow(num1 + num2 + num3, 2);
console.log(`O quadrado da soma de ${num1}, ${num2} e ${num3} é de ${resultado}.`);