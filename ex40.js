const prompt=require("prompt-sync")();
console.log("---Soma e Verificação---");
let num1=Number(prompt("Insira o primeiro número: "));
let num2=Number(prompt("Insira o segundo número: "));
let num3=Number(prompt("Insira o terceiro número: "));
let soma=num1+num2+num3;
if (soma>=100){
    console.log(`A soma dos números é: ${soma} que é maior ou igual a 100 `);
}
else{
    console.log(`Nenhum valor apresentado`);
}