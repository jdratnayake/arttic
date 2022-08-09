import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

import {
  initialFrogotPasswordUsernameValues,
  frogotPasswordUsernameValidation,
} from "./Validation";
import { API_URL } from "../../constants/globalConstants";

import "./FrogetPasswordPage.css";
import logo from "../../images/logo.png";

function FrogotPasswordUsernamePage() {
  const [usernameError, setUsernameError] = useState("");

  const submitUsername = async (data) => {
    // console.log(data.username);
    const inputData = { username: data.username };

    await axios
      .post(API_URL + "/auth/usernameCheck", inputData)
      .then((response) => {
        if (response.data.isExist) {
          setUsernameError("");
        } else {
          setUsernameError("Email or Username Doesn't Exist");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <span className="FrogetPasswordPage FrogetPasswordPage1">
        <div className="d-flex justify-content-center">
          <div className="col-4">
            <div className="card card-update">
              <div className="card-body">
                <div className="d-grid gap-2 col-12 mx-auto text-center arttic-logo">
                  <Link to="/">
                    <img src={logo} width="200" height="45" />
                  </Link>
                </div>
                <h4 className="title text-center theme">Reset Password</h4>

                <Formik
                  initialValues={initialFrogotPasswordUsernameValues}
                  validationSchema={frogotPasswordUsernameValidation}
                  onSubmit={submitUsername}
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

                      <div className="col-12">
                        <br />
                        <button
                          type="submit"
                          className="btn btn-next wallet col-12 btnlog"
                          disabled={isSubmitting}
                        >
                          Next
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="help-privacy-terms">
              <div className="row">
                <div className="col">
                  <a className="link" href="#">
                    Help
                  </a>
                </div>
                <div className="col">
                  <a className="link" href="#">
                    Privacy
                  </a>
                </div>
                <div className="col">
                  <a className="link" href="#">
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    </>
  );
}

export default FrogotPasswordUsernamePage;
