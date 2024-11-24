document.getElementById('factButton').addEventListener('click', function() {
    const facts = [
        "Honey never spoils.",
        "Octopuses have three hearts.",
        "Bananas are berries, but strawberries aren't.",
        "A group of flamingos is called a 'flamboyance'.",
        "More people visit France than any other country.",
      "The longest place name in the world is Taumatawhakatangihangakoauauotamateapokaiwhenuakitanatahu, in New Zealand.",
      "A blue whale’s heart is so big, a human could swim through its arteries. 🐋",
      "A sneeze can travel up to 100 miles per hour. 🤧",
      "Sharks can hear music underwater and are drawn to low-frequency sounds. 🎵🦈"
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').innerText = facts[randomIndex];
});
