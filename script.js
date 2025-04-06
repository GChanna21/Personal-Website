const quotes = [
  "Believe in yourself and all that you are.",
  "The future depends on what you do today.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Make each day your masterpiece."
];

function generateQuote() {
  const quoteText = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}
