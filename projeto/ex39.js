const prompt=require('prompt-sync')();
console.log("---Múltiplo de 3 e 5---");
let num1=Number(prompt("Insira um valor numérico: "));
if (num1%3==0 && num1%5==0){
    console.log(`O número ${num1} é multiplo de 3 e 5`);

}
else{
    console.log(`${num1} não é multiplipo de 3 e 5`);

}