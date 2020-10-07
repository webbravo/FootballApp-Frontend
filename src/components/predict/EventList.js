import React, { useContext } from "react";
import { EventContext } from "../../context/EventContext";
import SingleEventBox from "./SingleEventBox";
import { Betslip, isBetslipFull, updateBetSlip } from "../predict/Betslip";
import { useState } from "react";

function EventList() {
  const eventContext = useContext(EventContext);

  const { countries, defaultCountry } = eventContext;

  // Get Fixtures from the Default Country
  const fixtures = countries[defaultCountry];

  // Get
  const [outcomes, setOutcomes] = useState([]);

  const onChangeValue = (selectedOutcome) => {
    // See what is selected

    if (isBetslipFull(selectedOutcome)) {
      alert("Bet Slip Full, only 10 outcomes allowed");
    } else {
      // Add Outcome selection
      addSelection(selectedOutcome);

      // Get Outcome Selection
      const newOutcomeList = getOutcomeSelection();

      console.log(newOutcomeList);

      //  Set Outcome
      setOutcomes(newOutcomeList);
    }
  };

  return (
    <div className="row">
      <div className="col-xl-9 col-lg-9 sports-list">
        <SingleEventBox
          onChangeValue={onChangeValue}
          fixtures={fixtures}
          defaultCountry={defaultCountry}
        />
      </div>
      <div className="col-xl-3 col-lg-3x">
        <Betslip selectedOutcome={outcomes} setOutcomes={setOutcomes} />
      </div>
    </div>
  );
}

const addSelection = (selectedOutcome) => {
  // TODO: Optimization Code and encapsulate
  const { code, outcomes } = JSON.parse(localStorage.getItem("prediction"));

  let matchExists = outcomes.find(
    (d) => d.fixtureId === selectedOutcome.fixtureId
  );

  if (matchExists !== undefined) {
    //delete the current match
    outcomes.splice(outcomes.indexOf(matchExists), 1);
    outcomes.push(selectedOutcome);

    // update Betslip
    updateBetSlip(code, outcomes);
  } else {
    outcomes.push(selectedOutcome);

    // update Betslip
    updateBetSlip(code, outcomes);
  }
};

const getOutcomeSelection = () => {
  const { outcomes } = JSON.parse(localStorage.getItem("prediction"));
  return outcomes;
};

export default EventList;
