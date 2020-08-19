import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { EventContext } from "../../context/EventContext";
import { useEffect } from "react";
import { FetchContext } from "../../context/FetchContext";

function EventList() {
  const eventContext = useContext(EventContext);

  return (
    <div className="sports-list">
      {eventContext.leagues.map((league, index, arr) => {
        return (
          <>
            <EventTitle key={index} league={league} />
            <SingleEventBox league_id={league.league_id} />
          </>
        );
      })}
    </div>
  );
}

const EventTitle = ({ league }) => {
  return (
    <h4 className="title">
      <img width="50" src={league.logo} alt={league.name} />
      {" " + league.name}
    </h4>
  );
};

const SingleEventBox = ({ league_id }) => {
  const { authAxios } = useContext(FetchContext);

  // TODO: Move Get

  const [events, setEvent] = useState([]);

  useEffect(() => {
    async function fetchEventData() {
      const { data } = await authAxios.get(
        `/rapidapi/odds/league/${league_id}`
      );
      setEvent(data);
      console.log(data);
    }
    fetchEventData();
  }, [authAxios, league_id]);

  return (
    <div className="single-sport-box">
      <div className="part-icon">
        <FontAwesomeIcon icon={faFutbol} />
      </div>

      <TeamBox team={{ away: "Man U ", home: "Man City" }} />

      <MatchesBox outcome={[]} />

      <MoreOutcome events={events.results} />
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

const MoreOutcome = ({ events }) => {
  return (
    <div className="part-bonus">
      <span className="bonus-number">{events > 1 ? `+${events}` : "0"}</span>
    </div>
  );
};

export default EventList;
