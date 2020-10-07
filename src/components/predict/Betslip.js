import React from "react";
import { useState } from "react";
import moment from "moment";

export function Betslip({ selectedOutcome, setOutcomes }) {
  const [betSuccess, setBetSuccess] = useState();
  const [betError, setBetError] = useState();
  const [placeBetLoading, setPlaceBetLoading] = useState(false);

  // Check if Outcomes is still valid
  const validOutcomes = isOutcomeValid(selectedOutcome);

  const submitBetslip = async () => {
    if (!isBetslipFull()) {
      alert("Bet slip is not up to 10 games");
    } else {
      try {
        // Set loading to true
        setPlaceBetLoading(true);

        // Upload the Betslip to backend
        // -- const { data } = await publicFetch.post("/prediction/placeBet", validOutcomes);

        // Set the success message
        // -- setBetSuccess(data.message);

        // Clear the Prediction BetSlip
        // -- clearBetslip();

        setTimeout(() => {
          setPlaceBetLoading(false);
        }, 1000);
      } catch (error) {}

      // Upload bet slip to backend
    }
  };

  return (
    <div>
      {betSuccess && <p>{betSuccess}</p>}
      {betError && <p>{betError}</p>}
      <h2>Betslip({countOutcome({ validOutcomes })})</h2>
      <ListOutcome validOutcomes={validOutcomes} />
      <br />
      <br />
      <button
        type="button"
        style={{ border: "1px solid grey" }}
        className="btn btn-default mr-1"
        disabled={placeBetLoading}
        onClick={() => {
          submitBetslip();
          setOutcomes([]);
        }}
      >
        Place bet
      </button>

      <button
        type="button"
        style={{ border: "1px solid grey" }}
        className="btn btn-danger"
        onClick={() => {
          clearBetslip();
          setOutcomes([]);
        }}
      >
        Clear slip
      </button>
    </div>
  );
}

const countOutcome = ({ validOutcomes }) => {
  return validOutcomes.length;
};

const clearBetslip = () => {
  updateBetSlip("", []);
};

const ListOutcome = ({ validOutcomes }) => {
  return validOutcomes.map((outcome, index) => {
    return (
      <React.Fragment key={index}>
        <hr />
        <p>{index + 1} - Team 1 vs Team 3</p>
        <p>
          {outcome.label_name} ({outcome.value})
        </p>
        <span>Odd: {outcome.odd}</span>
      </React.Fragment>
    );
  });
};

// Check if an outcome is still valid based on startTime
// (remove stall selections)
const isOutcomeValid = (selectedOutcome) => {
  return deleteStallOutcome();
};

const deleteStallOutcome = () => {
  const prediction = JSON.parse(localStorage.getItem("prediction"));

  if (!prediction) {
    return [];
  }

  const { code, outcomes } = prediction;

  for (let i = 0; i < outcomes.length; i++) {
    if (outcomes[i].timestamp < moment().unix()) {
      outcomes.splice(i, 1);
    }
  }

  //  Update the betSlip
  updateBetSlip(code, outcomes);

  return outcomes;
};

export function updateBetSlip(code, outcomes) {
  localStorage.setItem(
    "prediction",
    JSON.stringify({
      code,
      outcomes,
    })
  );
}

export function isBetslipFull() {
  const { outcomes } = JSON.parse(localStorage.getItem("prediction"));
  console.log(outcomes.length);
  if (outcomes.length === 10 || outcomes.length > 10) {
    return true;
  }

  return false;
}

const uploadBetslip = () => {
  alert("Send to the back end");
};
