const submitButton = document.querySelector('#submit-button')
const concordo2 = document.querySelector('#concordo2')
const nameInput = document.querySelector('#nome');
const email = document.querySelector('#email')
const textarea = document.querySelector('#answer-text')


submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (concordo2.checked && nameInput.value.length <= 40 && nameInput.value.length >= 10 
        && email.value.length <= 50 && email.value.length >= 10 && textarea.value.length >= 10 && textarea.value.length <= 500) {
            alert('Dados enviados com sucesso!')
    } else if (!concordo2.checked){
        alert('Concorde com o uso das suas imagens!')
    } else if (nameInput.value.length < 10 || nameInput.value.length > 40) {
        alert('Nome inválido!')
    } else if (email.value.length < 10 || nameInput.value.length > 50) {
        alert('Email inválido!')
    } else if (textarea.value.length < 10 || textarea.value.length > 500) {
        alert('Texto do por quê inválido!')
    } else {
        alert('Dados inválidos!')
    }
})

concordo2.addEventListener('click', () => {
    if (concordo2.checked && nameInput.value.length <= 40 && nameInput.value.length >= 10 
        && email.value.length <= 50 && email.value.length >= 10 && textarea.value.length >= 10 && textarea.value.length <= 500) {
            submitButton.style.backgroundColor = 'green';
            submitButton.style.color = 'white';
        }
})
