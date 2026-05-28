let numeros = [];
let semDuplicados = [];
let existe;

// Lê 10 números
for (let i = 0; i < 10; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
}

// Remove os valores repetidos
for (let i = 0; i < 10; i++) {
    existe = false;
    // Verifica se o número já existe no novo vetor
    for (let j = 0; j < semDuplicados.length; j++) {
        if (numeros[i] == semDuplicados[j]) {
            existe = true;
        }
    }
    // Adiciona apenas números não repetidos
    if (existe == false) {
        semDuplicados[semDuplicados.length] = numeros[i];
    }
}

let mensagem = "Vetor original:\n";
// Mostra vetor original
for (let i = 0; i < numeros.length; i++) {
    mensagem = mensagem + numeros[i] + "\n";
}

mensagem = mensagem + "\nVetor sem duplicados:\n";
// Mostra vetor sem repetidos
for (let i = 0; i < semDuplicados.length; i++) {
    mensagem = mensagem + semDuplicados[i] + "\n";
}
alert(mensagem);