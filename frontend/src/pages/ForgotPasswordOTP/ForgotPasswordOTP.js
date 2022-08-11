import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import axios from "axios";

import { API_URL } from "../../constants/globalConstants";

import "./ForgotPasswordOTP.css";
import logo from "../../images/logo.png";

function ForgotPasswordOTP() {
  const location = useLocation();
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [optError, setOtpError] = useState("");
  const [username, setUsername] = useState(location.state.username);

  const generateOtp = async () => {
    const inputData = { username: location.state.username };
    await axios
      .post(API_URL + "/auth/forgotpasswordotp", inputData)
      .catch((error) => console.log(error));
  };

  const submitOtp = async () => {
    if (code && code.length === 5) {
      setOtpError("");
      // console.log(code);
      // console.log(typeof code);

      const inputData = { username: location.state.username, otp: code };

      await axios
        .post(API_URL + "/auth/forgotpasswordotpcheck", inputData)
        .then((response) => {
          if (response.data.statusCode === 1) {
            setOtpError("");
            navigate("/frogotpassword/passwordreset", {
              state: { username: location.state.username },
            });
          } else {
            setOtpError("Invalid OTP entered");
          }
        })
        .catch((error) => console.log(error));
    } else if (code.length > 0) {
      setOtpError("OTP is not complete");
    } else {
      setOtpError("OTP is required");
    }
  };

  const handleChange = (code) => setCode(code);

  useEffect(() => {
    if (!location.state) {
      navigate("/frogotpassword/username");
    } else {
      generateOtp();
    }
  }, []);

  return (
    <span className="forgotPasswordOTP">
      <div className="d-flex justify-content-center">
        <div className="col-4">
          <div className="card card-update">
            <div className="card-body">
              <div className="d-grid gap-2 col-12 mx-auto text-center arttic-logo">
                <Link to="/">
                  <img src={logo} width="200" height="45" />
                </Link>
              </div>

              <h3 className="title">OTP Verification</h3>
              <p className="sub-title">
                Enter the OTP you received to
                <span className="phone-number">{username}</span>
              </p>

              <div className="d-grid gap-2 col-12 mx-auto text-center arttic-logo">
                <OtpInput
                  value={code}
                  onChange={handleChange}
                  numInputs={5}
                  separator={<span style={{ width: "8px" }}></span>}
                  isInputNum={true}
                  shouldAutoFocus={true}
                  inputStyle={{
                    border: "1px solid #000",
                    borderRadius: "8px",
                    width: "54px",
                    height: "54px",
                    fontSize: "12px",
                    color: "#000",
                    fontWeight: "400",
                    caretColor: "blue",
                  }}
                  focusStyle={{
                    border: "1px solid #CFD3DB",
                    outline: "none",
                  }}
                />
                <p class="error-msg">{optError}</p>
              </div>

              <div className="d-grid gap-2 col-12 mx-auto text-center arttic-logo">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={submitOtp}
                >
                  Submit
                </button>
              </div>

              <div className="container">
                <button className="resend" onClick={generateOtp}>
                  Resend OTP
                  <i className="fa fa-caret-right"></i>
                </button>
              </div>
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
  );
}

export default ForgotPasswordOTP;
