import React, { useContext } from "react";
import AppContainer from "../components/AppContainer";
import LeagueSelector from "../components/predict/LeagueSelector";
import LeagueTitle from "../components/predict/LeagueTitle";
import EventList from "../components/predict/EventList";
import { EventContext, EventProvider } from "../context/EventContext";

import { TitleComponent } from "../components/common/TitleComponent";
const EventGroupTable = () => {
  const {
    leagues,
    countries,
    defaultCountry,
    setDefaultCountry,
  } = useContext(EventContext);

  // Set Countries into an array
  const countriesArray = Object.keys(countries);

  const changeCountry = (e) => {
    if (!e.target.value) {
      setDefaultCountry(countriesArray[0]);
    } else {
      // Set to the first country on the list of Countries
      setDefaultCountry(e.target.value);
    }
  };

  return (
    <div className="betting-table">
      <LeagueSelector
        leagues={leagues}
        countries={countriesArray}
        defaultCountry={defaultCountry}
        changeCountry={changeCountry}
      />

      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-10">
          <div className="tab-content bet-tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="all-sports"
              role="tabpanel"
              aria-labelledby="all-sports-tab"
            >
              <>
                <LeagueTitle country={defaultCountry} />
                <EventList />
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Predict = () => (
  <AppContainer>
    <TitleComponent title={"Live Matches to Predict"} />
    <EventProvider>
      <div className="betting" id="in_play">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-8">
              <div className="section-title">
                <h2>Upcoming Games</h2>
                <p>
                  Predict to win with real odds for betting with the higher
                  stakes you can get
                </p>
              </div>
            </div>
          </div>
          <EventGroupTable />
        </div>
      </div>
    </EventProvider>
  </AppContainer>
);

export default Predict;
