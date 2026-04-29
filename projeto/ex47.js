const prompt = require('prompt-sync')();
console.log("---Números Ímpares na Faixa de Valores---");
let resultado = 0;
for (let i=1; i<200; i++){
    resultado+= 1 ;
    if (i%4==0){
        console.log(`${resultado}`);
        
        
    }
    
}