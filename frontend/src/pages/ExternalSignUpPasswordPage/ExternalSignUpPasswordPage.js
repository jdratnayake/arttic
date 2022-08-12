import "./ExternalSignUpPasswordPage.css"
import logo from '../../images/logo.png'


function ExternalSignUpPasswordPage() {
    return (
        <>
            <span class="ExternalSignUpPasswordPage">    
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
                                <h4 class="title text-center theme">Continue on Join Arttic</h4>

                                <div class="join-with-google-apple_third-party-card">
                                    <div class="join-with-google-apple_content">
                                       <img class="join-with-google-apple_photo" alt src="https://lh3.googleusercontent.com/a/AItbvmmYAnBTUG_vqEEJUX0VJP9rAGXu73HSBux-Bk9P=s96-c"/>
                                       <div class="join-with-google-apple_info">
                                          <p class="join-with-google-apple_info-name">user name</p>
                                          <p class="join-with-google-apple_info-email">Email@gmail.com</p>
                                       </div>
                                       <a class="theme">Not you ?</a>
                                    </div>
                                </div>
                      
                                <div class="col-12">
                                    <label for="exampleFormControlInput1" class="form-label">Enter password</label>
                                    <input type="text" class="form-control fcup" id="name" placeholder="Enter password" required />
                                    <p class="error-msg">Password must contain 8 or more than 8 characters</p>

                                    <label for="exampleFormControlInput1" class="form-label">Enter password</label>
                                    <input type="text" class="form-control fcup" id="name" placeholder="Enter password" required />
                                    <p class="error-msg">Password must contain 8 or more than 8 characters</p>
                            
                               </div>

                                <div class="col-12">
                                    <br />
                                    <button type="submit" class="btn btn-primary col-12 btnlog">Sign Up</button>
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

export default ExternalSignUpPasswordPage;