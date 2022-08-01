const userName = document.querySelector('#name-output');
const input = document.querySelector('#name-input');

input.addEventListener('input', onInputChange);

function onInputChange() {
    input.value
        ? (userName.textContent = input.value)
        : (userName.textContent = 'Anonymous');
}
