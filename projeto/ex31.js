const prompt= require('prompt-sync')();
console.log("---Resolução de Equação de Segundo Grau---");
let num1 =Number(prompt("Insira o valor do coeficiente (a): "));
let num2= Number(prompt("Insira o valor do coeficiente (b): "));
let num3=Number(prompt("Insira o valor do coeficente (c): "));
let delta= (num2*num2) - (4*num1*num3);
let resultaado1= (-num2 + Math.sqrt(delta)) / (2*num1);
let resultado2= (-num2 - Math.sqrt(delta)) / (2*num1);
if (delta<=0){
    console.log("Não é possivel realizar o cálculo, pois o delta é menor oi igual a zero(0)");
    
}
else{
    console.log("O resultado da equação é de: x1=" + resultaado1 + " e x2=" + resultado2);
}