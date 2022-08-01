const inputEl = document.querySelector('#font-size-control');
const testEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputChange);

function onInputChange() {
    const inputElValue = inputEl.value;
    testEl.style.fontSize = `${inputElValue}px`;
}
