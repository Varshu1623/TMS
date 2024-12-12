import React, { useState } from 'react';
import './TeamQueue.css';

const TeamQueue = () => {
  const [teams, setTeams] = useState([]);
  const [showNewTeamPage, setShowNewTeamPage] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [teamDescription, setTeamDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState('Agents');
  const [rolesVisible, setRolesVisible] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const availableRoles = ['CEO', 'Manager'];

  const handleAddTeam = () => {
    setShowNewTeamPage(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTeam = { name: teamName, description: teamDescription };
    setTeams([...teams, newTeam]);
    setShowNewTeamPage(false);
    setTeamName('');
    setTeamDescription('');
    setRolesVisible(false);
  };

  const handleDropdownSelect = (option) => {
    setSelectedOption(option);
    setRolesVisible(option === 'Roles');
    setDropdownVisible(false);
  };

  const handleDropdownToggle = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleRoleSelection = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const handleSelectAll = () => {
    if (selectedRoles.length === availableRoles.length) {
      setSelectedRoles([]);
    } else {
      setSelectedRoles(availableRoles);
    }
  };

  return (
    <div>
      {showNewTeamPage ? (
        <div>
          <h2>Team Information</h2>
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

            <div>
              <label>Select the agents, teams, roles, and roles & subordinates to include in this team:</label>
              <div className="dropdown">
                <button type="button" onClick={handleDropdownToggle}>
                  {selectedOption} ▼
                </button>
                {dropdownVisible && (
                  <ul className="dropdown-menu">
                    {['Agents', 'Teams', 'Roles', 'Roles and Subordinates'].map((option, index) => (
                      <li key={index} onClick={() => handleDropdownSelect(option)}>
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {rolesVisible && (
              <div className="roles-list">
                <p onClick={handleSelectAll} style={{ cursor: 'pointer', color: 'blue' }}>
                  {selectedRoles.length === availableRoles.length ? '✔ Select All' : 'Select All'}
                </p>
                <ul>
                  {availableRoles.map((role, index) => (
                    <li key={index} onClick={() => handleRoleSelection(role)} style={{ cursor: 'pointer' }}>
                      {selectedRoles.includes(role) ? '✔ ' : ''} {role}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="points-to-remember">
              <p>Points To Remember</p>
              <ul>
                <li>
                  While selecting roles/roles & subordinates, keep in mind only the agents who are part of the role in this department will be added as team members.
                </li>
                <li>
                  When an agent is added/removed from a sub team/role, the change will reflect in the team as well.
                </li>
              </ul>
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      ) : (
        teams.length === 0 ? (
          <div>
            <p>You haven't added any teams yet.</p>
            <button onClick={handleAddTeam}>Add New Team</button>
          </div>
        ) : (
          <div>
            <h3>Your Teams</h3>
            <ul>
              {teams.map((team, index) => (
                <li key={index}>
                  <strong>{team.name}:</strong> {team.description}
                </li>
              ))}
            </ul>
            <button onClick={handleAddTeam}>Add New Team</button>
          </div>
        )
      )}
    </div>
  );
};

export default TeamQueue;
