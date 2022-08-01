const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputblur);

function onInputblur() {
    if (Number(inputEl.dataset.length) === inputEl.value.length) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}
