// Hent modal-elementet
let modal = document.getElementById('simpleModal');
// Hent knappen for at åbne modalen
let modalBtn = document.getElementById('modalBtn');
// Hent luk-knappen
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// Lyt efter klik på åbn-knap
modalBtn.addEventListener('click', openModal);
// Lyt efter klik på luk-knap
closeBtn.addEventListener('click', closeModal);
// Lyt efter klik uden for modalen
window.addEventListener('click', outsideClick);

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

    // Tjek om brugernavn er den ønskede e-mail
    if (username === 'din@email.com') {
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
});
document.getElementById('loginBtn').addEventListener('click', function() {
    console.log("Log ind-knap klikket!"); // Tjek dette i konsollen
    handleLogin();
});


