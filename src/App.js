import React, { Suspense } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FourOFour from "./pages/FourOFour";
import Home from "./pages/Home";
import LiveFeed from "./pages/LiveFeed";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { FetchProvider } from "./context/FetchContext";

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route exact path="/live-feed">
          <LiveFeed />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <FourOFour />
        </Route>
      </Switch>
    </Suspense>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <FetchProvider>
          <AppRoutes />
        </FetchProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
