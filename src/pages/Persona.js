import React from 'react';
import avatarImage from './avatar.jpg';

export function Persona() {

  const activities = [
    { name: 'Task Completed', count: 25 },
    { name: 'Tasks in Progress', count: 5 },
    // Add more activities as needed
  ];

  const performance = {
    level: 'Intermediate',
    points: 1500,
    // Add more performance metrics as needed
  };

  return (
    <div className="Persona">
      {/* Avatar */}
      <div className="AvatarContainer">
        <img src={avatarImage} alt="User Avatar" className="Avatar" />
      </div>

      {/* Information about activities */}
      <div className="ActivitiesBlock">
        <h2>Activities</h2>
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>
              {activity.name}: {activity.count}
            </li>
          ))}
        </ul>
      </div>

      {/* Information about performance */}
      <div className="PerformanceBlock">
        <h2>Performance</h2>
        <p>Level: {performance.level}</p>
        <p>Points: {performance.points}</p>
        {/* Add more performance metrics as needed */}
      </div>
    </div>
  );
}
