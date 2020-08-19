import React, { lazy, Suspense, useContext } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import FourOFour from "./pages/FourOFour";
import Home from "./pages/Home";
import "./App.css";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { FetchProvider } from "./context/FetchContext";
import { EventProvider } from "./context/EventContext";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Preloader from "./components/common/Preloader";

const Predict = lazy(() => import("./pages/Predict"));
const LiveFeed = lazy(() => import("./pages/LiveFeed"));

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
    <Suspense fallback={<Preloader />}>
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
          <EventProvider>
            <Predict />
          </EventProvider>
        </AuthenticatedRoute>

        <AuthenticatedRoute exact path="/profile">
          <Profile />
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
