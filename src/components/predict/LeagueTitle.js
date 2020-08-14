import React from "react";

const LeagueTitle = ({ name, numFixtures }) => {
  return (
    <div className="sport-content-title">
      <h3>
        Leagues from {name}
        <span className="sport-content-conter">[{numFixtures}]</span>
      </h3>
    </div>
  );
};

export default LeagueTitle;
