document.getElementById("chatInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});

function appendMessage(content, className, isUser) {
    let chatBox = document.getElementById("chatBox");
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message", className);
    
    let img = document.createElement("img");
    img.src = isUser ? "user.png" : "BOT.jpg";
    img.classList.add("profile-icon");
    
    if (isUser) {
        messageDiv.appendChild(document.createTextNode(content));
        messageDiv.appendChild(img);
    } else {
        messageDiv.appendChild(img);
        messageDiv.appendChild(document.createTextNode(content));
    }
    
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    let userMessage = document.getElementById("chatInput").value.trim();
    if (!userMessage) return;
    
    appendMessage(userMessage, "user-message", true);
    document.getElementById("chatInput").value = "";
    
    setTimeout(() => {
        appendMessage("Thinking...", "ai-message", false);
        setTimeout(() => {
            appendMessage("Hello! How can I assist you today?", "ai-message", false);
        }, 1500);
    }, 1000);
}