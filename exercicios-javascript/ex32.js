const prompt = require('prompt-sync')();
console.log("---Ordenação de Três Números Inteiros---");
let num1=Number(prompt("Insira o primeiro número: "));
let num2=Number(prompt("Insira o segundo número: "));
let num3=Number(prompt("Insira o terceiro número: "));
if (num1<num2 && num1<num3){
    if (num2<num3){
    console.log(+num1 + " " + num2 + " " +num3);
    }
    else{
        console.log(+num1 + "  " +num3 + " " + num2);
    }
}
else if (num2<num1 && num2<num3){
    if (num1<num3){
        console.log(+num2 + " " + num1 + " " + num3);
    }
    else{
        console.log(+num2 + " " + num3 + " " + num1);
    }
}
else if (num3<num1 && num3<num2){
    if (num1<num2){
        console.log(+num3 + " " + num1 + " " + num2);
    }
    else{
        console.log(+num3 + " " + num2 + " " + num1);
    }
}   