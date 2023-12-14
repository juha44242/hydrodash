
var chatMessagesArray = [];
var profiles = ['Jakob', 'Iris', 'Philip', 'Jane'];
var maxMessages = 50; 

function selectProfile(profileName) {
    document.getElementById('selectedProfile').innerText = profileName;
    displayProfileImage(profileName);
    displayAllMessages(); 
}

function displayProfileImage(profileName) {
    var profileImage = document.getElementById('profileImage');
    var profileIndex = profiles.indexOf(profileName);

    if (profileIndex !== -1) {
        profileImage.src = profileName.toLowerCase() + '-profile.jpg';
    } else {
        
        profileImage.src = 'default-profile.jpg';
    }
}

function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var messageText = messageInput.value.trim();
    var currentProfile = document.getElementById('selectedProfile').innerText;

    if (messageText !== '') {
        addMessage('sent', messageText, currentProfile);

        
        chatMessagesArray.push({ type: 'sent', text: messageText, sender: currentProfile });

       
        if (chatMessagesArray.length > maxMessages) {
            chatMessagesArray.shift(); 
        }

        messageInput.value = '';
        console.log('Message sent:', messageText);
        setTimeout(receiveMessage, 1000);
    }
}

function receiveMessage() {
    var currentProfile = document.getElementById('selectedProfile').innerText;
    var receivedMessage = getReceivedMessageForProfile(currentProfile);

    
    chatMessagesArray.push({ type: 'received', text: receivedMessage, sender: currentProfile === 'Iris' ? 'Jakob' : 'Iris' });

    addMessage('received', receivedMessage, currentProfile === 'Iris' ? 'Jakob' : 'Iris');
}

function getReceivedMessageForProfile(profile) {
    
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

  
}


function displayAllMessages() {
    var currentProfile = document.getElementById('selectedProfile').innerText;
    var chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = ''; 

    for (var i = 0; i < chatMessagesArray.length; i++) {
        var message = chatMessagesArray[i];

       
        if (message.sender === currentProfile || message.type === 'received') {
            addMessage(message.type, message.text, message.sender);
        }
    }

   
}


sendMessage();



