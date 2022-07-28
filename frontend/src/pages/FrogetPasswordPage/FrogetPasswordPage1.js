import "./FrogetPasswordPage.css"
import logo from '../../images/logo.png'


function FrogetPasswordPage1() {
    return (
        <>
            <span class="FrogetPasswordPage FrogetPasswordPage1">    
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
                                <h4 class="title text-center theme">Reset Password</h4>

                                <div class="col-12">
                                    <label for="exampleFormControlInput1" class="form-label">Enter your phone number or email</label>
                                    <input type="text" class="form-control fcup" id="name" placeholder="Enter your phone number or email" required />
                                    <p class="error-msg">Invalid Email</p>
                                    <p class="error-msg">Invalid Phone Number</p>
                               </div>

                                <div class="col-12">
                                    <br />
                                    <button type="submit" class="btn btn-next wallet col-12 btnlog">Next</button>
                                </div>
                            </div>
                        </div>
                        <div class="help-privacy-terms">
                            <div class="row">
                                <div class="col">
                                    <a class="link" href="#">Help</a>
                                </div>
                                <div class="col">
                                    <a class="link" href="#">Privacy</a>
                                </div>
                                <div class="col">
                                    <a class="link" href="#">Terms</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </span> 
        </>
    );
}

export default FrogetPasswordPage1;