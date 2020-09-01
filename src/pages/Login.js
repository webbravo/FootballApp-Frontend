import React from "react";
import LoginForm from "../components/LoginForm";
import AppContainer from "../components/AppContainer";
import { TitleComponent } from "../components/common/PageTitle";

const Login = () => {
  return (
    <AppContainer>
      <TitleComponent title={"Login account"} />
      <LoginForm />
    </AppContainer>
  );
};

export default Login;
