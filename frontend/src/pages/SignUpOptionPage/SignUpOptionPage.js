import "./SignUpOptionPage.css";
import NavBar from "../../components/NavBar/NavBar";
import SignUpOptionCard from "../../components/SignUpOptionCard/SignUpOptionCard";

function SignUpOptionPage() {
    return (
        <>
            {/* <NavBar /> */}
            <span class="SignUpOptionPage">
                <div class="row d-flex justify-content-center ptop">
                    <div class="col-3">
                        <SignUpOptionCard
                            title="Sign Up As Follower" btn="Sign Up As Follower" av="follower"
                            p1="benifits of being follower"
                            p2="sample text here" 
                            p3="sample text here"
                            p4="sample text here" />
                    </div>
                    <div class="col-3">
                        <SignUpOptionCard
                            title="Sign Up As Creator" btn="Sign Up As Creator" av="creator"
                            p1="benifits of being creator"
                            p2="sample text here"
                            p3="sample text here"
                            p4="sample text here" />
                    </div>
                </div>
            </span>
        </>
    );
}

export default SignUpOptionPage;