body {
  font-family: Arial, sans-serif;
  background: #121212;
  color: white;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  resize: none;
  box-sizing: border-box;
}

#speed {
  width: 100%;
}

button {
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #1f1f1f;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #333;
}

#wordDisplay {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  word-wrap: break-word;
  text-align: center;
}

@media (max-width: 500px) {
  #wordDisplay {
    font-size: 2.2rem;
  }

  button {
    width: 100%;
    font-size: 1.1rem;
  }

  textarea {
    font-size: 1rem;
  }
}

/* Animation */
@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.word-animate {
  animation: popIn 0.2s ease-out;
}