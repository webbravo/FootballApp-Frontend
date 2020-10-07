import React, { useState, createContext, useEffect, useContext } from "react";
import { FetchContext } from "../context/FetchContext";
import axios from "axios";

const EventContext = createContext();
const { Provider } = EventContext;

const EventProvider = ({ children }) => {
  const { authAxios } = useContext(FetchContext);
  const [countries, setCountries] = useState([]);
  const [results, setResults] = useState([]);
  const [fixtures, setFixtures] = useState([]);
  const [defaultCountry, setDefaultCountry] = useState("");

  useEffect(() => {
    let mounted = true;

    authAxios.CancelToken = axios.CancelToken;
    authAxios.isCancel = axios.isCancel;
    authAxios.source = authAxios.CancelToken.source();

    // Get the live Matches for today
    async function getTodayFixture() {
      const { data } = await authAxios.get("/rapidAPI/fixtures/today");
      if (mounted) {
        setCountries(data.countries);
        setResults(data.results);
      }
    }

    // Get fixture for today
    getTodayFixture();

    // Set LocalStorage Prediction
    if (!JSON.parse(localStorage.getItem("prediction"))) {
      const prediction = {
        code: "bskfksnf",
        outcomes: [],
      };
      localStorage.setItem("prediction", JSON.stringify(prediction));
    }

    return () => {
      mounted = false;
    };
  }, [authAxios]);

  return (
    <Provider
      value={{
        countries,
        defaultCountry,
        setDefaultCountry,
        results,
        fixtures,
        setFixtures,
      }}
    >
      {children}
    </Provider>
  );
};

export { EventContext, EventProvider };
