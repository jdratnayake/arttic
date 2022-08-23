import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";

import AuthenticationField from "../../components/AuthenticationField/AuthenticationField";
import AuthenticationFooter from "../../components/AuthenticationFooter/AuthenticationFooter";
import { initialLoginValues, loginValidation } from "./Validation";
import { login } from "../../actions/userActions";

import "./LogInPage.css";
import "../../components/AuthenticationField/AuthenticationField.css";

import logo from "../../images/logo.png";

function LogInPage() {
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userInfo);
  const { user } = userInfo;

  useEffect(() => {
    if (user) {
      if (user.error) {
        setUsernameError(user.error.username);
        setPasswordError(user.error.password);
      } else {
        setUsernameError("");
        setPasswordError("");

        if (user.type === 1) {
          navigate("/admin0/dashboard");
        } else if (user.type === 2) {
          //redirect to the follower page
        } else if (user.type === 3) {
          if (user.openSeaStatus === 1 || user.openSeaStatus === 2) {
            navigate("/creatorprofile");
          } else if (user.openSeaStatus === 0) {
            navigate("/walletconnect");
          }
        } else if (user.type === 4) {
          //redirect to the follower page
        }
      }
    }
  }, [user]);

  const loginUser = (data) => {
    dispatch(login(data.username, data.password));
  };

  return (
    <>
      <span class="LogInPage">
        <div class="d-flex justify-content-center">
          <div class="col-4">
            <div class="card card-update">
              <div class="card-body">
                <div class="d-grid gap-2 col-12 mx-auto text-center arttic-logo">
                  <Link to="/">
                    <img src={logo} width="200" height="45" />
                  </Link>
                </div>

                <div class="d-grid gap-2 col-12 mx-auto text-center">
                  <button class="btn btn-outline-primary" type="button">
                    <i class="bi bi-google icon"></i>Sign In with Google
                  </button>
                  <button class="btn btn-outline-dark" type="button">
                    <i class="bi bi-apple icon"></i>Sign In with Apple
                  </button>
                  <p class="Or">Or</p>
                </div>

                <Formik
                  initialValues={initialLoginValues}
                  validationSchema={loginValidation}
                  onSubmit={loginUser}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <span className="authenticationField">
                        <div className="col-12">
                          <label htmlFor="username" className="form-label">
                            Email or Username
                          </label>
                          <Field
                            type="text"
                            className="form-control form-control-update fcup"
                            id="username"
                            name="username"
                            placeholder="Enter Email or Username"
                          />

                          <ErrorMessage
                            name="username"
                            component="div"
                            className="error-msg"
                          />
                          <p class="error-msg">{usernameError}</p>
                        </div>
                      </span>

                      <span className="authenticationField">
                        <div className="col-12">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <Field
                            type="password"
                            className="form-control form-control-update fcup"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                          />

                          <ErrorMessage
                            name="password"
                            component="div"
                            className="error-msg"
                          />
                          <p class="error-msg">{passwordError}</p>
                        </div>
                      </span>

                      <div class="col-12 Froget-password">
                        <p class="text-end">
                          <Link to="/frogotpassword/username" className="theme">
                            <small>Forgot Password</small>
                          </Link>
                        </p>
                      </div>

                      <div class="text-center">
                        <div class="col-12">
                          <button
                            type="submit"
                            class="btn btn-primary col-12 btnlog"
                          >
                            Sign In
                          </button>
                        </div>
                        <div class="col-12">
                          <p class="signup">
                            Don’t have an account?{" "}
                            <Link class="theme" to="/signupoption">
                              Sign Up
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <AuthenticationFooter />
      </span>
    </>
  );
}

export default LogInPage;
