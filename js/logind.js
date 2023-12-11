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
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Forebygger formularens standardadfærd (omdirigering)
    event.preventDefault();

    // Hent værdierne fra inputfelterne
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Tjek om brugernavn er den ønskede e-mail
    if (username === 'din@email.com') {
        // Vis besked om succesfuld login
        alert('Du er logget ind!');
    } else {
        // Vis besked om fejlet login
        alert('Forkert brugernavn eller kodeord.');
    }
});

// Brug de specificerede e-mails fra tidligere
const allowedEmails = ["johndoe@gmail.dk", "loremipsum@mail.dk", "tiyam@gmail.com", "lina@gmail.dk", "hamdi@gmail.com"];

// Funktion til at logge ind
function logInd() {
    const søgtEmail = document.querySelector(".input-div.one input").value;
    let erFundet = false;

    for (let i = 0; i < allowedEmails.length; i++) {
        if (allowedEmails[i] === søgtEmail) {
            erFundet = true;
            break;
        }
    }

    if (erFundet) {
        alert("E-mailen er korrekt. Logget ind!");
    } else {
        alert("E-mailen blev ikke fundet. Prøv igen.");
    }

}
// Funktion til at logge ind
function logInd() {
    const søgtEmail = document.getElementById("emailInput").value;
    let erFundet = false;

    for (let i = 0; i < allowedEmails.length; i++) {
        if (allowedEmails[i] === søgtEmail) {
            erFundet = true;
            break;
        }
    }

    if (erFundet) {
        alert("E-mailen er korrekt. Logget ind!");
    } else {
        alert("E-mailen blev ikke fundet. Prøv igen.");
    }
}


