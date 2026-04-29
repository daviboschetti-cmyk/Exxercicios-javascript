const prompt = require('prompt-sync')();
console.log("---Somatório da Fatorial de Quinze Valores---");
let somatorio = 0 
let valor = 1;
let numero = 1;
for (let valor =1; valor <=15; valor++){
    let fatorial = 1;
    for (let numero = 1; numero <= valor; numero++){
        fatorial *= numero;
        
    }
    somatorio += fatorial;
}
console.log(`O somatório da fatorial de quinze valores é igual a ${somatorio}`);