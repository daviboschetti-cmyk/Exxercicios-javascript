const prompt = require('prompt-sync')();
console.log("---Cálculo do Valor de uma Prestação em Atraso---");
let num1= Number(prompt("Insira o valor original da prestação."));
let num2= Number(prompt("Insira o número de meses em atraso."));
let num3= Number(prompt("Isira a taxa de juros mensal."));
let juros = num3 / 100;
let resultado= num1 + (num1 * juros * num2);
console.log(`O valor da prestação em atraso é de ${resultado} reais.`);

