import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { FetchContext } from "../../context/FetchContext";
import axios from "axios";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import TeamBox from "./TeamBox";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const SingleEventBox = ({ fixtures, defaultCountry }) => {
  return (
    <>
      {defaultCountry ? (
        fixtures.map((fixture, index) => {
          return (
            <React.Fragment key={index}>
              <EventTitle league={fixture.league} />
              <div key={index} className="single-sport-box row">
                <div className="part-icon col-md-2">
                  <FontAwesomeIcon icon={faFutbol} />
                </div>

                <TeamBox
                  homeTeam={fixture.homeTeam}
                  awayTeam={fixture.awayTeam}
                />
                <OutcomeBox fixture_id={fixture.fixture_id} />
              </div>
            </React.Fragment>
          );
        })
      ) : (
        <div className="single-sport-box">
          <div className="col-md-12">
            <div className="text-center">
              <h3>Pick a Country</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const OutcomeBox = ({ fixture_id }) => {
  const { authAxios } = useContext(FetchContext);
  const [outcomes, setOutcomes] = useState([]);
  const [results, setResults] = useState(0);

  useEffect(() => {
    authAxios.CancelToken = axios.CancelToken;
    authAxios.isCancel = axios.isCancel;
    authAxios.source = authAxios.CancelToken.source();

    //  Get the list of Outcomes for a fixtures
    async function getOutcomes() {
      const { data } = await authAxios.get(
        `/rapidapi/odds/fixture/${fixture_id}`
      );
      setOutcomes(data);
      setResults(data.length);
    }

    getOutcomes();
  }, [authAxios, fixture_id]);

  return <>{results > 0 ? <MatchesBox {...{ outcomes, fixture_id }} /> : ""}</>;
};

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

    localStorage.setItem(
      "prediction",
      JSON.stringify({
        code,
        outcomes,
      })
    );
  } else {
    outcomes.push(selectedOutcome);

    localStorage.setItem(
      "prediction",
      JSON.stringify({
        code,
        outcomes,
      })
    );
  }
};

const MatchesBox = ({ outcomes, fixture_id }) => {
  const onChangeValue = (event) => {
    const selectedOutcome = JSON.parse(event.target.value);

    // See what is selected
    console.log(selectedOutcome);

    // Add Outcome selection
    addSelection(selectedOutcome);
  };

  return (
    <div onChange={onChangeValue}>
      {outcomes.map((outcome, index, arr) => {
        const { label_name, label_id, values } = outcome;
        return values ? (
          <div className="part-match">
            <div>
              <br />
              <strong className="text-center">
                <p label_id={label_id}>{label_name}</p>
              </strong>
            </div>
            <div>
              {values.map((value, index, arr) => {
                const data = JSON.stringify({
                  fixtureId: fixture_id,
                  odd: value.odd,
                  label_name,
                  label_id,
                  value: value.value,
                });
                return (
                  <>
                    <input type="radio" value={data} name={fixture_id} />
                    {value.value}
                    <br />
                  </>
                );
              })}
            </div>
          </div>
        ) : (
          <p>NO ODDS FIXTURE</p>
        );
      })}
    </div>
  );
};

const BetButton = ({ value, index, label_name, onClickBtn }) => {
  const [isActive, setActive] = useState(false);

  const clicked = () => {
    isActive === true ? setActive(false) : setActive(true);
    onClickBtn(value.value);
  };

  const id = `${label_name}_${index}`;
  return (
    <div className="single-place-to-bet">
      {
        <Link
          id={id}
          value={value}
          type="button"
          onClick={clicked}
          className={isActive && "active"}
          to="#"
        >
          <span className="bet-price">{value.odd}</span>
          <span className="result-for-final">{value.value}</span>
        </Link>
      }
    </div>
  );
};

const EventTitle = ({ league }) => {
  return (
    <h4 className="title">
      <img width="50" src={league.logo} alt={""} />
      {league.name}
    </h4>
  );
};

// eslint-disable-next-line
const LoadingIcon = () => {
  return (
    <>
      <FontAwesomeIcon icon={faCircleNotch} spin />
      <span className="ml-2">Loading...</span>
    </>
  );
};

export default SingleEventBox;
