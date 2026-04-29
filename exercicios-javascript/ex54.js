const prompt = require('prompt-sync')();
console.log("Somatório e Média de Dez Valores");
let soma = 0;
let contador = 0;
for (let contador = 0; contador <10; contador++){
    let valor = Number(prompt("Insira o valor numérico real:"));
    soma += valor;
    
}
let media = soma/10;
console.log(`O somatório dos valores é igual a ${soma} e a média é igual a ${media}`);