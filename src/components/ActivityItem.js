import React from 'react';
import '../styles/activity-item.css';

function ActivityItem({ activity, completeActivity }) {
  const handleComplete = () => {
    const comment = prompt("Leave a comment for this activity! 📝"); // Replace with a modal in the future
    const photo = ""; // Placeholder for image upload feature
    completeActivity(activity, comment, photo);
  };

  return (
    <div className="activity-item">
      <input type="checkbox" onChange={handleComplete} className="activity-checkbox" />
      <span className="activity-name">{activity.name}</span>
    </div>
  );
}

export default ActivityItem;
