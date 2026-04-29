const prompt = require ('prompt-sync')();
console.log("---Cálculo da Média e Verificação de Aprovação---");
let num1=Number(prompt("Insira o primeiro valor:"));
let num2=Number(prompt("Insira o segundo valor: "));
let num3=Number(prompt("Insira o terceiro valor: "));
let num4=Number(prompt("Insira o quarto valor: "));
let resultado1= num1+num2+num3+num4;
let resultado2= resultado1/4;
if (resultado2>=5){
    console.log("Aprovado! Sua média é: " + resultado2);
    }else {
        console.log("Reprovado! Sua média é : " + resultado2);

    }
    