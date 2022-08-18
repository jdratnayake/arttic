// libraries
import React, { useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

// js files
import AuthenticationField from "../../components/AuthenticationField/AuthenticationField";
import AuthenticationFooter from "../../components/AuthenticationFooter/AuthenticationFooter";
import { register } from "../../actions/userActions";
import {
  initialRegistrationValues,
  registrationValidation,
} from "./Validation";

// css files
import "./SignUpPage.css";

// others
import logo from "../../images/logo.png";

function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  // get user type from url
  let { userType } = params;

  if (userType === "creator") {
    userType = 3;
  } else if (userType === "follower") {
    userType = 4;
  }

  const userInfo = useSelector((state) => state.userInfo);
  const { user } = userInfo;

  useEffect(() => {
    if (user) {
      if (userType === 3) {
        navigate("/walletconnect");
      } else if (userType === 4) {
        navigate("/followerprofile");
      }
    }
  }, [user]);

  const registerUser = (data) => {
    dispatch(register(userType, data.name, data.email, data.password));
  };

  return (
    <>
      <span className="SignUpPage">
        <div className="d-flex justify-content-center">
          <div className="col-4">
            <div className="card card-update">
              <div className="card-body">
                <div className="d-grid gap-2 col-12 mx-auto text-center arttic-logo">
                  <Link to="/">
                    <img src={logo} width="200" height="45" />
                  </Link>
                </div>
                <div className="d-grid gap-2 col-12 mx-auto text-center">
                  <button className="btn btn-outline-primary" type="button">
                    <i className="bi bi-google icon"></i>Sign Up with Google
                  </button>
                  <button className="btn btn-outline-dark" type="button">
                    <i className="bi bi-apple icon"></i>Sign Up with Apple
                  </button>
                  <p className="Or">Or</p>
                </div>

                <Formik
                  initialValues={initialRegistrationValues}
                  validationSchema={registrationValidation}
                  onSubmit={registerUser}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <AuthenticationField
                        label="Name"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Name"
                      />

                      <AuthenticationField
                        label="Email"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                      />

                      <AuthenticationField
                        label="Password"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                      />

                      <AuthenticationField
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Enter Password Again"
                      />

                      <div className="col-12 terms-conditions">
                        <Field
                          type="checkbox"
                          className="form-check-input"
                          id="terms"
                          name="terms"
                        />
                        <label
                          className="form-check-label chcklbl "
                          htmlFor="terms"
                        >
                          Agree to all terms and conditions
                        </label>
                        <ErrorMessage
                          name="terms"
                          component="div"
                          className="error-msg"
                        />
                      </div>

                      <div className="text-center">
                        <div className="col-12">
                          <br />
                          <button
                            type="submit"
                            className="btn btn-primary col-12 btnlog"
                            disabled={isSubmitting}
                          >
                            Sign Up
                          </button>
                        </div>

                        <div className="col-12">
                          <p className="signup">
                            Already have an account ?{" "}
                            <Link class="theme" to="/login">Log In</Link>
                          </p>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <AuthenticationFooter/>
          </div>
        </div>
      </span>
    </>
  );
}

export default SignUpPage;
