import React from "react";

const LeagueTitle = ({ country }) => {
  return country ? (
    <div className="sport-content-title">
      <h3>Leagues from {country}</h3>
    </div>
  ) : (
    " "
  );
};

export default LeagueTitle;
