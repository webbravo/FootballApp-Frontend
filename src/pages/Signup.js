import React from "react";
import SignupForm from "../components/SignupForm";
import AppContainer from "../components/AppContainer";
import { TitleComponent } from "../components/common/PageTitle";


const Signup = () => {
  return (
    <AppContainer>
      <TitleComponent title={"Signup To Predict | Create account "} />

      <SignupForm />
    </AppContainer>
  );
};

export default Signup;
