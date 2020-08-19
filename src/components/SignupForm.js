import React, { useState, useContext } from "react";
import Hyperlink from "./common/Hyperlink";
import ButtonFilled from "./common/ButtonFilled";
import { Form, Formik } from "formik";
import {} from "../context/AuthContext";
import { publicFetch } from "../util/fetch";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";
import FormInput from "./FormInput";
import FormSuccess from "./FormSuccess";
import FormError from "./FormError";
import { AuthContext } from "../context/AuthContext";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "⬆  Both password need to be the same "
  ),
});

const SignupForm = () => {
  const authContext = useContext(AuthContext);
  const [loginSuccess, setLoginSuccess] = useState();
  const [loginError, setLoginError] = useState();
  const [loginLoading, setLoginLoading] = useState(false);
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);

  const submitCredentials = async (credentials) => {
    try {
      setLoginLoading(true);
      const { data } = await publicFetch.post("/users/signup", credentials);
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
      {redirectOnLogin && <Redirect to="/login" />}

      <div className="register">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-8">
              <div className="section-title">
                <h2>Register To Predict Now</h2>
                <p>New to 10dollarPredict.com? Quickly Sign up!.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-9">
              <div className="all-form">
                <div className="single-form" id="first-step">
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
                        <div className="input-spacing">
                          <FormInput
                            ariaLabel="Username"
                            name="username"
                            type="text"
                            placeholder="USERNAME"
                          />
                        </div>
                        <p>
                          All new Username must contain at least 6 characters.
                          We also suggest the username must not start with
                          numbers.
                        </p>
                        <div className="input-spacing">
                          <FormInput
                            ariaLabel="firstname"
                            name="firstName"
                            type="text"
                            placeholder="FIRSTNAME"
                          />
                        </div>

                        <div className="input-spacing">
                          <FormInput
                            ariaLabel="Lastname"
                            name="lastName"
                            type="text"
                            placeholder="LASTNAME"
                          />
                        </div>

                        <div className="input-spacing">
                          <FormInput
                            ariaLabel="Email"
                            name="email"
                            type="email"
                            placeholder="EMAIL"
                          />
                        </div>

                        <div className="input-spacing">
                          <FormInput
                            ariaLabel="Phone"
                            name="phone"
                            type="text"
                            placeholder="WHATS APP NUMBER"
                          />
                        </div>

                        <p>
                          All new passwords must contain at least 8 characters.
                        </p>

                        <div className="input-spacing">
                          <FormInput
                            ariaLabel="Password"
                            name="password"
                            type="password"
                            placeholder="PASSWORD"
                          />
                        </div>
                        <div className="input-spacing">
                          <FormInput
                            ariaLabel="password Confirmation"
                            name="passwordConfirmation"
                            type="password"
                            placeholder="CONFIRM PASSWORD"
                          />
                        </div>

                        <p>
                          By clicking "SIGN UP", you confirm that you have read
                          and understood the
                          <strong> 10dollarPredict.com</strong>
                          <Hyperlink
                            to="/privacy-policy"
                            text=" T&C, Privacy & Cookie Policy"
                          />
                          , and agree to its terms.
                        </p>

                        <ButtonFilled
                          type="submit"
                          text="Sign up"
                          class="next"
                          loading={loginLoading}
                        />

                        <p>
                          <span id="login">
                            <Hyperlink
                              to={"/login"}
                              text={"Have account ? Login "}
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
      </div>
    </>
  );
};

export default SignupForm;
