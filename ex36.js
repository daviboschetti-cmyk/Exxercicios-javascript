const prompt = require('prompt-sync')();
console.log("---Par ou Ímpar---");
let num1=Number(prompt("Insira um número inteiro: "));
if (num1%2==0){
    console.log("O número pe Par");
}
else{
    console.log("O número é Impar");
}