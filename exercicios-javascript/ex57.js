const prompt = require('prompt-sync')();
console.log("---Cálculo da Área Total de uma Residência---");
let areatotal= 0;
for (let i = 1; i <=5; i++){
    let largura = prompt(`Digite o Nome da residência :`);
    let comprimento = Number(prompt(`Digite a largura da residência :`));
    let largura2 = Number(prompt(`Digite o comprimento da residência :`));
    let area = largura2*comprimento;
    areatotal += area;
    console.log(`A área da residência é de ${area}m²`);
    console.log(`Deseja continuar? (S/N)`);
    let resposta = prompt();
    if (resposta.toUpperCase() === "N"){
        console.log(`A área total da residência é de ${areatotal}m²`);
        break;
    }
    else if (resposta.toUpperCase() !== "S"){
        console.log("Resposta inválida. Encerrando o programa.");
        break;
    }
}
