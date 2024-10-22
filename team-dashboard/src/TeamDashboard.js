// src/TeamDashboard.js
import React from 'react';
import TeamCard from './TeamCard';
import './TeamDashboard.css';

const TeamDashboard = () => {
  const teamMembers = [
    {
      role: 'Team Manager',
      name: 'Bikash Dahal',
      experience: '1 year',
      projects: 'Project A', 
      email: 'bikash.dahal@example.com',
       photo: require('./images/image.jpg'), 
    },
    {
      role: 'Developer',
      name: 'Rajesh Khadka',
      experience: '1 year',
      projects: 'Project B',
      email: 'rajesh@example.com',
      // photo: require('./images/pink.jpg'), 
    },
    {
      role: 'Developer',
      name: 'Pranisha Neupane',
      experience: '1 year',
      projects: 'Project C',
      email: 'pranisha@example.com',
    //  photo: require('./images/yello.jpg'), 

    },

    {
        role: 'Developer',
        name: 'Samiksha Ghimire',
        experience: '1 year',
        projects: 'Project D',
        email: 'samiksha@example.com',
      //  photo: require('./images/red.jpg'), 
  
    },

    {
        role: 'Developer',
        name: 'Preeti Shrestha',
        experience: '1 year',
        projects: 'Project E',
        email: 'preeti@example.com',
      //  photo: require('./images/flower.jpg'), 
    },  


  ];

  return (
    <div className="dashboard">
      <h1>Project Name: Task Management System</h1>
      <h2>Team Members</h2>
      <div className="card-container">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamDashboard;
