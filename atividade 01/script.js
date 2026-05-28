let numeros = [];
let soma = 0;

// Lê 10 números
for (let i = 0; i < 10; i++) {

    numeros[i] = Number(prompt("Digite um número inteiro:"));

    // Verifica se o número é par
    if (numeros[i] % 2 == 0) {

        soma = soma + numeros[i];
    }
}

// Mostra a soma dos pares
alert("A soma dos números pares é: " + soma);