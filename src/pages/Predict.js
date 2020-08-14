import React from "react";
import AppContainer from "../components/AppContainer";
import LeagueSelector from "../components/predict/LeagueSelector";
import LeagueTitle from "../components/predict/LeagueTitle";
import EventList from "../components/predict/EventList";

const EventGroupTable = () => {
  return (
    <div className="betting-table">
      <LeagueSelector />

      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-10">
          <div className="tab-content bet-tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="all-sports"
              role="tabpanel"
              aria-labelledby="all-sports-tab"
            >
              <LeagueTitle name="England" numFixtures={27} />

              <EventList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Predict = () => (
  <AppContainer>
    <div className="betting" id="in_play">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-8">
            <div className="section-title">
              <h2>Upcoming Games</h2>
              <p>
                Predict to win with real odds for betting with the higher stakes
                you can get
              </p>
            </div>
          </div>
        </div>
        <EventGroupTable />
      </div>
    </div>
  </AppContainer>
);

export default Predict;
