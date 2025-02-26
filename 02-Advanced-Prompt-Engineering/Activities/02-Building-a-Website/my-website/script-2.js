document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.querySelector("main");
    const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
    const gameForm = document.getElementById("game-form");
    const gameList = document.getElementById("game-list");
    const gameNameInput = document.getElementById("game-name");
    
    toggleDarkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
    
    gameForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const gameName = gameNameInput.value.trim();
        if (gameName) {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.textContent = gameName;
            gameList.appendChild(listItem);
            gameNameInput.value = "";
        }
    });
});
