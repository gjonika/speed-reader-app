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
  wordDisplay.innerHTML = "Ready?";
});

function startReading() {
  const delay = 60000 / parseInt(speedInput.value);
  clearInterval(interval);
  interval = setInterval(() => {
    if (index >= words.length) {
      clearInterval(interval);
      wordDisplay.innerHTML = "Done!";
      return;
    }

    const word = formatWord(words[index++]);
    wordDisplay.innerHTML = word;
    wordDisplay.classList.remove("word-animate");
    void wordDisplay.offsetWidth; // force reflow
    wordDisplay.classList.add("word-animate");
  }, delay);
}

function formatWord(word) {
  const len = word.length;
  if (len === 0) return "";

  let focusIndex = 0;
  if (len <= 2) focusIndex = 0;
  else if (len === 3) focusIndex = 1;
  else focusIndex = Math.floor(len / 2 - 1);

  return (
    word.substring(0, focusIndex) +
    `<span style="color: red;">${word.charAt(focusIndex)}</span>` +
    word.substring(focusIndex + 1)
  );
}

// Auto-fill from URL ?text=...
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const input = urlParams.get("text");
  if (input) {
    inputText.value = decodeURIComponent(input);
    words = input.split(/\s+/);
    index = 0;
    startReading();
  }
});
