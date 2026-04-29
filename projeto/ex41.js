const prompt=require('prompt-sync')();
console.log("---Multiplicação e Verificação---");
let num1=Number(prompt("Insira o primeiro número: "));
let resultado=num1*2;
if (resultado>30){
    console.log(`O resultado da multiplicação é ${resultado} e é maior que 30`);
}
else if (resultado==30){
    console.log(`O resultado da multiplicação é ${resultado} e é igual a 30`);
}
else{
    console.log(`O resultado da multiplicação é ${resultado} e é menor que 30`);

}
