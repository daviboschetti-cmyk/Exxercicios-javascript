const prompt = require('prompt-sync')();
console.log(`---Apuração de Votos em uma Eleição Sindical---`);
let num1 = Number(prompt("Insira a quantidade de votos válidos para o candidato 01."));
let num2 = Number(prompt("Insira a quantidade de votos válidos para o candidato 02."));
let num3 = Number(prompt("Insira a quantidade de votos válidos para o candidato 03."));
let num4 = Number(prompt("Insira o número de votos nulos na eleição."));
let num5 = Number(prompt("Insira o número de votos em branco na eleição."));
let total = num1+ num2 + num3 + num4 + num5;
let percentual1 = (num1 / total) * 100;
let percentual2 = (num2 / total) * 100;
let percentual3 = (num3 / total) * 100;
let percentualNulos = (num4 / total) * 100;
let percentualBrancos = (num5 / total) * 100;
console.log(`O total de votos válidos na eleição foi de ${total}.`);
console.log(`O candidato 01 recebeu ${percentual1.toFixed(2)}% dos votos válidos.`);
console.log(`O candidato 02 recebeu ${percentual2.toFixed(2)}% dos votos válidos.`);
console.log(`O candidato 03 recebeu ${percentual3.toFixed(2)}% dos votos válidos.`);
console.log(`Os votos nulos representaram ${percentualNulos.toFixed(2)}% do total de votos válidos.`);
console.log(`Os votos em branco representaram ${percentualBrancos.toFixed(2)}% do total de votos válidos.`);






