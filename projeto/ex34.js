const prompt = require('prompt-sync')();
console.log("---Valores Divisíveis por 2 e 3---");
let num1=Number(prompt("Insira o primeiro número: "));
let num2=Number(prompt("Insira o valor do segundo número: "));
let num3=Number(prompt("Insira o valor do terceiro número: "));
let num4=Number(prompt("Insira o valor do quarto número: "));
if (num1%2==0 || num1%3==0){
    console.log(`O número ${num1} é divisível`);
} 
if (num2%2==0 || num2%3==0){

    console.log(`O número ${num2} é divisível `);
}
if (num3%2==0 || num3%3==0){
    console.log(`O número ${num3} é divisível`);
}
if (num4%2==0 || num4%3==0){
    console.log(`O número ${num4} é divisível`);
}