const prompt = require('prompt-sync')();
console.log("---Cálculo da Quantidade de Combustível Gasta em uma Viagem---");
let num1 = Number(prompt("Insira a distância percorrida em quilômetros." )); 
let num2= Number(prompt("Insira o consumo do veículo em quilômetros por litro." )); 
let resultado = num1 / num2;
console.log(`A quantidade de combustível gasta na viagem é de ${resultado} litros.`);
