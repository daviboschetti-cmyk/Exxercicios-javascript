const prompt = require('prompt-sync')();
console.log("---Maior e Menor Valores entre Valores Positivos---");
let maior = -1;
let menor = -1;
while(true){
    let num = Number(prompt(`Digite o número positivo: `));
    if (num > 0){
        if (maior === -1 || num > maior){
            maior = num;
        }
        if (menor === -1 || num < menor){
            menor = num;
        }
    } else {
        break;
    }
}
console.log(`O maior número digitado é: ${maior}`);
console.log(`O menor número digitado é: ${menor}`);                  