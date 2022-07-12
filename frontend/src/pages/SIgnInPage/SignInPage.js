import "./SignInPage.css";
import NavBar from "../../components/NavBar/NavBar";

function SignInPage() {
    return (
        <>
            <NavBar />

            <div class="d-flex justify-content-center">
                <div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="title text-center theme">Log In</h4>

                            <div class="d-grid gap-2 col-12 mx-auto text-center">
                                <button class="btn btn-outline-danger" type="button">
                                    <i class="bi bi-google icon"></i>Continue with Google
                                </button>
                                <button class="btn btn-outline-primary" type="button">
                                    <i class="bi bi-facebook icon"></i>Continue with Facebook
                                </button>
                                <br />
                                <p>Or</p>
                            </div>
                            
                            <div class="col-12">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="" />
                            </div>
                            <div class="col-12">
                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" />
                            </div>
                            <div class="col-12">
                                <p class="text-end">
                                    <a className="theme"> Forgot Password</a>
                                </p>
                            </div>

                            <div class="text-center">
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary col-12 btnlog">Log In</button>
                                </div>
                                <div class="col-12">
                                    <p class="signup">Don’t have an account? <a class="theme">Sign Up</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default SignInPage;