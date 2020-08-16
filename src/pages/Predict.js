import React, { useContext, Suspense } from "react";
import AppContainer from "../components/AppContainer";
import LeagueSelector from "../components/predict/LeagueSelector";
import LeagueTitle from "../components/predict/LeagueTitle";
import EventList from "../components/predict/EventList";
import { EventContext, EventProvider } from "../context/EventContext";

const EventGroupTable = () => {
  const { leagues, countries } = useContext(EventContext);

  return (
    <div className="betting-table">
      <Suspense fallback={<div>Loading...</div>}>
        <LeagueSelector leagues={leagues} countries={countries} />

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
                  <LeagueTitle
                    country={"leagues"}
                    numFixtures={leagues.length}
                  />
                  <EventList />
                </>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

const Predict = () => (
  <AppContainer>
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
