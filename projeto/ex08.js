const prompt = require('prompt-sync')();
console.log("---Cálculo do Volume de uma Caixa Retangular");
let num1 = Number(prompt("Insira a largura da caixa em centímetros."));
let num2 = Number(prompt("Insira a altura da caixa em centímetros."));
let num3 = Number(prompt("Insira a profundidade da caixa em centímetros."));
let resultado = num1 * num2 * num3;
console.log(`O volume da caixa é de ${resultado.toFixed(2)} cm³`);