const prompt = require('prompt-sync')();
console.log("---Somatório dos Valores Pares---")
let soma = 0;
for (let i = 1; i <=500; i++){
    if (i%2==0){
        soma +=i;
    }
}
console.log(`Soma: ${soma}`);