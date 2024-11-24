document.getElementById('factButton').addEventListener('click', function() {
    const facts = [
        "Honey never spoils.",
        "Octopuses have three hearts.",
        "Bananas are berries, but strawberries aren't.",
        "A group of flamingos is called a 'flamboyance'.",
        "More people visit France than any other country."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    const factDisplay = document.getElementById('factDisplay');
    factDisplay.style.opacity = 0; // Reset opacity for fade-in effect
    setTimeout(() => {
        factDisplay.innerText = facts[randomIndex];
        factDisplay.style.opacity = 1; // Fade-in effect
    }, 100); // Short delay to reset the opacity
});
