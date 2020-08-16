import React, { useState, createContext, useEffect } from "react";
import { publicFetch } from "../util/fetch";

const EventContext = createContext();
const { Provider } = EventContext;

const EventProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [event, setEvent] = useState([]);
  const [defaultCountry, setDefaultCountries] = useState("England");

  useEffect(() => {
    async function fetchCountryData() {
      const { data } = await publicFetch.get("/rapidapi/countries");
      setCountries(data.countries);
      setLeagues(data.leagues);
    }
    fetchCountryData();
  }, []);

  return (
    <Provider
      value={{
        countries,
        leagues,
        defaultCountry,
        event,
      }}
    >
      {children}
    </Provider>
  );
};

export { EventContext, EventProvider };
