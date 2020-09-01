import React, { useContext } from "react";
import { EventContext } from "../../context/EventContext";
import SingleEventBox from "./SingleEventBox";

function EventList() {
  const eventContext = useContext(EventContext);
  return (
    <div className="sports-list">
      {eventContext.leagues.map((league, index, arr) => {
        return (
          <div key={index}>
            <>
              <EventTitle key={index} league={league} />
              <SingleEventBox league_id={league.league_id} />
            </>
          </div>
        );
      })}
    </div>
  );
}

// .filter((league) => league.coverage.fixtures.event == true)

const EventTitle = ({ league }) => {
  return (
    <h4 className="title">
      <img width="50" src={league.logo} alt={league.name} />
      {" " + league.name}
    </h4>
  );
};

export default EventList;
