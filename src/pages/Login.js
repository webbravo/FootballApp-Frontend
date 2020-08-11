import React, { useState, useContext } from "react";
import LoginForm from "../components/Login";
import AppContainer from "../components/AppContainer";

// const LoginSchema = Yup.object().shape({
//   email: Yup.string().required("Email is required"),
//   password: Yup.string().required("Password is required"),
// });

const Login = () => {
  return (
    <AppContainer>
      <LoginForm />
    </AppContainer>
  );
};

export default Login;
