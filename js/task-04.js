let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');

const btnIncrement = document.querySelector('[data-action="increment"]');

let number = document.querySelector('#value');

btnIncrement.addEventListener('click', onIncrementClick);
btnDecrement.addEventListener('click', onDecrementClick);

function onIncrementClick() {
    return (number.textContent = counterValue += 1);
}

function onDecrementClick() {
    return (number.textContent = counterValue -= 1);
}
