const prompt = require('prompt-sync')();
console.log("---Somatório de Grãos de Trigo no Tabuleiro de Xadrez---");
let totaldegrãos = 0;
let quadros = 1;
while (quadros <=64){
    totaldegrãos +=Math.pow(2, quadros-1);
    quadros++;

}
console.log(`Total de grãos de trigo no tabuleiro de xadrez = ${totaldegrãos}`);