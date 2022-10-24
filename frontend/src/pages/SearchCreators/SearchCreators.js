import "./SearchCreators.css";
import CreatorCard from "../../components/CreatorCard/CreatorCard";
import { useState, useEffect } from "react";
import {
  API_URL,
  PROFILE_PIC_URL,
  COVER_PIC_URL,
} from "../../constants/globalConstants";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

function SearchCreators() {
  const local = useLocation();
  const name = local.state.name;
  //window.location.reload(false);
  const [creatorDetails, setCreatorDetails] = useState([]);

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  //getCreatorDetails();
  // get creator details -------------------------------------------------
  const getCreatorDetails = async () => {
    const head = {
      headers: {
        authorization: accessToken,
        name: name,
      },
    };

    console.log(name);
    await axios
      .get(API_URL + "/user/getallcreatorsdetails", head)
      .then((res) => {
        setCreatorDetails(res.data);
        console.log(res.data);
      });
  };
  // end creator details --------------------------------------------------

  useEffect(() => {
    getCreatorDetails();
  }, [name]);

  return (
    <span className="subscribedCreatorsPage">

      <div class="homepage">
        <NavBar />

        <div className="row row-cols-1 row-cols-md-1 row-cols-md-1">
          {creatorDetails.length == 0 ? (
            <h3 className="mb-0">No result for '{name}'</h3>
          ) : (
            <h3 className="mb-0">Search result for '{name}'</h3>
          )}
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-md-3">
          {creatorDetails.map((data) => (
            <CreatorCard
              userId={data.userId}
              coverPhoto={COVER_PIC_URL + data.coverPhoto}
              profilePhoto={PROFILE_PIC_URL + data.profilePhoto}
              name={data.name}
              date={data.joinedDate}
            />
          ))}
        </div>
        <Footer />
      </div>
    </span>
  );
}

export default SearchCreators;
