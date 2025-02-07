document.getElementById('generate').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length').value, 10);
    const phraseMode = document.getElementById('phrase-mode').checked;
    const errorMessage = document.getElementById('error-message');

    if (isNaN(length) || length < 1) {
        errorMessage.classList.add('show');
        setTimeout(() => errorMessage.classList.remove('show'), 3000); // Убираем сообщение через 3 сек
        return;
    }

    errorMessage.classList.remove('show'); // Если ошибок нет, скрываем сообщение
    const password = phraseMode ? generatePassphrase() : generateRandomPassword(length);
    document.getElementById('password').value = password;
    addToHistory(password);
});


document.getElementById('copy').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    if (!passwordField.value) return;

    navigator.clipboard.writeText(passwordField.value).then(() => {
        const tooltip = document.querySelector('.tooltip');
        tooltip.style.opacity = 1;
        setTimeout(() => (tooltip.style.opacity = 0), 1500);
    });
});

const words = [
    "sun", "moon", "tree", "river", "mountain", "cloud", "stone", "fire", "ocean", "wind",
    "storm", "forest", "desert", "valley", "thunder", "lightning", "rain", "snow", "flower", "grass",
    "wave", "earth", "sky", "star", "planet", "comet", "shadow", "breeze", "glacier", "volcano", "apple", 
    "621", "367", "286", "@#", "154", "5$#", "542s", "4w4", "5dsft", "szxf", "54sf",
];


function generateRandomPassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

function generatePassphrase() {
    return Array.from({ length: 4 }, () => words[Math.floor(Math.random() * words.length)]).join("-");
}

function addToHistory(password) {
    const historyList = document.getElementById('password-history');
    const listItem = document.createElement('li');
    listItem.textContent = password;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = () => historyList.removeChild(listItem);

    listItem.appendChild(deleteButton);
    historyList.prepend(listItem);
}
