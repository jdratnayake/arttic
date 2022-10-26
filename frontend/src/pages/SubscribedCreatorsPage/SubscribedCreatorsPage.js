import CreatorCard from "../../components/CreatorCard/CreatorCard";
import { useState, useEffect } from "react";
import {
  API_URL,
  PROFILE_PIC_URL,
  COVER_PIC_URL,
} from "../../constants/globalConstants";
import axios from "axios";
import { useSelector } from "react-redux";

import "./SubscribedCreatorsPage.css";

function SubscribedCreatorsPage() {

  const [creatorDetails, setCreatorDetails] = useState([]);

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;


  //  get creators data -----------------------------------------------------
  const getCreatorData = async () => {
    const head = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/user/gettopcreatorsdetails/", head)
      .then((res) => {
        setCreatorDetails(res.data);
      })
  }
  // end get creators data -------------------------------------------------


  useEffect(() => {
    getCreatorData();
  }, []);

  return (
    <span className="subscribedCreatorsPage">
      <div className="row row-cols-1 row-cols-md-2 row-cols-md-3">
        <h3 className="mb-0">Trending Creators</h3>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-md-3">

        {creatorDetails.map((data) => (
          <CreatorCard
            userId={data.userId}
            profilePhoto={PROFILE_PIC_URL + data.profilePhoto}
            name={data.name}
            subCount={data.subCount}
            date={data.joinedDate} />
        ))}

      </div>
    </span>
  );
}

export default SubscribedCreatorsPage;
