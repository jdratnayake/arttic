import { useState } from "react";
import OtpInput from "react-otp-input";

import "./ForgotPasswordOTP.css";
import logo from "../../images/logo.png";

function ForgotPasswordOTP() {
  const [code, setCode] = useState("");

  const submitOtp = () => {
    console.log(code);
    console.log(typeof code);
  };

  const handleChange = (code) => setCode(code);

  return (
    <span className="forgotPasswordOTP">
      <div className="d-flex justify-content-center">
        <div className="col-4">
          <div className="card card-update">
            <div className="card-body">
              <div className="d-grid gap-2 col-12 mx-auto text-center arttic-logo">
                <a href="#">
                  <img src={logo} width="200" height="45" />
                </a>
              </div>

              <h3 className="title">OTP Verification</h3>
              <p className="sub-title">
                Enter the OTP you received to
                <span className="phone-number">janithadevin@gmail.com</span>
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
                <p class="error-msg">dd</p>
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
                <button className="resend">
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
