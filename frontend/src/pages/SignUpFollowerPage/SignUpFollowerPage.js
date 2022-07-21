// import NavBar from "../../components/NavBar/NavBar";
import "./SignUpFollowerPage.css"
import logo from '../../images/logo.png'

function SignUpFollowerPage() {
    return (
        <>
            {/* <NavBar /> */}
            <span class="SignUpFollowerPage">
                <div class="d-flex justify-content-center">
                    <div class="col-sm-4">
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
                                        <i class="bi bi-facebook icon"></i>Sign Up with Apple
                                    </button>
                                    <p class="Or">Or</p>
                                </div>

                                <div class="col-12">
                                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input type="text" class="form-control form-control-update" id="name" placeholder="Enter Name" required/>
                                </div>
                                <div class="col-12">
                                    <label for="exampleFormControlInput2" class="form-label">Email</label>
                                    <input type="email" class="form-control form-control-update" id="email" placeholder="Enter Email" required/>
                                </div>
                                <div class="col-12">
                                    <label for="exampleFormControlInput3" class="form-label">Password</label>
                                    <input type="password" class="form-control form-control-update" id="password" required placeholder="Enter Password"/>
                                </div>
                                <div class="col-12">
                                    <label for="exampleFormControlInput4" class="form-label">Confirm Password</label>
                                    <input type="password" class="form-control form-control-update" id="cnfpassword" required placeholder="Enter Password Again"/>
                                </div>
                                <div class="col-12">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" required/>
                                    <label class="form-check-label chcklbl " for="flexCheckDefault">
                                        Agree to all terms and conditions
                                    </label>
                                </div>

                                <div class="text-center">
                                    <div class="col-12">
                                        <br />
                                        <button type="submit" class="btn btn-primary col-12 btnlog">Sign Up</button>
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

export default SignUpFollowerPage;