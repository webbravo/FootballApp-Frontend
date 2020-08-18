import React, { useState, createContext, useEffect, useContext } from "react";
import { FetchContext } from "../context/FetchContext";

const EventContext = createContext();
const { Provider } = EventContext;

const EventProvider = ({ children }) => {
  const { authAxios } = useContext(FetchContext);

  const [countries, setCountries] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [event] = useState([]);
  const [defaultCountry] = useState("England");

  useEffect(() => {
    async function fetchCountryData() {
      const { data } = await authAxios.get("/rapidapi/countries");
      setCountries(data.countries);
      setLeagues(data.leagues);
    }
    fetchCountryData();
  }, [authAxios]);

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
