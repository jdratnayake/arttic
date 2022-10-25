import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
import axios from "axios";

import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import InfoCardLeft from "../../components/InfoCard/InfoCardLeft";
import InfoCardRight from "../../components/InfoCard/InfoCardRight";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Cards/Card";
import { API_URL, PROFILE_PIC_URL } from "../../constants/globalConstants";

import "./HomePage.css";

import home_asset_1 from "../../images/home-assets.png";

function HomePage() {
  const [creatorDetails, setCreatorDetails] = useState([]);

  const getCreatorData = async () => {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imphbml0aGFkZXZpbkBnbWFpbC5jb20iLCJ1c2VySWQiOjEsImlhdCI6MTY2MDIwOTU5M30.ZCIsrhW3RLbMWzkpj59Csf-p-K7Q8SuLZKWFRyAK9IE";

    const head = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/user/gettopcreatorsdetails/", head)
      .then((res) => {
        setCreatorDetails(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    getCreatorData();
  }, []);

  return (
    <>
      <div class="homepage">
        <NavBar />
        <Banner />

        <Slide right>
          <div className="container-fluid">
            <div class="container">
              <div className="row">
                <div class="col align-self-center about-section">
                  <h1>Welcome to ARTTIC</h1>
                  <p>
                    On ARTTIC, you can let your fans become active participants
                    in the work they love by offering them a monthly membership.
                    You give them access to exclusive content, community, and
                    insight into your creative process. This builds a spanning
                    network all over the world between NFT creators and
                    followers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide bottom>
          <InfoCardLeft
            body="We share exclusive contents,posts and videos about newly released NFTs and latest updates about them."
            title="What are we shared ?"
          />
        </Slide>

        <Slide bottom>
          <InfoCardRight
            body="This central based platform is focusing on people who have enthusiasm  in NFTs in all over the world."
            title="Who can use this ?"
          />
        </Slide>

        <div className="container-fluid trending-container">
          <div className="row trending-row">
            <div class="col align-self-center trending-section">
              <h1>Trending Creators</h1>
              <div class="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-8 card-container">
                {creatorDetails.map(
                  (item, i) =>
                    i < 8 && (
                      <Slide bottom key={item.userId}>
                        <Card
                          img={PROFILE_PIC_URL + item.profilePhoto}
                          name={item.name}
                        />
                      </Slide>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container-fluid">
        {/* <div class="container"> 
        <div className="row  align-items-center">
          <div class="col how-section m-3 align-self-center">
            <h1>We are advertising for you</h1>
            <div>
              
            </div>
            <img
              src={home_asset_1}
              className="img-fluid rounded home-card-image card-image"
              alt="..."
            />
            {/* </div> 
          </div>
        </div>
      </div> */}
        <div className="container-fluid">
          <div className="row align-items-center">
            <div class="col align-self-center get-start">
              <h1>Are you ready to surf on ARTTIC</h1>
              <Link className="btn btn-main-primary" to="/signupoption">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
