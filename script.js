const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");

        // Get current date and time
        const now = new Date();
        const dateTime = now.toLocaleString(); // e.g., "6/16/2025, 2:35:45 PM"

        // Set task with date and time
        li.innerHTML = `${inputBox.value}<br><small class="date-time">${dateTime}</small>`;

        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for '×'
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // Add 'checked' class and remove after 500ms
        e.target.classList.add("checked");
        setTimeout(() => {
            e.target.remove();
            saveData();
        }, 500); // Delay for visual feedback
    } else if (e.target.tagName === "SPAN") {
        // Manual delete using ×
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
