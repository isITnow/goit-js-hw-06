const userName = document.querySelector('#name-output');
const input = document.querySelector('#name-input');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    event.currentTarget.value
        ? (userName.textContent = event.currentTarget.value)
        : (userName.textContent = 'Anonymous');
}
