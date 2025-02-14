document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value) {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        li.style.background = "#5a67d8";
        li.style.color = "white";
        li.style.padding = "10px";
        li.style.margin = "5px 0";
        li.style.borderRadius = "5px";
        taskList.appendChild(li);
        taskInput.value = ''; // Clear input
    }
});

document.getElementById('fetchEmailsBtn').addEventListener('click', function() {
    const emailSummary = document.getElementById('emailSummary');
    emailSummary.innerHTML = '<p>Fetching emails...</p>';
    
    // Simulate fetching emails
    setTimeout(() => {
        emailSummary.innerHTML = '<p>You have 3 new emails.</p>';
    }, 2000);
});

document.getElementById('scheduleMeetingBtn').addEventListener('click', function() {
    const meetingInput = document.getElementById('meetingInput');
    const meetingList = document.getElementById('meetingList');

    if (meetingInput.value) {
        const div = document.createElement('div');
        div.textContent = `Meeting scheduled: ${meetingInput.value}`;
        div.style.background = "#5a67d8";
        div.style.color = "white";
        div.style.padding = "10px";
        div.style.margin = "5px 0";
        div.style.borderRadius = "5px";
        meetingList.appendChild(div);
        meetingInput.value = ''; // Clear input
    }
});
