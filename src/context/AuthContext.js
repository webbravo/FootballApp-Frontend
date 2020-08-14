import React, { useState, createContext } from "react";
import { useHistory } from "react-router";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const expiresAt = localStorage.getItem("expiresAt");
  const userInfo = localStorage.getItem("userInfo");

  const history = useHistory();
  const [authState, setAuthState] = useState({
    token: token,
    expiresAt: expiresAt,
    userInfo: userInfo ? JSON.parse(userInfo) : {},
  });

  const setAuthInfo = ({ token, expiresAt, userInfo }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("expiresAt", expiresAt);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setAuthState({
      token,
      expiresAt,
      userInfo,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresAt");
    localStorage.removeItem("userInfo");
    // Clear Auth state
    setAuthState({
      token: "",
      expiresAt: "",
      userInfo: {},
    });
    history.push("/login");
  };

  const isAuthenticated = () => {
    if (!authState.token || !authState.userInfo) {
      return false;
    }
    return new Date().getTime() / 1000 < authState.expiresAt;
  };

  const isAdmin = () => authState.userInfo.role === "admin";

  return (
    <Provider
      value={{
        authState,
        setAuthState: (authInfo) => {
          setAuthInfo(authInfo);
        },
        isAuthenticated,
        logout,
        isAdmin,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
