const prompt=require("prompt-sync")();
console.log("---Tabuada de um Número---");
let num1=Number(prompt("Insira o número para que a tabuada seja gerada: "));
for (let i=1; i<=10; i++){
    let resultado=num1*i;
    console.log(`${num1} x ${i} = ${resultado}`);
}