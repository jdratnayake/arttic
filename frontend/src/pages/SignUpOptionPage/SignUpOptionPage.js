import { Link } from "react-router-dom";

import "./SignUpOptionPage.css";
// import NavBar from "../../components/NavBar/NavBar";
import SignUpOptionCard from "../../components/SignUpOptionCard/SignUpOptionCard";
import logo from "../../images/logo.png";

function SignUpOptionPage() {
  return (
    <>
      <span class="SignUpOptionPage">
        <div class="row row-1">
            <div class="row d-flex justify-content-center ptop">
              <div class="col-3">
                <SignUpOptionCard
                  title="View more details with a one click"
                  btn="Sign Up on Arttic"
                  av="follower"
                  p1="You can have latest updates regarding the NFTs"
                  p2="Get access to view the posts, images and trail videos."
                  p3="Subscribe your favourite creators and communicate with them"
                  p4="Subscribe the premium package to possess more benefits"
                  p5="Upgrade the account as a creator"
                  link="/signupfollower"
                />
              </div>
              <div class="col-3">
                <SignUpOptionCard
                  title="Share your NFT stories with the global "
                  btn="Sign Up as Creator on Arttic"
                  av="creator"
                  p1="You have all the benefits that follower has "
                  p2="Get access to  share the posts, images and trail videos."
                  p3="Great oppurtunity to communicate with your fans"
                  p4="Publish advertisements and be a  revenue generator"
                  p5="Analysis your  own performance."
                  link="/signupcreator"
                />
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
      </span>
    </>
  );
}

export default SignUpOptionPage;
{/* <div class="d-grid gap-2 col-12 mx-auto text-center arttic-logo">
          <Link to="/">
            <img src={logo} width="200" height="45" />
          </Link>
        </div> */}
        