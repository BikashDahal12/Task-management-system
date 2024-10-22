// src/TeamCard.js
import React from 'react';
import './TeamCard.css';

const TeamCard = ({ role, name, experience, projects, email, photo }) => {
  return (
    <div className="team-card">
      <img src={photo} alt={name} className="team-photo" />
      <h3>{role}</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Experience:</strong> {experience}</p>
      <p><strong>Working Projects:</strong> {projects}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default TeamCard;
