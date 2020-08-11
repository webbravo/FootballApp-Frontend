import React, { useEffect, useState, useContext } from "react";
import { FetchContext } from "../context/FetchContext";

// import SingleBet from "../components/SingleBet";

const SingleBet = (prop) => {
  return JSON.stringify(prop);
};

const LiveFeed = () => {
  const fetchContext = useContext(FetchContext);
  const [userPredictions, setPredictions] = useState({
    prediction: [
      "Ajax",
      "PSV",
      "Feyenoord",
      "NAC",
      "FC Twente",
      "FC Groningen",
      "FC Utrecht",
    ],
  });
  useEffect(() => {
    const getPredictions = async () => {
      try {
        const { data } = await fetchContext.authAxios.get("dashboard-data");
        setPredictions(data);
      } catch (err) {
        console.log(err);
      }
    };

    getPredictions();
  }, [fetchContext]);

  return (
    <div className="live-feed  col-xl-9 col-lg-9">
      <SingleBet {...userPredictions} />
    </div>
  );
};

export default LiveFeed;
