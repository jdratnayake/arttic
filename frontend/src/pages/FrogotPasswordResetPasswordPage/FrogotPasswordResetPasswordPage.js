import "../FrogotPasswordUsernamePage/FrogetPasswordPage.css";
import logo from "../../images/logo.png";

function FrogotPasswordResetPasswordPage() {
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

                <div class="col-12">
                  <label for="exampleFormControlInput3" class="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    class="form-control fcup"
                    id="password"
                    required
                    placeholder="Enter New Password"
                  />
                  <p class="error-msg">
                    Password must contain at least 8 characters
                  </p>
                </div>
                <div class="col-12">
                  <label for="exampleFormControlInput4" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control fcup"
                    id="cnfpassword"
                    required
                    placeholder="Confirm New Password"
                  />
                  <p class="error-msg">Password is not match</p>
                </div>

                <div class="col-12">
                  <br />
                  <button type="submit" class="btn btn-primary  col-12 btnlog">
                    Reset Password
                  </button>
                </div>
              </div>
            </div>
            <div class="help-privacy-terms">
              <div class="row">
                <div class="col">
                  <a class="link" href="#">
                    Help
                  </a>
                </div>
                <div class="col">
                  <a class="link" href="#">
                    Privacy
                  </a>
                </div>
                <div class="col">
                  <a class="link" href="#">
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

export default FrogotPasswordResetPasswordPage;
