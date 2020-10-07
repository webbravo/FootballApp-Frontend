import React from "react";

const FormSelectorCountry = ({ changeCountry, defaultCountry, countries }) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-3">
      <div className="form-group">
        <select
          className="form-control"
          defaultValue={defaultCountry}
          onChange={(e) => changeCountry(e)}
        >
          <option value="">Pick a country</option>
          {countries.sort().map((country, index, arr) => (
            <option value={country} key={index}>
              {country}
            </option>
          ))}
          ;
        </select>
      </div>
    </div>
  );
};

const FormSelectorDate = ({ options }) => {
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

const LeagueSelector = ({
  leagues,
  defaultCountry,
  countries,
  changeCountry,
}) => {
  return (
    <div className="filter-menu">
      <div className="row justify-content-center">
        <FormSelectorDate options={["Today", "Yesterday"]} />

        <FormSelectorCountry
          changeCountry={changeCountry}
          defaultCountry={defaultCountry}
          countries={countries}
        />

        {/* <FormSelectorLeague leagues={countries} /> */}
      </div>
    </div>
  );
};

export default LeagueSelector;
