import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { FetchContext } from "../../context/FetchContext";
import axios from "axios";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import TeamBox from "./TeamBox";

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

  return <>{results > 0 ? <MatchesBox outcomes={outcomes} /> : ""}</>;
};

const MatchesBox = ({ outcomes }) => {
  return outcomes.map((outcome, index, arr) => {
    const { label_name, label_id, values } = outcome;

    // console.log(label_name);
    // console.log(fixture_id);
    // console.log(updateAt);

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
            return (
              <div key={index} className="single-place-to-bet">
                {
                  <Link to="#">
                    <span className="bet-price">{value.odd}</span>
                    <span className="result-for-final">{value.value}</span>
                  </Link>
                }
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <p>GREATER THINGS</p>
    );
  });
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
