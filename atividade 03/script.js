let numeros = [];
let contador = 0;

// Lê 10 números e guarda no vetor
for (let i = 0; i < 10; i++) {
    numeros[i] = Number(prompt("Digite um número inteiro:"));
}

// Número que será procurado
let numeroBusca = Number(prompt("Digite um número para verificar quantas vezes ele aparece:"));

// Percorre o vetor procurando o número
for (let i = 0; i < 10; i++) {
    // Verifica se o número do vetor é igual ao procurado
    if (numeros[i] == numeroBusca) {
        contador++;
    }
}

// Mostra quantas vezes o número apareceu
alert("O número " + numeroBusca + " aparece " + contador + " vez(es) no vetor.");