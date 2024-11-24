// Array of fun facts
const funFacts = [
    "The shortest war in history lasted only 38 minutes.",
    "Bananas are technically berries, but strawberries aren’t.",
    "An octopus has three hearts, and two stop beating when it swims.",
    "Wombats produce cube-shaped poop to mark their territory.",
    "A blue whale's heart is so large, a human could swim through its arteries.",
    "Honey never spoils. Pots of honey over 3,000 years old are still edible.",
    "The first computer bug was an actual moth stuck in a computer in 1947.",
    "Google was initially called 'Backrub' before being renamed.",
    "Sharks can hear music underwater and are drawn to low-frequency sounds.",
    "The first-ever domain name registered was Symbolics.com in 1985."
];

// Select elements
const factButton = document.getElementById("factButton");
const factDisplay = document.getElementById("factDisplay");

// Event listener for button
factButton.addEventListener("click", function () {
    // Add a loading animation
    factDisplay.textContent = "Thinking of a fun fact... 🤔";
    factDisplay.style.opacity = "0.5";
    
    // Simulate a slight delay for a better user experience
    setTimeout(() => {
        // Get a random fact from the array
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        
        // Display the fact with fade-in effect
        factDisplay.textContent = randomFact;
        factDisplay.style.opacity = "1";
    }, 1000); // 1-second delay
});
