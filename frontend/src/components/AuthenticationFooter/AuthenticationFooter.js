import "./AuthenticationFooter.css";

function AuthenticationFooter(){
    return(
        <div class="d-flex justify-content-center">
           <div class="col-4">
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
    )
}

export default AuthenticationFooter;