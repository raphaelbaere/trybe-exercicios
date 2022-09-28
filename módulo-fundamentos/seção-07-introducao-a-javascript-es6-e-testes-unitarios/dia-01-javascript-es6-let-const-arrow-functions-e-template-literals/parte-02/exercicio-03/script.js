const botao = document.querySelector('button');
const h1 = document.querySelector('h1');
let clickCount = 0;

botao.addEventListener('click', () => {
    clickCount += 1;
    h1.innerHTML = `Eu fui clicado ${clickCount} vezes!`
})