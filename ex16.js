const prompt = require('prompt-sync')();
console.log("---Cálculo do Novo Salário com Aumento---");
let num1 = Number(prompt("Insira o salário atual do funcionário."));
let num2 = Number(prompt("Insira a porcentagem de aumento do salário."));
let resultado = num1 * (1 + num2 / 100);
console.log(`O novo salário do funcionário, com um aumento de ${num2}%, é de R$ ${resultado.toFixed(2)}.`);