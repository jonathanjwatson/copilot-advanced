document.addEventListener("DOMContentLoaded", function () {
    const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
    const body = document.body;
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    
    toggleDarkModeButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        header.classList.toggle("bg-secondary");
        footer.classList.toggle("bg-primary");
    });

    const gameForm = document.getElementById("game-form");
    const gameList = document.getElementById("game-list");
    const gameNameInput = document.getElementById("game-name");
    
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
