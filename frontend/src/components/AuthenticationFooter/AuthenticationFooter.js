import "./AuthenticationFooter.css";

function AuthenticationFooter(){
    return(
        <div class="authenticationfooter d-flex justify-content-center">
            <div class="col-md-6">
                <div class="company-details">
                            "©" 
                            <a class="border-bottom" href="#">Arttic</a>
                            , All Right Reserved
                </div>
            </div>
           <div class="col-md-6">
                <div class="help-privacy-terms">
                    <div class="col">
                        <a class="link" href="#">About us</a>
                    </div>
                    <div class="col">
                        <a class="link" href="#">Help</a>
                    </div>
                    <div class="col">
                        <a class="link" href="#">Privacy</a>
                    </div>
                    <div class="col">
                        <a class="link" href="#">Terms</a>
                    </div>
                    <div class="col">
                        <a class="link" href="#">License</a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AuthenticationFooter;