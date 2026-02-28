function checkStrength() {
    let password = document.getElementById("password").value;
    let strengthText = document.getElementById("strength-text");
    let strengthBar = document.getElementById("strength-bar-fill");

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[!@#$%^&*]/.test(password)) score++;

    if (score === 0) {
        strengthText.innerText = "";
        strengthBar.style.width = "0%";
    } 
    else if (score <= 2) {
        strengthText.innerText = "Weak";
        strengthText.style.color = "red";
        strengthBar.style.width = "33%";
        strengthBar.style.background = "red";
    } 
    else if (score === 3) {
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