import "./SignInPage.css";
// import NavBar from "../../components/NavBar/NavBar";
import logo from '../../images/logo.png'

function SignInPage() {
    return (
        <>
            {/* <NavBar /> */}
        <span class="SignInPage">
            <div class="d-flex justify-content-center">
                <div class="col-4">
                    <div class="card card-update">
                        <div class="card-body">
                            <a className="navbar-brand" href="#">
                                <img
                                    src={logo}
                                    width="200"
                                    height="45"
                                />
                            </a>
                            <h4 class="title text-center theme">Sign In</h4>

                            <div class="d-grid gap-2 col-12 mx-auto text-center">
                                <button class="btn btn-outline-danger" type="button">
                                    <i class="bi bi-google icon"></i>Continue with Google
                                </button>
                                <button class="btn btn-outline-dark" type="button">
                                    <i class="bi bi-apple icon"></i>Continue with Facebook
                                </button>
                                {/* <br /> */}
                                <p>Or</p>
                            </div>
                            
                            <div class="col-12">
                                <label for="exampleFormControlInput1" class="form-label">Username or Email</label>
                                <input type="email" class="form-control form-control-update fcup" id="email" placeholder="" />
                                <p class="error-msg">Incorrect Username or Email</p>
                            </div>
                            <div class="col-12">
                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                <input type="password" class="form-control form-control-update fcup" id="password" />
                                <p class="error-msg">Incorrect password</p>
                            </div>
                            <div class="col-12">
                                <p class="text-end">
                                    <a className="theme"><small>Forgot Password</small></a>
                                </p>
                            </div>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="remember-me"/>
                                    <label class="form-check-label" for="remember-me">
                                    Remember Me
                                    </label>
                                </div>
                            </div>
                            <div class="text-center">
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary col-12 btnlog">Sign In</button>
                                </div>
                                <div class="col-12">
                                    <p class="signup">Don’t have an account? <a class="theme">Sign Up</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </span>
        </>
    );
}

export default SignInPage;