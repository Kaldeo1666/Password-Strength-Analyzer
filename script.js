function checkStrength() {
    let password = document.getElementById("password").value;
    let strengthText = document.getElementById("strength-text");
    let strengthBar = document.getElementById("strength-bar-fill");

    let score = 0;

    document.getElementById("length").style.color =
    password.length >= 8 ? "green" : "red";

document.getElementById("uppercase").style.color =
    /[A-Z]/.test(password) ? "green" : "red";

document.getElementById("number").style.color =
    /[0-9]/.test(password) ? "green" : "red";

document.getElementById("special").style.color =
    /[^A-Za-z0-9]/.test(password) ? "green" : "red";

    // Length scoring
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;

    // Character variety
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    // Strength levels
    if (password.length === 0) {
        strengthText.innerText = "";
        strengthBar.style.width = "0%";
        return;
    }

    if (score <= 2) {
        strengthText.innerText = "Weak";
        strengthText.style.color = "red";
        strengthBar.style.width = "33%";
        strengthBar.style.background = "red";
    } 
    else if (score <= 4) {
        strengthText.innerText = "Medium";
        strengthText.style.color = "orange";
        strengthBar.style.width = "66%";
        strengthBar.style.background = "orange";
    } 
    else {
        strengthText.innerText = "Strong";
        strengthText.style.color = "green";
        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";
    }
}