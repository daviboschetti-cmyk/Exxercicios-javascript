const prompt = require('prompt-sync')();
console.log("---Cálculo da Área de uma Circunferência---");
let num1 = Number(prompt("Insira o raio da circunferência em centímetros."));
let resultado = Math.PI * Math.pow(num1, 2);
console.log(`A área da circunferência é de ${resultado.toFixed(2)} cm²`);