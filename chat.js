function selectProfile(profileName) {
    document.getElementById('selectedProfile').innerText = profileName;
    displayProfileImage(profileName);
    // Add logic to load chat messages for the selected profile if needed
}

function displayProfileImage(profileName) {
    var profileImage = document.getElementById('profileImage');
    switch (profileName) {
        case 'Iris':
            profileImage.src = 'iris-profile.jpg';
            break;
        case 'Jakob':
            profileImage.src = 'jakob-profile.jpg';
            break;
        case 'Philip':
            profileImage.src = 'philip-profile.png';
            break;
        case 'Jane':
            profileImage.src = 'jane_avatar.png';
            break;
        default:
            // Add a default image or handle the case as needed
            break;
    }
}

function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var messageText = messageInput.value.trim();

    if (messageText !== '') {
        var currentProfile = document.getElementById('selectedProfile').innerText;
        addMessage('sent', messageText, currentProfile);
        messageInput.value = '';
         console.log('Message sent:', messageText); 
        setTimeout(receiveMessage, 1000);
    }
}

function receiveMessage() {
    var currentProfile = document.getElementById('selectedProfile').innerText;
    var receivedMessage = getReceivedMessageForProfile(currentProfile);
    addMessage('received', receivedMessage, currentProfile === 'Iris' ? 'Jakob' : 'Iris');
}

function getReceivedMessageForProfile(profile) {
    // You can customize received messages based on the selected profile
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

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Initial call to start the conversation
sendMessage();

