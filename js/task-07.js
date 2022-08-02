const inputEl = document.querySelector('#font-size-control');
const testEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    const inputElValue = event.target.value;
    testEl.style.fontSize = `${inputElValue}px`;
}
