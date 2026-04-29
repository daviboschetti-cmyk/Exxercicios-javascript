const prompt = require('prompt-sync')();
console.log("---Cálculo do Volume de uma Esfera---");
let num1 = Number(prompt("Insira o raio da esfera em centimetros."));
let resultado = (4/3) * Math.PI * Math.pow(num1, 3);
console.log(`O volume da esfera é de ${resultado.toFixed(2)} cm³`);
