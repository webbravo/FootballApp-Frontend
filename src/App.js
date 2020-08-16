import React, { Suspense, useContext } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FourOFour from "./pages/FourOFour";
import Home from "./pages/Home";
import Predict from "./pages/Predict";
import LiveFeed from "./pages/LiveFeed";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { FetchProvider } from "./context/FetchContext";

const AuthenticatedRoute = ({ children, ...rest }) => {
  const authContext = useContext(AuthContext);
  return (
    <Route
      {...rest}
      path="/login"
      render={() =>
        authContext.isAuthenticated() ? <>{children}</> : <Redirect to="/" />
      }
    ></Route>
  );
};

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
        <AuthenticatedRoute exact path="/predict">
          <Predict />
        </AuthenticatedRoute>
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
