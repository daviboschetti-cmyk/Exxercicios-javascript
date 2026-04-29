const prompt = require('prompt-sync')();

console.log("---Maior e Menor Valor---");

let num1 = Number(prompt("Insira o primeiro valor numérico: "));
let num2 = Number(prompt("Insira o segundo valor numérico: "));
let num3 = Number(prompt("Insira o terceiro valor numérico: "));
let num4 = Number(prompt("Insira o quarto valor numérico: "));
let num5 = Number(prompt("Insira o quinto valor numérico: "));

let maior = num1;
let menor = num1;

if (num2 > maior) maior = num2;
if (num3 > maior) maior = num3;
if (num4 > maior) maior = num4;
if (num5 > maior) maior = num5;

if (num2 < menor) menor = num2;
if (num3 < menor) menor = num3;
if (num4 < menor) menor = num4;
if (num5 < menor) menor = num5;

console.log(`O maior valor é ${maior}`);
console.log(`O menor valor é ${menor}`);