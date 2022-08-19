// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const nota = 30;

if (nota >= 90 && nota <= 100) {
    console.log("Seu conceito foi A! Parabéns!")
}
else if (nota >= 80 && nota <= 89) {
    console.log("Seu conceito foi B! Bom, mas pode melhorar!")
}
else if (nota >= 70 && nota <= 79) {
    console.log("Seu conceito foi C! Vamos melhorar!")
}
else if (nota >= 60 && nota <= 69) {
    console.log("Seu conceito foi D! Decepcionante.")
}
else if (nota >= 50 && nota <= 59) {
    console.log("Seu conceit foi E! Você é burro!")
}
else if (nota < 50 && nota >= 0) {
    console.log("Você é BURRO! BURRO! BURRO! ESCÓRIA!")
}
else {
    console.log("Erro. Número foge da matrix.")
}