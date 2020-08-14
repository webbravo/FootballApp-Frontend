import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

function EventList({ text }) {
  return (
    <div className="sports-list">
      <EventTitle />

      <SingleEventBox />
      <SingleEventBox />
      <SingleEventBox />
    </div>
  );
}

const EventTitle = ({ league }) => {
  return (
    <h4 className="title">
      <img
        width="50"
        src="https://media.api-football.com/leagues/2.png"
        alt="English Premier League"
      />
      Premier League
    </h4>
  );
};

const SingleEventBox = () => {
  return (
    <div className="single-sport-box">
      <div className="part-icon">
        <FontAwesomeIcon icon={faFutbol} />
      </div>

      <TeamBox team={{ away: "Man U ", home: "Man City" }} />

      <MatchesBox outcome={[]} />

      <MoreOutcome outcome={[]} />
    </div>
  );
};

const TeamBox = ({ team }) => {
  return (
    <div className="part-team">
      <ul>
        <li>
          <span className="team-name">{team.home}</span>
          <span className="score-number">-</span>
        </li>
        <li>
          <span className="team-name">{team.away}</span>
          <span className="score-number">-</span>
        </li>
      </ul>
    </div>
  );
};

const MatchesBox = ({ outcome }) => {
  /**
   * @outcome [array] holds possible outcomes
   * Exe: Take outcome [3]
   */
  return (
    <div className="part-match">
      <div className="single-place-to-bet">
        <Link to="#">
          <span className="bet-price">1.00</span>
          <span className="result-for-final">arsenal</span>
        </Link>
      </div>
      <div className="single-place-to-bet">
        <Link to="#">
          <span className="bet-price">4.30</span>
          <span className="result-for-final">draw</span>
        </Link>
      </div>
      <div className="single-place-to-bet">
        <Link to="#">
          <span className="bet-price">5.75</span>
          <span className="result-for-final">everton</span>
        </Link>
      </div>
    </div>
  );
};

const MoreOutcome = ({ outcome }) => {
  return (
    <div className="part-bonus">
      <span className="bonus-number">
        {outcome.length > 1 ? `+${outcome.length}` : "+336"}
      </span>
    </div>
  );
};

export default EventList;
