// RandomMemoryButton.js
import React from 'react';
import '../styles/random-memory.css';

function RandomMemoryButton({ memories }) {
  const showRandomMemory = () => {
    if (memories.length === 0) {
      alert("No memories yet! Complete an activity to add to memories.");
      return;
    }
    const randomIndex = Math.floor(Math.random() * memories.length);
    const randomMemory = memories[randomIndex];

    alert(
      `Memory: ${randomMemory.name}\n\nComment: ${randomMemory.comment || "No comment added."}`
    );
  };

  return (
    <button onClick={showRandomMemory} className="random-memory-button">
      🎲 Show Random Memory
    </button>
  );
}

export default RandomMemoryButton;
