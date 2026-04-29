const prompt = require('prompt-sync')();
console.log("---Cálculo de Raiz---");
let num1 = Number(prompt("Insira um número pra calcular a raiz quadrada."));
let num2 = Number(prompt("Insira o índice da raiz."));
let resultado = Math.pow(num1, 1/num2);
console.log(`A raiz é de ${num1} é de ${resultado.toFixed(2)}.`);
