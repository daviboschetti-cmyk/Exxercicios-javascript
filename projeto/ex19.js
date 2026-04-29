const prompt = require('prompt-sync')();
console.log("Cálculo das Quatro Operações Básicas");
let num1 = Number(prompt("Insira o primeiro valor numérico"));
let num2 = Number(prompt("Insira o segundo valor numérico"));
let soma = num1 + num2;
let subtração = num1 - num2;
let multiplicação = num1 * num2;
let divisão = num1 / num2
console.log(`A soma de ${num1} e ${num2} é de ${soma};
    A subtração de ${num1} e ${num2} é de ${subtração};
    A multiplicação de ${num1} e ${num2} é de ${multiplicação};
    A divisão de ${num1} e ${num2} é de ${divisão};`);
    