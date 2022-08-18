import { Link } from "react-router-dom";

import "./SignUpOptionPage.css";
import NavBarSignUp from "../../components/NavBarSignUp/NavBarSignUp";
import AuthenticationFooter from "../../components/AuthenticationFooter/AuthenticationFooter";
import SignUpOptionCard from "../../components/SignUpOptionCard/SignUpOptionCard";
import logo from "../../images/logo.png";

function SignUpOptionPage() {
  return (
    <>
      <NavBarSignUp/>
      <span class="SignUpOptionPage">
        <div class="row row-1">
          <div class="row d-flex justify-content-center ptop">
            <div class="col-4">
              <SignUpOptionCard
                title="View more details with a one click"
                btn="Sign Up as Follower"
                av="follower"
                def1="If you only want to seek out NFT information, the best way is to sign up as a follower on Arttic."
                def2="You can have the following benefits as a follower."
                p1="Stay informed about the latest updates related to NFT"
                p2="Get access to view the posts, images and videos"
                p3="Subscribe your favourite creators and communicate with them"
                p4="Subscribe the premium package to possess more benefits"
                p5="Upgrade the account as a creator"
                link="/signup/follower"
              />
            </div>
            <div class="col-4">
              <SignUpOptionCard
                title="Share your NFT stories with the global "
                btn="Sign Up as Creator"
                av="creator"
                def1="If you would like to share your NFT stories with the NFT community, sign up as a creator on Arttic." 
                def2="You can have the following benefits as a creator."
                p1="Share the posts, images and videos of your NFTs"
                p2="Get all the benefits that follower has with more features"
                p3="Great oppurtunity to communicate with your fans directly"
                p4="Advertise your NFT informations in NFT community and have try on packages"
                p5="Analysis of your own performance"
                link="/signup/creator"
              />
            </div>
          </div>
          <AuthenticationFooter/>
        </div>
      </span>
    </>
  );
}

export default SignUpOptionPage;

