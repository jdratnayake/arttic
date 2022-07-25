import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./SignUpFollowerPage.css";

import logo from "../../images/logo.png";

function SignUpFollowerPage() {
  // form validation start
  const initialRegistrationValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  const registrationValidation = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string()
      .email("Email is not Valid")
      .required("Email is Required"),
    password: Yup.string()
      .required("Password is Required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string()
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      })
      .required("Confirm Password is Required"),
    terms: Yup.boolean().oneOf(
      [true],
      "You must Accept the Terms and Conditions"
    ),
  });
  // form validation end

  const register = (data) => {
    console.log("Hi");
    console.log(data);
  };

  return (
    <>
      <span className="SignUpFollowerPage">
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
                    <i className="bi bi-facebook icon"></i>Sign Up with Apple
                  </button>
                  <p className="Or">Or</p>
                </div>

                <Formik
                  initialValues={initialRegistrationValues}
                  validationSchema={registrationValidation}
                  onSubmit={register}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="col-12">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <Field
                          type="text"
                          className="form-control form-control-update"
                          id="name"
                          name="name"
                          placeholder="Enter Name"
                        />

                        <ErrorMessage
                          name="name"
                          component="div"
                          className="error-msg"
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <Field
                          type="email"
                          className="form-control form-control-update"
                          id="email"
                          name="email"
                          placeholder="Enter Email"
                        />

                        <ErrorMessage
                          name="email"
                          component="div"
                          className="error-msg"
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <Field
                          type="password"
                          className="form-control form-control-update"
                          id="password"
                          name="password"
                          placeholder="Enter Password"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="error-msg"
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="confirmPassword" className="form-label">
                          Confirm Password
                        </label>
                        <Field
                          type="password"
                          className="form-control form-control-update"
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="Enter Password Again"
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          component="div"
                          className="error-msg"
                        />
                      </div>

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
                            <Link to="/login">Log In</Link>
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
      </span>
    </>
  );
}

export default SignUpFollowerPage;
