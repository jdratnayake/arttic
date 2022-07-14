import NavBar from "../../components/NavBar/NavBar";
import "./SignUpCreatorPage.css"

function SignUpCreatorPage() {
    return (
        <>
            <NavBar />

            <div class="d-flex justify-content-center">
                <div class="col-4">
                    <div class="card card-update">
                        <div class="card-body">
                            <h4 class="title text-center theme">Sign Up</h4>

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
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control fcup" id="name" placeholder="" required/>
                            </div>
                            <div class="col-12">
                                <label for="exampleFormControlInput2" class="form-label">Email</label>
                                <input type="email" class="form-control fcup" id="email" placeholder="" required/>
                            </div>
                            <div class="col-12">
                                <label for="exampleFormControlInput3" class="form-label">Password</label>
                                <input type="password" class="form-control fcup" id="password" required/>
                            </div>
                            <div class="col-12">
                                <label for="exampleFormControlInput4" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control fcup" id="cnfpassword" required/>
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
        </>
    );
}

export default SignUpCreatorPage;