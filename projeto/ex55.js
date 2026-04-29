const prompt = require ('prompt-sync')();
console.log("---Somatório, Média e Total de Valores Lidos---");
let somatoria = 0;
let totaldevalores = 0;
let media = 0;
while (true) {
    let valor = Number(prompt("Insira um valor numérico real:"));
    if (valor <= 0 ){
       break;
    }
    somatoria += valor;
    totaldevalores++;
}
media = somatoria/totaldevalores;
console.log(`O somatório dos valores é igual a ${somatoria}, a média é igual a ${media} e o total de valores lidos é igual a ${totaldevalores}`);