let words = [];
let index = 0;
let interval = null;
let paused = false;

const wordDisplay = document.getElementById("wordDisplay");
const inputText = document.getElementById("inputText");
const speedInput = document.getElementById("speed");
const speedValue = document.getElementById("speedValue");

speedInput.addEventListener("input", () => {
  speedValue.textContent = speedInput.value;
});

document.getElementById("startBtn").addEventListener("click", () => {
  if (!paused) {
    const text = inputText.value.trim();
    if (!text) return;
    words = text.split(/\s+/);
    index = 0;
  }
  paused = false;
  startReading();
});

document.getElementById("pauseBtn").addEventListener("click", () => {
  paused = true;
  clearInterval(interval);
});

document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(interval);
  paused = false;
  index = 0;
  wordDisplay.textContent = "Ready?";
});

function startReading() {
  const delay = 60000 / parseInt(speedInput.value);
  clearInterval(interval);
  interval = setInterval(() => {
    if (index >= words.length) {
      clearInterval(interval);
      wordDisplay.textContent = "Done!";
      return;
    }
    wordDisplay.textContent = words[index++];
  }, delay);
}