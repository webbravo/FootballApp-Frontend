import React from "react";

const TeamBox = ({ homeTeam, awayTeam }) => {
  return (
    <div className="part-team">
      <ul>
        <li>
          <span className="team-name">{homeTeam.team_name} (H)</span>
          <span className="score-number">-</span>
        </li>
        <li>
          <span className="team-name">{awayTeam.team_name} (A)</span>
          <span className="score-number">-</span>
        </li>
      </ul>
    </div>
  );
};

export default TeamBox;
