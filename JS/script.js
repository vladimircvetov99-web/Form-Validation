document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true ;

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    const clearErrors = () => {
        document.querySelectorAll('.error-text').forEach(error => error.remove());
    }

    const errorForm = (message,input) => {
        let errorEl = document.createElement('div');
        errorEl.className = 'error-text';
        errorEl.textContent = message;
        errorEl.style.color = 'red';
        errorEl.style.fontSize = '14px';
        input.parentElement.appendChild(errorEl);
        isValid = false;
    }

    clearErrors();

    if(!name.value.trim()) errorForm('Введите имя', name);

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) errorForm('Введите корректный email', email);

    if(password.value.trim().length < 6) errorForm('Пароль должен быть не менее 6 символов', password);

    if(isValid) {
        alert('Форма успешно отправленна');
        document.getElementById('form').reset();
    }
    
})