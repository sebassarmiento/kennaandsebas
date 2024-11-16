// Memories.js
import React from 'react';
import '../styles/memories.css';

function Memories({ memories }) {
  return (
    <div className="memories">
      <h2 className="memories-title">Memories 📸</h2>
      {memories.length > 0 ? (
        <div className="memories-grid">
          {memories.map((memory) => (
            <div key={memory.id} className="memory-item">
              <div className="memory-photo">
                {memory.photo ? (
                  <img src={memory.photo} alt={memory.name} className="memory-image" />
                ) : (
                  <div className="photo-placeholder">📷</div>
                )}
              </div>
              <div className="memory-info">
                <h3 className="memory-name">{memory.name}</h3>
                <p className="memory-comment">{memory.comment || "No comment added."}</p>
                <p className="memory-date">
                  {new Date(memory.completedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-memories">No memories yet! Complete some activities to create memories.</p>
      )}
    </div>
  );
}

export default Memories;
