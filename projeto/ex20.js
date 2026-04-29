const prompt = require('prompt-sync')();
console.log("---Cálculo da Velocidade de um Projétil---");
let num1 = Number(prompt("Insira a distância percorrida em quilômetros."));
let num2 = Number(prompt("Insira o tempo gasto em horas."));
let resultado = (num1/ num2) / 3.6;
console.log(`A velocidadedo projetil é de ${resultado.toFixed(2)} m/s.`);

