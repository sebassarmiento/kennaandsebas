// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import PendingList from './components/PendingList';
import Memories from './components/Memories';
import RandomMemoryButton from './components/RandomMemoryButton';

function App() {
  const [pendingActivities, setPendingActivities] = useState([]);
  const [memories, setMemories] = useState([]);
  
  const addActivity = (newActivity) => {
    setPendingActivities([...pendingActivities, newActivity]);
  };

  const completeActivity = (activity, comment, photo) => {
    const completedActivity = { ...activity, comment, photo, date: new Date().toISOString() };
    setMemories([completedActivity, ...memories]);
    setPendingActivities(pendingActivities.filter((a) => a.id !== activity.id));
  };

  return (
    <div className="App">
      <Header />
      <PendingList activities={pendingActivities} completeActivity={completeActivity} addActivity={addActivity} />
      <RandomMemoryButton memories={memories} />
      <Memories memories={memories} />
    </div>
  );
}

export default App;
