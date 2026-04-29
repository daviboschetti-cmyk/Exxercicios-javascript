const prompt=require('prompt-sync')();
console.log("--- Verificação de Valor Menor ou Igual a 3---");
let num1=Number(prompt("Insira um valor numérico"));
if (num1<=3){
    console.log(`${num1}`);
}
else{
  console.log("(Nenhum valor apresentado)");
  
}