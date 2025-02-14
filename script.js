document.getElementById("chatInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});

function appendMessage(content, className) {
    let chatBox = document.getElementById("chatBox");
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message", className);
    messageDiv.innerHTML = content;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    let userMessage = document.getElementById("chatInput").value.trim();
    if (!userMessage) return;
    
    appendMessage(userMessage, "user-message");
    document.getElementById("chatInput").value = "";
    
    setTimeout(() => {
        appendMessage("Thinking...","ai-message");
        setTimeout(() => {
            appendMessage("Hello! How can I assist you today?", "ai-message");
        }, 1500);
    }, 1000);
}