document.getElementById('generate').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const password = generatePassword(length);
    document.getElementById('password').value = password;
    addToHistory(password);
});

function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function addToHistory(password) {
    const historyList = document.getElementById('password-history');
    const listItem = document.createElement('li');
    listItem.textContent = password;

    // Создаем кнопку для удаления
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button'; 
    deleteButton.onclick = function() {
        historyList.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    historyList.appendChild(listItem);
}


document.getElementById('copy').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
});
