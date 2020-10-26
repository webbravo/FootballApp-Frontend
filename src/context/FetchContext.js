import React, { createContext, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const FetchContext = createContext();
const { Provider } = FetchContext;

const FetchProvider = ({ children }) => {
  const authContext = useContext(AuthContext);

  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  authAxios.interceptors.request.use(
    (config) => {
      // 'Bearer' is a scheme in OAuth
      config.headers.Authorization = `Bearer ${authContext.authState.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await authAxios.get("/csrf-token");
      authAxios.defaults.headers["X-CSRF-Token"] = data.csrfToken;
      console.log(data.csrfToken);
    };

    getCsrfToken();
  }, [authAxios]);

  return (
    <Provider
      value={{
        authAxios,
      }}
    >
      {children}
    </Provider>
  );
};

export { FetchContext, FetchProvider };
