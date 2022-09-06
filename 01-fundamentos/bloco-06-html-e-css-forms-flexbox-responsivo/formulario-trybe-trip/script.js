const submitButton = document.querySelector('#submit-button')
const concordo2 = document.querySelector('#concordo2')
const nameInput = document.querySelector('#input-nome');
const email = document.querySelector('#input-email')
const textarea = document.querySelector('#answer-text')


submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (concordo2.checked && nameInput.value.length <= 40 && nameInput.value.length >= 10 
        && email.value.length <= 50 && email.value.length >= 10 && textarea.value.length >= 10 && textarea.value.length <= 500) {
            alert('Dados enviados com sucesso!')
    } else {
        alert('Dados Inválidos')
    }
})


