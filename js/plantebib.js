function openModal(text) {
    document.getElementById('modalText').innerText = text;
    document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    if (event.target === document.getElementById('myModal')) {
        closeModal();
    }
};