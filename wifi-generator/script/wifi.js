document.getElementById("generate-wifi").addEventListener("click", function () {
    const ssid = document.getElementById("ssid").value.trim();
    const errorMessage = document.getElementById('error-message');
    
    if (!ssid) {
        errorMessage.classList.add('show');
        setTimeout(() => errorMessage.classList.remove('show'), 3000); 
        return;
    }

    const wifiPassword = generatePassword(12);
    document.getElementById("wifi-password").textContent = "Password: " + wifiPassword;

    document.getElementById("qrcode").innerHTML = "";

    const qrText = `WIFI:T:WPA;S:${ssid};P:${wifiPassword};;`;

    new QRCode(document.getElementById("qrcode"), {
        text: qrText,
        width: 200,
        height: 200,
    });
});


function generatePassword(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}


function showCustomAlert(message) {
    const alertElement = document.getElementById("custom-alert");
    const messageElement = document.getElementById("custom-alert-message");
    const closeButton = document.getElementById("custom-alert-close");

    messageElement.textContent = message;

    alertElement.style.display = "flex";

    closeButton.addEventListener("click", function () {
        alertElement.style.display = "none";
    });

    alertElement.addEventListener("click", function (event) {
        if (event.target === alertElement) {
            alertElement.style.display = "none";
        }
    });
}