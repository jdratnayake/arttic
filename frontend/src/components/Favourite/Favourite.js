import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  API_URL,
  PROFILE_PIC_URL,
  POST_PIC_URL,
} from "../../constants/globalConstants";

import "../Feed/Feed.css";

import Post from "../../components/Post/Post";

function Favourite() {
  const [userDetails, setUserDetails] = useState({});
  const [profilePic, setProfilePicDisplay] = useState("");

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const [favorites, setFavourites] = useState([]);

  const getFavourites = async () => {
    const config = {
      headers: {
        authorization: accessToken,
        userid: userId,
      },
    };

    await axios
      .get(API_URL + "/feed/getFavourites/", config)
      .then((response) => {
        setFavourites(response.data);
      });
  };

  const getUserDetails = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/user/getuserdetails/" + userId, config)
      .then((response) => {
        setUserDetails(response.data);
        setProfilePicDisplay(PROFILE_PIC_URL + response.data.profilePhoto);
      });
  };

  const deleteSavePost = async (pid,creatorId) => {
    if (window.confirm("Do you want to delete the post !")) {
      if (userId === creatorId) {
        // console.log("delete clicked")
        const config = {
          headers: {
            authorization: accessToken,
            userid: userId,
            postid: pid,
          },
        };

        await axios
          .get(API_URL + "/feed/deleteSavePost/", config)
          .then((response) => {
            // console.log(response.data)
            // $(`#post${response.data.postId}`).hide();
            setFavourites(favorites.filter(item => item.postId !== response.data.postId))
          });
      } else {
        console.log("cannot delete");
      }
    }
  };

  useEffect(() => {
    getUserDetails();
    getFavourites();
  }, []);

  return (
    <div className="row p-0 m-0">
      <div class="col-sm-8 col-xs-12 p-0 feedBody">
        <div class="container-fluid p-0 feedPage">
          <div class="container p-0 feed-container">
            {/* Post section  start */}
            <div className="pb-3">
              {favorites &&
                favorites.map((item) => {
                  return (
                    <Post
                      key={item.postSaveId}
                      id={"post" + item.postId}
                      postid={item.postId}
                      userName={userDetails.name}
                      profilePic={profilePic}
                      profilerId={userId}
                      name={item.post.creator.followerCreator.user.name}
                      message={item.post.description}
                      timestamp={item.post.publishedDate}
                      image={POST_PIC_URL + item.post.imagevideo}
                      userImage={PROFILE_PIC_URL + item.post.creator.followerCreator.user.profilePhoto}
                      commentCount={item.post.commentCount}
                      likes={item.post.reactCount}
                      creatorId={item.post.creator.userId}
                      deletePost={deleteSavePost}
                    />
                  );
                })}
            </div>
            {/* Post sectoin ends */}
          </div>
        </div>
      </div>
      <div class="col-sm-4 col-xs-4 col-advertisment">
      </div>
    </div>
  );
}

export default Favourite;
