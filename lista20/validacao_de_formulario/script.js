function validarEmail(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(email)) {
        alert("Email válido")
    }
    else {
        alert("Email inválido")
    }
}