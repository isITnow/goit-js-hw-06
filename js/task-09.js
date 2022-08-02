function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

btnEl.addEventListener('click', onBtnClick);

function onBtnClick() {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = `${color}`;
    spanEl.textContent = `${color}`;
}
