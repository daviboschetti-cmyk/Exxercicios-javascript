const prompt = require('prompt-sync')();
console.log("---Conversão de Pés para Metros---");
let num1 = Number(prompt("Insira o valor de uma medida em pés"));
let resultado = num1 * 0.3048;
console.log(`A conversão de ${num1} pés para metros é de ${resultado.toFixed(2)} m.`);

