// PendingList.js
import React, { useState } from 'react';
import ActivityItem from './ActivityItem';
import '../styles/pending-list.css';

function PendingList({ activities, completeActivity, addActivity }) {
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
    <div className="pending-list">
      <h2 className="pending-title">Things to Do 📝</h2>

      {/* Pending Activities List */}
      {activities.length > 0 ? (
        activities.map((activity) => (
          <ActivityItem
            key={activity.id}
            activity={activity}
            completeActivity={completeActivity}
          />
        ))
      ) : (
        <p className="no-activities">No pending activities! Add something fun! 🎉</p>
      )}

      {/* Add Activity Form */}
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

    </div>
  );
}

export default PendingList;
