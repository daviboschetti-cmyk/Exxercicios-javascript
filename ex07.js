const prompt = require('prompt-sync')();
console.log("---Adição e Multiplicação de Quatro Números Inteiros---");
let num1 = Number(prompt("Insira o primeiro número inteiro."));
let num2 = Number(prompt("Insira o segundo número inteiro."));
let num3 = Number(prompt("Insira o terceiro número inteiro."));
let num4 = Number(prompt("Insira o quarto número inteiro."));
let resultado1 = num1 + num2;
let resultado2 = num1 + num3;
let resultado3 = num1 + num4;
let resultado4 = num2 + num3;
let resultado5 = num2 + num4;
let resultado6 = num3 + num4;
let resultado7 = num1 * num2;
let resultado8 = num1 * num3;
let resultado9 = num1 * num4;
let resultado10 = num2 * num3;
let resultado11 = num2 * num4;
let resultado12 = num3 * num4;
console.log(`A soma dos quatro números é de: 
    ${num1} + ${num2} = ${resultado1}
    ${num1} + ${num3} = ${resultado2}
    ${num1} + ${num4} = ${resultado3}
    ${num2} + ${num3} = ${resultado4}
    ${num2} + ${num4} = ${resultado5} 
    ${num3} + ${num4} = ${resultado6}
     e a multiplicação é de:
     ${num1} * ${num2} = ${resultado7}
     ${num1} * ${num3} = ${resultado8}
     ${num1} * ${num4} = ${resultado9}
     ${num2} * ${num3} = ${resultado10}
     ${num2} * ${num4} = ${resultado11}
     ${num3} * ${num4} = ${resultado12}`);