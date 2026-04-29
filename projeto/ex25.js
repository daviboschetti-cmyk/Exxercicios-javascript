const prompt = require('prompt-sync')();
console.log("---Sucessor e Antecessor de um Número Inteiro---");
let num1 = Number(prompt("Insira um valor numérico inteiro."));
let sucessor = num1 + 1;
let antecessor = num1 - 1;
console.log(`O sucessor de ${num1} é ${sucessor}
E o anntecessor de ${num1} é ${antecessor}.`); 