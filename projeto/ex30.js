const prompt = require('prompt-sync')();

console.log("---Cálculo da Média e Verificação de Aprovação com Exame---");

let num1 = Number(prompt("Insira o primeiro valor: "));
let num2 = Number(prompt("Insira o segundo valor: "));
let num3 = Number(prompt("Insira o terceiro valor: "));
let num4 = Number(prompt("Insira o quarto valor: "));

let resultado1 = num1 + num2 + num3 + num4;
let resultado2 = resultado1 / 4;

if (resultado2 > 7) {
    console.log("Aprovado! Sua média é de: " + resultado2);
} else if (resultado2 >= 5 && resultado2 <= 7) {
    console.log("Exame! Sua média é de: " + resultado2);
} else {
    console.log("Reprovado! Sua média é de: " + resultado2);
}
