import React from "react";

const LeagueTitle = ({ country, numFixtures }) => {
  return (
    <div className="sport-content-title">
      <h3>
        Leagues from {country}
        <span className="sport-content-conter">[{numFixtures}]</span>
      </h3>
    </div>
  );
};

export default LeagueTitle;
