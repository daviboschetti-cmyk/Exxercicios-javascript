const prompt=require('prompt-sync')();
console.log("Verificação de Faixa de Valor---");
let num1=Number(prompt("Inisira um valor numérico inteiro: "));
if  (num1<=9){
    console.log("O valor está na faixa permitida");
}
else{
    console.log("O valor não esta na faixa permitida");
}