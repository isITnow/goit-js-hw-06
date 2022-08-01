let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');

const btnIncrement = document.querySelector('[data-action="increment"]');

let number = document.querySelector('#value');

const onIncrementClick = () => {
    counterValue += 1;
    return (number.textContent = counterValue);
};
btnIncrement.addEventListener('click', onIncrementClick);

const onDecrementClick = () => {
    counterValue -= 1;
    return (number.textContent = counterValue);
};
btnDecrement.addEventListener('click', onDecrementClick);
