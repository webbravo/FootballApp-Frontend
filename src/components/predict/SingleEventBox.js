import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { FetchContext } from "../../context/FetchContext";
import axios from "axios";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import TeamBox from "./TeamBox";

const SingleEventBox = ({ league_id }) => {
  const { authAxios } = useContext(FetchContext);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [fixtures, setFixtures] = useState([]);
  const [results, setResult] = useState(0);
  useEffect(() => {
    authAxios.CancelToken = axios.CancelToken;
    authAxios.isCancel = axios.isCancel;
    authAxios.source = authAxios.CancelToken.source();

    setFetchLoading(true);

    //  Get the List of fixtures within a league
    async function getFixtures() {
      const { data } = await authAxios.get(
        `/rapidapi/fixtures/league/${league_id}`
      );

      setFetchLoading(false);
      if (data.results > 0) {
        setFixtures(data.fixtures);
        setResult(data.results);
      }
      console.log(data);
    }

    getFixtures();
  }, [authAxios, setFetchLoading, league_id]);

  return (
    <>
      {fetchLoading ? (
        <div className="single-sport-box center-text">
          <div className="col-lg-12">
            <LoadingIcon />
          </div>
        </div>
      ) : results > 0 ? (
        fixtures.map((fixture, index) => {
          return (
            <div key={index} className="single-sport-box">
              <div className="part-icon">
                <FontAwesomeIcon icon={faFutbol} />
              </div>

              <TeamBox
                homeTeam={fixture.homeTeam}
                awayTeam={fixture.awayTeam}
              />

              <OutcomeBox fixture_id={fixture.fixture_id} />
            </div>
          );
        })
      ) : (
        <div className="single-sport-box text-center">
          <div className="col-lg-12">
            <FontAwesomeIcon icon={faFutbol} /> No Fixtures today
          </div>
        </div>
      )}
    </>
  );
};

const OutcomeBox = ({ fixture_id }) => {
  const { authAxios } = useContext(FetchContext);
  const [odds, setOdds] = useState([]);
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
      if (data.results > 0) {
        setOdds(data.odds);
        setResults(data.results);
      }
    }

    getOutcomes();
  }, [authAxios, fixture_id]);

  return (
    <>
      {results > 0 ? (
        <>
          <MatchesBox outcomes={odds} />
          <MoreOutcome numbersOfOutcome={results} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

const MatchesBox = ({ outcomes }) => {
  /**
   * @outcome [array] holds possible outcomes
   * Exe: Take outcome => bets => Values [3]
   */
  return outcomes.map((outcome, index, arr) => {
    const { bookmakers, fixture } = outcome;
    const { league_id, fixture_id, updateAt } = fixture;

    const bets = bookmakers[0].bets;
    const values = bets[0].values;

    return (
      <div className="part-match">
        <p label_id={bets.label_id}>{bets.label_name}</p>
        {values.map((value, index, arr) => {
          return (
            <div key={index} className="single-place-to-bet">
              <Link to="#">
                <span className="bet-price">{value.odd}</span>
                <span className="result-for-final">{value.value}</span>
              </Link>
            </div>
          );
        })}
      </div>
    );
  });
};

const MoreOutcome = ({ numbersOfOutcome }) => {
  return (
    <div className="part-bonus">
      <span className="bonus-number">
        {numbersOfOutcome > 0 ? `+${numbersOfOutcome}` : "0"}
      </span>
    </div>
  );
};

const LoadingIcon = () => {
  return (
    <>
      <FontAwesomeIcon icon={faCircleNotch} spin />
      <span className="ml-2">Loading...</span>
    </>
  );
};

export default SingleEventBox;
