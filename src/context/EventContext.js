import React, { useState, createContext, useEffect, useContext } from "react";
import { FetchContext } from "../context/FetchContext";
import axios from "axios";

const EventContext = createContext();
const { Provider } = EventContext;

const EventProvider = ({ children }) => {
  const { authAxios } = useContext(FetchContext);

  const [countries, setCountries] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [event] = useState([]);
  const [defaultCountry, setDefaultCountry] = useState("Australia");

  useEffect(() => {
    authAxios.CancelToken = axios.CancelToken;
    authAxios.isCancel = axios.isCancel;
    authAxios.source = authAxios.CancelToken.source();

    // TODO: Create an IIFE
    async function getCountries() {
      const { data } = await authAxios.get("/rapidapi/countries");
      setCountries(data.countries);
    }
    getCountries();

    async function getLeaguesByCountry() {
      const { data } = await authAxios.get(
        `/rapidapi/leagues/country/${defaultCountry}`
      );
      if (data["data"] === undefined) {
        setLeagues(data);
      } else {
        setLeagues(data["data"]);
      }
    }

    getLeaguesByCountry();
  }, [authAxios, defaultCountry]);

  return (
    <Provider
      value={{
        countries,
        leagues,
        setDefaultCountry,
        defaultCountry,
        event,
      }}
    >
      {children}
    </Provider>
  );
};

export { EventContext, EventProvider };
