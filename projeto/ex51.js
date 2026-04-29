const prompt = require('prompt-sync')();
console.log("---Conversão de Graus Celsius em Fahrenheit---");
let num1 = 0;
for (let i = 1; i<=100; i++){
    if (i%10==0){
        num1 = i*9/5 + 32;
        console.log(`${i}°C = ${num1}°F`);
    }
}