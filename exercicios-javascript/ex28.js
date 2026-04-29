const prompt = require('prompt-sync')();
console.log("---Classificação de Número Positivo ou Negativo---");
let num1 = Number(prompt("Insira um número inteiro."));
if (num1 > 0){
    console.log(`O número ${num1} é positivo.`);
}
else if (num1 < 0){
    console.log(`O número ${num1} é negativo.`);
}
else {
    console.log(`O número ${num1} é neutro.`);
}