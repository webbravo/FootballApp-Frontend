import React, { useState, useContext } from "react";
import Hyperlink from "./common/Hyperlink";
import ButtonFilled from "./common/ButtonFilled";
import { Form, Formik } from "formik";
import { AuthContext } from "../context/AuthContext";
import { publicFetch } from "./../util/fetch";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";
import FormInput from "./../components/FormInput";
import FormSuccess from "./FormSuccess";
import FormError from "./FormError";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const authContext = useContext(AuthContext);
  const [loginSuccess, setLoginSuccess] = useState();
  const [loginError, setLoginError] = useState();
  const [loginLoading, setLoginLoading] = useState(false);
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);

  const submitCredentials = async (credentials) => {
    try {
      setLoginLoading(true);
      const { data } = await publicFetch.post(
        "/users/authenticate",
        credentials
      );
      authContext.setAuthState(data);
      setLoginSuccess(data.message);
      setLoginError("");
      setTimeout(() => {
        setRedirectOnLogin(true);
      }, 1000);
      console.log(data.message);
    } catch (error) {
      setLoginLoading(false);
      const { data } = error.response;
      setLoginError(data.message);
      setLoginSuccess(null);
      console.log(error);
    }
  };

  return (
    <>
      {redirectOnLogin && <Redirect to="/predict" />}
      <div className="login">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-8">
              <div className="section-title">
                <h2>LogIn to Predict</h2>
                <p>Welcome back, login to continue</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="login-form">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  onSubmit={(values) => submitCredentials(values)}
                  validationSchema={LoginSchema}
                >
                  {() => (
                    <Form>
                      {loginSuccess && <FormSuccess text={loginSuccess} />}
                      {loginError && <FormError text={loginError} />}
                      <FormInput
                        ariaLabel="Email"
                        name="email"
                        type="text"
                        placeholder="Enter Your Mail"
                      />
                      <FormInput
                        ariaLabel="Password"
                        name="password"
                        type="password"
                        placeholder="Enter Your Password"
                      />
                      <ButtonFilled
                        type="submit"
                        text="Log In"
                        loading={loginLoading}
                      />
                      <p>
                        <span id="forgot">
                          <Hyperlink
                            to={"/forgotPassword"}
                            text={"Forgot Password ?"}
                          />
                        </span>
                      </p>
                      <p>
                        <span id="signup">
                          <Hyperlink
                            to={"/signup"}
                            text={" Don't have account ? Sign up"}
                          />
                        </span>
                      </p>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
