//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 20;
const b = 15;
const c = 50;

if (a > b && a > c) {
    console.log("O maior número é ", a)
}
else if (b > a && b > c) {
    console.log("O maior número é ", b)
}
else {
    console.log("O maior número é ", c)
}