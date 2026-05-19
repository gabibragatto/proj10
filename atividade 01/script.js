// Atividade 1
// Soma dos números pares do vetor

let numeros = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
    let valor = parseInt(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(valor);
    
    if (valor % 2 === 0) {
        soma += valor;
    }
}

console.log("Vetor:", numeros);
console.log("Soma dos números pares:", soma);