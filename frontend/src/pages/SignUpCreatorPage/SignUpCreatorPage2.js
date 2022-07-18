import NavBar from "../../components/NavBar/NavBar";
import "./SignUpCreatorPage.css"

function SignUpCreatorPage2() {
    return (
        <>
            {/* <NavBar /> */}
            <span class="SignUpCreatorPage2">    
                <div class="d-flex justify-content-center">
                    <div class="col-4">
                        <div class="card card-update">
                            <div class="card-body">
                                <h4 class="title text-center theme">Connect Wallet</h4>

                                <div class="col-12">
                                    <label for="exampleFormControlInput1" class="form-label">OpenSea Username</label>
                                    <input type="text" class="form-control fcup" id="name" placeholder="" required />
                                </div>

                                <div class="col-12">
                                    <br />
                                    <button type="submit" class="btn wallet col-12 btnlog">Connect Cryptowallet </button>
                                </div>


                                <div class="col-12">
                                    <br />
                                    <button type="submit" class="btn btn-primary col-12 btnlog">Sign Up</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </span> 
        </>
    );
}

export default SignUpCreatorPage2;