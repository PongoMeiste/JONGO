// Predefined list of real words
const WORD_LIST = [
    "apple", "banana", "cherry", "date", "elephant", "frost", "grape", "honey", 
    "internet", "jacket", "kite", "lighthouse", "mountain", "night", "orange", 
    "piano", "quilt", "river", "sunshine", "tree", "umbrella", "violet", "whale", 
    "xylophone", "yellow", "zebra", "accordion", "bicycle", "cucumber", "dragon", 
    "eagle", "flute", "guitar", "harmony", "incredible", "jungle", "kangaroo", 
    "lemon", "marzipan", "nectar", "octopus", "penguin", "quicksand", "robot", 
    "snowflake", "tiger", "universe", "vampire", "waltz", "xenon", "yoga", "zodiac",
    "adventure", "breathtaking", "cactus", "dazzling", "elephant", "fascinate", 
    "giraffe", "hippopotamus", "invention", "jovial", "kinetic", "laughter", 
    "mystic", "notorious", "oxygen", "philosophy", "question", "reliable", "serene", 
    "transform", "unique", "velocity", "wonderful", "xenial", "yacht", "zenith", 
    "aesthetic", "brilliant", "calamity", "delightful", "encourage", "flourish", 
    "gracious", "heirloom", "ignition", "journey", "kingdom", "liberation", "mystery", 
    "noteworthy", "optimistic", "paradise", "quaint", "radiance", "solitude", "tranquil", 
    "utopia", "vivid", "whisper", "xerox", "yellowish", "zeal", "astronomy", "balance",
    "celebrate", "destination", "exciting", "fortune", "glory", "heartwarming", "innovate",
    "joyful", "kaleidoscope", "luminous", "magnificent", "navigate", "onward", "pursuit", 
    "quest", "rejuvenate", "soothing", "tremendous", "unfold", "vanguard", "whirlwind", 
    "xylophonist", "yonder", "zenith", "allure", "blissful", "charm", "delicious", 
    "enlighten", "flourishing", "grateful", "hug", "inspire", "joyous", "kindness", 
    "lullaby", "marvelous", "nurture", "opulence", "peaceful", "quicksilver", 
    "restoration", "sparkle", "tantalizing", "unity", "vigor", "whimsy", "x-factor", 
    "yarn", "zealous", "yern"
  ];
  
  // Game variables
  let word, guessedWord, wrongGuesses, guessedLetters;
  
  // DOM Elements
  const wordElement = document.getElementById("word");
  const messageElement = document.getElementById("message");
  const wrongGuessesElement = document.getElementById("wrong-guesses");
  const lettersContainer = document.getElementById("letters");
  const restartButton = document.getElementById("restart");
  
  // Function to generate a random real word from the predefined list
  function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * WORD_LIST.length);
    return WORD_LIST[randomIndex];
  }
  
  // Initialize the game
  function initGame() {
    // Generate a random real word for the player to guess
    word = generateRandomWord();
    guessedWord = Array(word.length).fill("_");
    wrongGuesses = 0;
    guessedLetters = new Set();
  
    // Update the UI
    wordElement.textContent = guessedWord.join(" ");
    messageElement.textContent = "";
    wrongGuessesElement.textContent = wrongGuesses;
    restartButton.style.display = "none";
  
    // Create alphabet buttons for guesses
    lettersContainer.innerHTML = "";
    for (let i = 97; i <= 122; i++) {
      const button = document.createElement("button");
      button.textContent = String.fromCharCode(i);
      button.addEventListener("click", () => guessLetter(button.textContent, button));
      lettersContainer.appendChild(button);
    }
  }
  
  // Handle a letter guess
  function guessLetter(letter, button) {
    if (guessedLetters.has(letter)) return;
    guessedLetters.add(letter);
    button.disabled = true;
  
    if (word.includes(letter)) {
      // Correct guess: reveal the letter(s) in the word
      for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) guessedWord[i] = letter;
      }
      wordElement.textContent = guessedWord.join(" ");
      if (!guessedWord.includes("_")) {
        messageElement.textContent = "🎉 You win!";
        endGame();
      }
    } else {
      // Incorrect guess
      wrongGuesses++;
      wrongGuessesElement.textContent = wrongGuesses;
      if (wrongGuesses >= 6) {
        messageElement.textContent = `💀 You lose! The word was "${word}".`;
        endGame();
      }
    }
  }
  
  // End the game
  function endGame() {
    document.querySelectorAll("#letters button").forEach((btn) => (btn.disabled = true));
    restartButton.style.display = "inline";
  }
  
  // Restart the game
  restartButton.addEventListener("click", initGame);
  
  // Start the first game
  initGame();
  