document.getElementById('generate').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:',.<>?";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').value = password;
});

document.getElementById('copy').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');

    // Изменение текста и отображение значка проверки
    const tooltip = this.querySelector('.tooltip');
    const checkmark = this.querySelector('.checkmark');
    
    tooltip.innerText = tooltip.getAttribute('data-text-end');
    checkmark.style.display = 'block'; // Показываем значок проверки

    // Сбрасываем текст через несколько секунд
    setTimeout(() => {
        tooltip.innerText = tooltip.getAttribute('data-text-initial');
        checkmark.style.display = 'none'; // Скрываем значок проверки
    }, 2000);
});
