document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.querySelector("main");
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Change Content";
    toggleButton.classList.add("btn", "btn-primary", "my-2");
    document.body.insertBefore(toggleButton, mainContent);
    
    toggleButton.addEventListener("click", function () {
        mainContent.innerHTML = "<h2 class='text-primary'>New Content Loaded!</h2><p>This is the updated main content area.</p>";
    });
    
    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "Toggle Dark Mode";
    darkModeToggle.classList.add("btn", "btn-secondary", "my-2", "ms-2");
    document.body.insertBefore(darkModeToggle, mainContent);
    
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
