import React from "react";
import RegisterForm from "../components/RegisterForm";
import AppContainer from "../components/AppContainer";
import { TitleComponent } from "../components/common/PageTitle";

const Register = () => {
  return (
    <AppContainer>
      <TitleComponent title={"Register To Predict | Create account "} />

      <RegisterForm />
    </AppContainer>
  );
};

export default Register;
