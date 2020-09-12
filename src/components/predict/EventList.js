import React, { useContext } from "react";
import { EventContext } from "../../context/EventContext";
import SingleEventBox from "./SingleEventBox";

function EventList() {
  const eventContext = useContext(EventContext);

  const { countries, defaultCountry } = eventContext;

  // Get Fixtures from the Default Country
  const fixtures = countries[defaultCountry];

  return (
    <div className="sports-list">
      <SingleEventBox fixtures={fixtures} defaultCountry={defaultCountry} />
    </div>
  );
}

export default EventList;
