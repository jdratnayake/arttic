import Slide from "react-reveal/Slide";
import "./HomePage.css";

import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import InfoCardLeft from "../../components/InfoCard/InfoCardLeft";
import InfoCardRight from "../../components/InfoCard/InfoCardRight";
import Footer from "../../components/Footer/Footer";

import Card from "../../components/Cards/Card";

import user_1 from "../../images/users/pic1.png";
import user_2 from "../../images/users/pic2.png";
import user_3 from "../../images/users/pic3.png";
import user_4 from "../../images/users/pic4.png";
import user_5 from "../../images/users/pic5.png";
import user_6 from "../../images/users/pic6.png";
import user_7 from "../../images/users/pic7.png";
import user_8 from "../../images/users/pic8.png";

import home_asset_1 from "../../images/home-assets.png";

function HomePage() {
  return (
    <>
      <NavBar />
      <Banner />

      <Slide right>
        <div className="container-fluid">
          <div class="container">
            <div className="row">
              <div class="col align-self-center about-section">
                <h1>What is ARTTIC?</h1>
                <h5>
                  On ARTTIC, you can let your fans become active participants in
                  the work they love by offering them a monthly membership. You
                  give them access to exclusive content, community, and insight
                  into your creative process. This builds a spanning network all
                  over the world between NFT creators and followers.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide bottom>
        <InfoCardLeft
          body="NFT creators can share their posts,videos and polls according to the relevant tiers. "
          title="How NFT stories sharing?"
        />
      </Slide>

      <Slide bottom>
        <InfoCardRight
          body="We are focusing on people who have enthusiasm in NFT creating,selling and buying processes.This is a central based platform that develops and promotes for the NFT creators to fulfill their marketing purposes."
          title="Why are we unique?"
        />
      </Slide>

      <div className="container-fluid trending-container">
        <div className="row trending-row">
          <div class="col align-self-center trending-section">
            <h1>Trending Creators</h1>
            <div class="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-8 card-container">
              <Slide bottom>
                <Card img={user_1} name="Alex Newton" />
              </Slide>
              <Slide bottom>
                <Card img={user_2} name="Alex Newton" />
              </Slide>
              <Slide bottom>
                <Card img={user_3} name="Alex Newton" />
              </Slide>
              <Slide bottom>
                <Card img={user_4} name="Alex Newton" />
              </Slide>
              <Slide bottom>
                <Card img={user_5} name="Alex Newton" />
              </Slide>
              <Slide bottom>
                <Card img={user_6} name="Alex Newton" />
              </Slide>
              <Slide bottom>
                <Card img={user_7} name="Alex Newton" />
              </Slide>
              <Slide bottom>
                <Card img={user_8} name="Alex Newton" />
              </Slide>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        {/* <div class="container"> */}
        <div className="row  align-items-center">
          <div class="col how-section m-3 align-self-center">
            <h1>It's easier than you think</h1>
            <img
              src={home_asset_1}
              className="img-fluid rounded home-card-image card-image"
              alt="..."
            />
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div class="col align-self-center get-start">
            <h1>Are you ready to surf on ARTTIC</h1>
            <a className="btn btn-main-primary">Get Started</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
