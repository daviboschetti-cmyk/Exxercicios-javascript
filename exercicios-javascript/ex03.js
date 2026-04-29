
const prompt = require('prompt-sync')();
console.log("----Cálculo do Volume de uma Lata de Óleo---");
let num1 = Number(prompt("Insira o raio da base da lata em centímetros."));
let num2 = Number(prompt("Insira a altura da lata em centímetros."));
let resultado = Math.PI * Math.pow(num1, 2) * num2;
console.log(`O volume da lata é de ${resultado.toFixed(2)} cm³`);

