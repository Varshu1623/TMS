import React, { useState } from 'react';

const NewTeamPage = () => {
  const [teamName, setTeamName] = useState('');
  const [teamDescription, setTeamDescription] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to save the new team
    // ...
  };

  return (
    <div>
      <h2>New Team</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="teamName">Team Name</label>
          <input
            type="text"
            id="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="teamDescription">Description</label>
          <textarea
            id="teamDescription"
            value={teamDescription}
            onChange={(e) => setTeamDescription(e.target.value)}
            required
          ></textarea>
        </div>
        {/* Add input fields for team members */}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default NewTeamPage;