// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react";

// Core modules imports are same as usual
import { Autoplay, Navigation, Pagination, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Banner.css";

import bannerImage1 from "../../images/banner/1.svg";
import bannerImage2 from "../../images/banner/2.svg";

function Banner() {
  return (
    <div className="container-fluid banner">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ dynamicBullets: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      >
        <SwiperSlide>
          <div className="container">
            <div className="row align-items-center bannerRow">
              <div className="col-5 align-self-center temp">
                <h2>Change the Way</h2>
                <h2> NFT is Marketed</h2>
                <h4>
                  Let your most passionate fans support your creative work via
                  monthly membership.
                </h4>
                <div className="bannerButtons">
                  <a className="btn btn-main-primary">Get Started</a>
                </div>
              </div>
              <div className="col-7 bannerImage ">
                <img
                  src={bannerImage1}
                  className="img-fluid mx-auto "
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="row align-items-center bannerRow">
              <div className="col-5 align-self-center temp">
                <h4>
                  Let's change NFT market with more collabaration between
                  creators and followers
                </h4>
                <div className="bannerButtons">
                  <a className="btn btn-main-primary">Explore NFT creators</a>
                </div>
              </div>
              <div className="col-7 bannerImage ">
                <img
                  src={bannerImage2}
                  className="img-fluid mx-auto "
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
