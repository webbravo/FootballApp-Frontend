import React from "react";
import SignupForm from "../components/SignupForm";
import AppContainer from "../components/AppContainer";
import { TitleComponent } from "../components/common/TitleComponent";

const Signup = () => {
  return (
    <AppContainer>
      <TitleComponent title={"Sign Up | Create an account"} />
      <SignupForm />
    </AppContainer>
  );
};

export default Signup;
