let numeros = [];

for (let i = 0; i < 7; i++) {
    let aleatorio = parseInt(Math.random() * 100);
    // math.random gera um número aleatório
    // *100 faz os números irem  de 0 a 99
    numeros[i] = aleatorio;
}

let mensagem = "Números gerados:\n";
for (let i = 0; i < 7; i++) {
    mensagem = mensagem + numeros[i] + "\n";
}

alert(mensagem);