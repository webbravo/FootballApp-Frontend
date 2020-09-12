import React from "react";

const TeamBox = ({ homeTeam, awayTeam }) => {
  return (
    <div className="part-team col-md-10">
      <ul>
        <li>
          <span>
            <img alt={homeTeam.team_name} width="30" src={homeTeam.logo} />
          </span>
          <span className="team-name">{homeTeam.team_name} (H)</span>

          <span className="score-number">-</span>
        </li>
        <li></li>
        <li>
          <span>
            <img alt={awayTeam.team_name} width="30" src={awayTeam.logo} />
          </span>
          <span className="team-name">{awayTeam.team_name} (A)</span>
          <span className="score-number">-</span>
        </li>
      </ul>
    </div>
  );
};

export default TeamBox;
