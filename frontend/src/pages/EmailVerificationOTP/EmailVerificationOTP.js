import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { API_URL } from "../../constants/globalConstants";
import { updateUserState } from "../../actions/userActions";

import "./EmailVerificationOTP.css";
import logo from "../../images/logo.png";
import AuthenticationFooter from "../../components/AuthenticationFooter/AuthenticationFooter";

function EmailVerificationOTP() {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken, email, emailValidity } = userInfo.user;

  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [optError, setOtpError] = useState("");
  // const [emailStatus, setEmailStatus] = useState(emailValidity);

  const generateOtp = async () => {
    const inputData = { userId };
    await axios
      .post(API_URL + "/auth/emailverificationotp", inputData)
      .catch((error) => console.log(error));
  };

  const submitOtp = async () => {
    if (code && code.length === 5) {
      setOtpError("");
      // console.log(code);
      // console.log(typeof code);

      const inputData = { userId, otp: code };

      await axios
        .post(API_URL + "/auth/emailverificationotpcheck", inputData)
        .then((response) => {
          if (response.data.statusCode === 1) {
            setOtpError("");
            // console.log("today");
            dispatch(updateUserState(userId, 1));

            // console.log("today2");
            // navigate("/login");
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
    generateOtp();
  }, []);

  useEffect(() => {
    if (emailValidity) {
      navigate("/login");
    }
  }, [emailValidity]);

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

              <h4 className="title text-center theme">Email Verification</h4>
              <p className="sub-title">
                Enter the OTP you received to
                <span className="phone-number">{email}</span>
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthenticationFooter />
    </span>
  );
}

export default EmailVerificationOTP;
