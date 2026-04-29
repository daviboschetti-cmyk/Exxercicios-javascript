const prompt = require('prompt-sync')();
console.log("---Cálculo de Potências---");
let num1 = Number(prompt("Insira o primeiro valor numérica."));
let num2 = Number(prompt("Insira o segundo valor numérico"));
let resultado = Math.pow(num1, num2);
console.log(`O resultado de ${num1} elevado a ${num2} é de ${resultado}.`);
