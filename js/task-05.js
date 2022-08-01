const userName = document.querySelector('#name-output');
const inputEl = document.querySelector('#name-input');

inputEl.addEventListener('input', onInputChange);

function onInputChange() {
    inputEl.value
        ? (userName.textContent = inputEl.value)
        : (userName.textContent = 'Anonymous');
}
