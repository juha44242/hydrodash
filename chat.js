var isUserTurn = true;

function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var messageText = messageInput.value.trim();

    if (messageText !== '') {
        addMessage('sent', messageText, 'sent_image.jpg');
        messageInput.value = '';
        setTimeout(receiveMessage, 1000);
    }
}

function receiveMessage() {
    var receivedMessage = "Hello! This is a received message.";
    addMessage('received', receivedMessage, 'received_image.jpg');
}

function addMessage(type, text, imageSrc) {
    var chatMessages = document.getElementById('chat-messages');
    var messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + type;

    var textElement = document.createElement('p');
    textElement.textContent = text;
    messageDiv.appendChild(textElement);

    if (imageSrc) {
        var imageElement = document.createElement('img');
        imageElement.src = imageSrc;
        imageElement.alt = 'Attached Image';
        messageDiv.appendChild(imageElement);
    }

    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;

   
    isUserTurn = !isUserTurn;

    if (isUserTurn) {
        setTimeout(sendMessage, 1000);
    }
}


sendMessage();

