const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    let { email, password } = event.target.elements;
    if (email.value === '' || password.value === '') {
        return alert('Поля мають бути заповнені! Хіба не зрозуміло?!');
    }
    email = email.value;
    password = password.value;
    const objData = { email, password };

    console.log(objData);
    event.target.reset();
}
