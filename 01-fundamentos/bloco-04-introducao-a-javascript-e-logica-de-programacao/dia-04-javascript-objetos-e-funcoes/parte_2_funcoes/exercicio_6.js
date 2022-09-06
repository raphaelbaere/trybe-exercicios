// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somaNumeros(N) {
    // Variável para guardar a soma de 1 até N.
    let somatorio = 0;
    // Loop para o intervalo de 1 até N.
    for (let index = 1; index <= N;index+=1) {
        // Somando os números do intervalo com a variável.
        somatorio+=index
    }
    // Retornando o valor final da soma total.
    return somatorio
}
// Logando a função com um número teste no terminal.
console.log(somaNumeros(5))