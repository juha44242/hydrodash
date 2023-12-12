// Funktion til at åbne modalen
function openModal() {
    modal.style.display = 'block';
}

// Funktion til at lukke modalen
function closeModal() {
    modal.style.display = 'none';
}

// Funktion til at lukke modalen ved klik uden for den
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

// Funktion til at behandle login-formularen
function handleLogin() {
    // Hent værdierne fra inputfelterne
    var username = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    // Et eksempel på brug af en array
    const allowedEmails = ["tiyam@gmail.com", "hamdi@gmail.com", "lina@gmail.com"];

    // Et eksempel på brug af en løkke
    let erFundet = false;
    for (let i = 0; i < allowedEmails.length; i++) {
        if (allowedEmails[i] === username) {
            erFundet = true;
            break;
        }
    }

    // Tjek om brugernavn er i den tilladte e-mail-array
    if (erFundet) {
        // Vis besked om succesfuld login
        alert('Du er logget ind!');
    } else {
        // Vis besked om fejlet login
        alert('Forkert brugernavn eller kodeord.');
    }
}

// Lyt efter klik på Log ind-knappen
document.getElementById('loginBtn').addEventListener('click', function() {
    handleLogin();
    console.log("Log ind-knap klikket!");
});
