// Arrays til at gemme chatbeskeder og profiler
var chatMessagesArray = [];
var profiles = ['Jakob', 'Iris', 'Philip', 'Jane'];
var maxMessages = 50; // Maksimalt antal beskeder, der skal bevares i chatMessagesArray

function selectProfile(profileName) {
    document.getElementById('selectedProfile').innerText = profileName;
    displayProfileImage(profileName);
    displayAllMessages(); // Opdateret for at vise alle gemte beskeder for den valgte profil
}

function displayProfileImage(profileName) {
    var profileImage = document.getElementById('profileImage');
    var profileIndex = profiles.indexOf(profileName);

    if (profileIndex !== -1) {
        profileImage.src = profileName.toLowerCase() + '-profile.jpg';
    } else {
        // Håndter, hvis profilen ikke findes
        profileImage.src = 'default-profile.jpg';
    }
}

function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var messageText = messageInput.value.trim();
    var currentProfile = document.getElementById('selectedProfile').innerText;

    if (messageText !== '') {
        addMessage('sent', messageText, currentProfile);

        // Gem beskeden i arrayet
        chatMessagesArray.push({ type: 'sent', text: messageText, sender: currentProfile });

        // Sørg for, at antallet af beskeder ikke overstiger maxMessages
        if (chatMessagesArray.length > maxMessages) {
            chatMessagesArray.shift(); // Fjern den ældste besked
        }

        messageInput.value = '';
        console.log('Message sent:', messageText);
        setTimeout(receiveMessage, 1000);
    }
}

function receiveMessage() {
    var currentProfile = document.getElementById('selectedProfile').innerText;
    var receivedMessage = getReceivedMessageForProfile(currentProfile);

    // Gem den modtagne besked i arrayet
    chatMessagesArray.push({ type: 'received', text: receivedMessage, sender: currentProfile === 'Iris' ? 'Jakob' : 'Iris' });

    addMessage('received', receivedMessage, currentProfile === 'Iris' ? 'Jakob' : 'Iris');
}

function getReceivedMessageForProfile(profile) {
    // Du kan tilpasse modtagne beskeder baseret på den valgte profil
    switch (profile) {
        case 'Iris':
            return "Hej, hvordan går det?";
        case 'Jakob':
            return "Hi there! How are you doing?";
        case 'Philip':
            return "Hola, ¿cómo estás?";
        case 'Jane':
            return "Hey Jane, how's it going?";
        default:
            return "Default received message";
    }
}

function addMessage(type, text, sender) {
    var chatMessages = document.getElementById('chat-messages');
    var messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + type;

    var textElement = document.createElement('p');
    var senderElement = document.createElement('span');

    senderElement.className = 'sender';
    senderElement.textContent = sender + ': ';
    textElement.appendChild(senderElement);

    textElement.innerHTML += text;
    messageDiv.appendChild(textElement);

    chatMessages.appendChild(messageDiv);

    // chatMessages.scrollTop = chatMessages.scrollHeight; // Kommenteret ud for at bevare chathøjden uden automatisk rulning
}

// Funktion til at vise alle gemte beskeder
function displayAllMessages() {
    var currentProfile = document.getElementById('selectedProfile').innerText;
    var chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = ''; // Tøm chat-container

    for (var i = 0; i < chatMessagesArray.length; i++) {
        var message = chatMessagesArray[i];

        // Vis kun beskeder for den aktuelle profil
        if (message.sender === currentProfile || message.type === 'received') {
            addMessage(message.type, message.text, message.sender);
        }
    }

    // chatMessages.scrollTop = chatMessages.scrollHeight; // Kommenteret ud for at bevare chathøjden uden automatisk rulning
}

// Initial opkald for at starte samtalen
sendMessage();



