import React, { useContext } from "react";
import { EventContext } from "../../context/EventContext";

// import { Form, Formik } from "formik"; country

const FormSelectorCountry = ({ countries, handleChange }) => {
  const { defaultCountry } = useContext(EventContext);

  return (
    <div className="col-xl-3 col-lg-3 col-md-3">
      <div className="form-group">
        <select
          className="form-control"
          defaultValue={defaultCountry}
          value={defaultCountry}
          onChange={handleChange}
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
  return (
    <div className="col-xl-3 col-lg-3 col-md-3">
      <div className="form-group">
        <select className="form-control">
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

const LeagueSelector = ({ leagues, countries }) => {
  const getSelectedCountry = (option) => {
    console.log(option);
  };

  return (
    <div className="filter-menu">
      <div className="row justify-content-center">
        <FormSelector options={["Today", "Yesterday", "June 12th 2020"]} />

        <FormSelectorCountry
          onChange={getSelectedCountry}
          countries={countries}
        />

        <FormSelectorLeague leagues={leagues} />
      </div>
    </div>
  );
};

export default LeagueSelector;
