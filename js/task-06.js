const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputblur);

function onInputblur() {
    if (Number(input.dataset.length) === input.value.length) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}
