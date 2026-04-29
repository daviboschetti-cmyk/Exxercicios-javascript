const prompt = require('prompt-sync')();
console.log("Cálculo da Diferença entre Dois Números Inteiros");
let num1 = Number(prompt("Insira o primeiro valor numéricointeiro"));
let num2 = Number(prompt("Insira o segundo valor numérico inteiro"));
let resultado  =  num1 - num2;
console.log(`A diferença entre ${num1} e ${num2} é de ${resultado}.`); 