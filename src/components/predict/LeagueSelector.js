import React, { useContext } from "react";
import { EventContext } from "../../context/EventContext";

const FormSelectorCountry = () => {
  const { defaultCountry, setDefaultCountry, countries } = useContext(
    EventContext
  );

  function changeCountry(e) {
    setDefaultCountry(e.target.value);
  }

  return (
    <div className="col-xl-3 col-lg-3 col-md-3">
      <div className="form-group">
        <select
          className="form-control"
          defaultValue={defaultCountry}
          onChange={(e) => changeCountry(e)}
        >
          {countries.map((country, index, arr) => (
            <option value={country.country} key={index}>
              {country.country}
            </option>
          ))}
          ;
        </select>
      </div>
    </div>
  );
};

const FormSelectorLeague = ({ leagues }) => {
  const handleChange = () => {};
  console.log(leagues);
  return (
    <div className="col-xl-3 col-lg-3 col-md-3">
      <div className="form-group">
        <select className="form-control" onChange={handleChange}>
          {leagues.map((league, index, arr) => (
            <option key={league.league_id}>{league.name}</option>
          ))}
          ;
        </select>
      </div>
    </div>
  );
};

const FormSelector = ({ options }) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-3">
      <div className="form-group">
        <select className="form-control">
          {options.map((item, index, arr) => (
            <option key={index}>{item}</option>
          ))}
          ;
        </select>
      </div>
    </div>
  );
};

const LeagueSelector = ({ leagues, countries, changeCountry }) => {
  return (
    <div className="filter-menu">
      <div className="row justify-content-center">
        <FormSelector options={["Today", "Yesterday", "June 12th 2020"]} />

        <FormSelectorCountry />

        <FormSelectorLeague leagues={leagues} />
      </div>
    </div>
  );
};

export default LeagueSelector;
