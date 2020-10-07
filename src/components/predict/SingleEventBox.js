import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { FetchContext } from "../../context/FetchContext";
import axios from "axios";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import TeamBox from "./TeamBox";
import { genCode } from "../../util";

const SingleEventBox = ({ onChangeValue, fixtures, defaultCountry }) => {
  return (
    <>
      {defaultCountry ? (
        fixtures.map((fixture, index) => {
          const {
            event_timestamp,
            fixture_id,
            awayTeam,
            league,
            homeTeam,
          } = fixture;

          return (
            <React.Fragment key={index}>
              <EventTitle league={league} />
              <div key={index} className="single-sport-box row">
                <div className="part-icon col-md-2">
                  <FontAwesomeIcon icon={faFutbol} />
                </div>

                <TeamBox homeTeam={homeTeam} awayTeam={awayTeam} />

                <OutcomeBox
                  onChangeValue={onChangeValue}
                  timestamp={event_timestamp}
                  fixture_id={fixture_id}
                />
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

const OutcomeBox = ({ onChangeValue, timestamp, fixture_id }) => {
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

  return <MatchesBox {...{ outcomes, fixture_id, timestamp, onChangeValue }} />;
};

const MatchesBox = ({ outcomes, fixture_id, timestamp, onChangeValue }) => {
  // Know the active radio button
  const [activeButton, setActiveButton] = useState();

  const handleChange = (event) => {
    const selectedOutcome = JSON.parse(event.target.value);

    // Set the Selected radio to state
    setActiveButton(selectedOutcome.fixtureId);

    // Add Outcome selection
    onChangeValue(selectedOutcome);
  };

  return (
    <div onChange={handleChange}>
      {outcomes.map((outcome, index, arr) => {
        const { label_name, label_id, values } = outcome;
        return values ? (
          <div key={index} className="part-match">
            <div>
              <br />
              <strong className="text-center">
                <p label_id={label_id}>{label_name}</p>
              </strong>
            </div>
            <div>
              {values.map((value, index, arr) => {
                // Set the labelId for Radio
                const labelId = genCode(
                  `${fixture_id}_${label_name}_${index}_${label_id}`
                );

                const data = JSON.stringify({
                  fixtureId: fixture_id,
                  label_id,
                  odd: value.odd,
                  label_name,
                  value: value.value,
                  timestamp,
                });

                return (
                  <React.Fragment key={index}>
                    <input
                      id={labelId}
                      type="radio"
                      value={data}
                      name={fixture_id}
                      defaultChecked={activeButton === fixture_id}
                    />
                    <label htmlFor={labelId}>{value.value}</label>
                    <br />
                  </React.Fragment>
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
