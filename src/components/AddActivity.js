import React, { useState } from 'react';
import '../styles/add-activity.css';

function AddActivity({ addActivity }) {
  const [activity, setActivity] = useState('');

  const handleInputChange = (e) => {
    setActivity(e.target.value);
  };

  const handleAddActivity = () => {
    if (activity.trim()) {
      const newActivity = { id: Date.now(), name: activity }; // Using Date.now() as a unique id for simplicity
      addActivity(newActivity);
      setActivity(''); // Clear the input after adding
    }
  };

  return (
    <div className="add-activity">
      <input
        type="text"
        className="activity-input"
        value={activity}
        onChange={handleInputChange}
        placeholder="Add a new activity..."
      />
      <button onClick={handleAddActivity} className="add-button">+</button>
    </div>
  );
}

export default AddActivity;
