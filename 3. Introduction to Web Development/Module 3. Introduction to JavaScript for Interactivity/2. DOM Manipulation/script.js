
const button = document.getElementById("newQuoteButton");
const quoteDisplay = document.getElementById("quoteDisplay");

const quotes = [
  "The best way to predict the future is to invent it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Success is not the key to happiness. Happiness is the key to success.",
];

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});

