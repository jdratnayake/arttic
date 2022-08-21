import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

import AuthenticationField from "../../components/AuthenticationField/AuthenticationField";
import {
  initialPasswordResetValues,
  passwordResetValidation,
} from "./Validation";
import { API_URL } from "../../constants/globalConstants";

import "../FrogotPasswordUsernamePage/FrogetPasswordPage.css";
import logo from "../../images/logo.png";
import AuthenticationFooter from "../../components/AuthenticationFooter/AuthenticationFooter";


function FrogotPasswordResetPasswordPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const passwordReset = async (data) => {
    const inputData = {
      username: location.state.username,
      password: data.password,
    };

    await axios
      .post(API_URL + "/auth/resetpassword", inputData)
      .then((response) => {
        if (response.data.statusCode === 1) {
          navigate("/login");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <span class="FrogetPasswordPage FrogetPasswordPage2">
        <div class="d-flex justify-content-center">
          <div class="col-4">
            <div class="card card-update">
              <div class="card-body">
                <div class="d-grid gap-2 col-12 mx-auto text-center arttic-logo">
                  <a href="#">
                    <img src={logo} width="200" height="45" />
                  </a>
                </div>
                <h4 class="title text-center theme">Reset Password</h4>

                <Formik
                  initialValues={initialPasswordResetValues}
                  validationSchema={passwordResetValidation}
                  onSubmit={passwordReset}
                >
                  {({ isSubmitting }) => (
                    <Form>
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
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <AuthenticationFooter/>
      </span>
    </>
  );
}

export default FrogotPasswordResetPasswordPage;
