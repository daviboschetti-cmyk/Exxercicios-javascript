const prompt = require('prompt-sync')();
console.log("---Potências de 3---");
resultado = 0;
for(let i =0; i <=15; i++){
    resultado = Math.pow(3,i);
    console.log(`3^${i} = ${resultado}`);
}