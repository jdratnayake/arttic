// import NavBar from "../../components/NavBar/NavBar";
import "./SignUpCreatorPage.css"
import logo from '../../images/logo.png'

function SignUpCreatorPage() {
    return (
        <>
            {/* <NavBar /> */}
            <span class="SignUpCreatorPage">
                <div class="d-flex justify-content-center">
                    <div class="col-4">
                        <div class="card card-update">
                            <div class="card-body">
                                <div class="d-grid gap-2 col-12 mx-auto text-center arttic-logo">
                                    <a href="#">
                                        <img
                                            src={logo}
                                            width="200"
                                            height="45"
                                        />
                                    </a>
                                </div>
                                <div class="d-grid gap-2 col-12 mx-auto text-center">
                                    <button class="btn btn-outline-danger" type="button">
                                        <i class="bi bi-google icon"></i>Sign Up with Google
                                    </button>
                                    <button class="btn btn-outline-dark" type="button">
                                        <i class="bi bi-apple icon"></i>Sign Up with Apple
                                    </button>
                                    <p>Or</p>
                                </div>

                                <div class="col-12">
                                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input type="text" class="form-control fcup" id="name" placeholder="Enter Name" required/>
                                    <p class="error-msg">This name is already used.Please enter another name</p>
                                </div>
                                <div class="col-12">
                                    <label for="exampleFormControlInput2" class="form-label">Email</label>
                                    <input type="email" class="form-control fcup" id="email" placeholder="Enter Email" required/>
                                    <p class="error-msg">Email is invalid.Please enter vaild email address</p>
                                </div>
                                <div class="col-12">
                                    <label for="exampleFormControlInput3" class="form-label">Password</label>
                                    <input type="password" class="form-control fcup" id="password" required placeholder="Enter Password"/>
                                    <p class="error-msg">Password must contain at least 8 characters</p>
                                </div>
                                <div class="col-12">
                                    <label for="exampleFormControlInput4" class="form-label">Confirm Password</label>
                                    <input type="password" class="form-control fcup" id="cnfpassword" required placeholder="Enter Password Again"/>
                                    <p class="error-msg">Password is not match</p>
                                </div>
                                <div class="col-12">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" required/>
                                    <label class="form-check-label chcklbl" for="flexCheckDefault">
                                        Agree to all terms and conditions
                                    </label>
                                </div>

                                <div class="text-center">
                                    <div class="col-12">
                                        <br />
                                        <button type="submit" class="btn btn-primary col-12 btnlog">Connect Wallet</button>
                                    </div>

                                    <div class="col-12">
                                        <p class="signup">Already have an account ? <a class="theme">Log In</a></p>
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

export default SignUpCreatorPage;