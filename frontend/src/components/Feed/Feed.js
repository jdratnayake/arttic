import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import {
  API_URL,
  PROFILE_PIC_URL,
  ADVERTISMENT_PIC_URL,
  POST_PIC_URL,
} from "../../constants/globalConstants";

import "./Feed.css";

import Post from "../../components/Post/Post";
import Ad from "../../components/Ad/Ad";

function Feed() {
  const [userDetails, setUserDetails] = useState({});
  const [profilePic, setProfilePicDisplay] = useState("");
  const [tempProfilePIc, setTempProfilePic] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postImageStore, setPostImageStore] = useState("");
  const [newPost, setNewPost] = useState(null);
  const [reactedPosts, setReactedPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [posts, setPost] = useState([]);
  const [ads, setAds] = useState([]);
  const [stopScroller, setStopScroller] = useState(0);
  let skip = 0;
  let adskip = 0;

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const postImageInput = useRef(null);
  const postDescription = useRef(null);

  const handlePostImageClick = (event) => {
    postImageInput.current.click();
  };

  const handlePostImageChange = (e) => {
    setPostImage(URL.createObjectURL(e.target.files[0]));
    setPostImageStore(e.target.files[0]);
  };
  // ****************************************************** upload the Post *******************************************
  const uploadPostPicture = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        authorization: accessToken,
        userid: userId,
        uploadfiletype: "3",
      },
    };

    const inputData = new FormData();

    inputData.append("file", postImageStore);
    inputData.append("desc", postDescription.current.value);

    setPostImage(null);
    setPostImageStore(null);

    // console.log(postDescription.current.value)
    // setNewPost(temp);

    await axios
      .post(API_URL + "/feed/uploadPost/", inputData, config)
      .then((response) => {
        // console.log(response);
        postDescription.current.value = "";
        if (response.status === 201) {
          // setNewPost(response.data);
          Object.assign(response.data, { profilePhoto: tempProfilePIc });
          setPost((current) => [response.data, ...current]);
          // console.log(response.data);
          toast.success("You have successfully published the post", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

  // *********** get posts ************
  const getPosts = async () => {
    // console.log("get post called and skip ", skip);
    const config = {
      headers: {
        authorization: accessToken,
        userid: userId,
        skip: skip,
        take: 2,
      },
    };

    await axios.get(API_URL + "/feed/getPosts/", config).then((response) => {
      const newPosts = response.data.posts;
      setReactedPosts(response.data.postReacted);
      setSavedPosts(response.data.savedPost);
      if (newPosts.length === 0) {
        setStopScroller(1);
        // console.log("scroller work",stopScroller,newPosts.length)
      }

      // console.log(response.data)
      newPosts.map((newpost) =>
        posts.find((oldPost) => oldPost.postId === newpost.postId)
          ? null
          : setPost((oldposts) => [...oldposts, newpost])
      );

      // setPost((oldposts) => [...oldposts, ...newPosts]);
    });
    skip = skip + 2;
  };
  // ****************************************************** handle scroll *******************************************

  const handleScroll = (e) => {
    // clearTimeout(timeout);
    // console.log("in handler")
    if (
      window.innerHeight + e.target.documentElement.scrollTop >=
      e.target.documentElement.scrollHeight
    ) {
      // console.log("at the bottom")
      if (!stopScroller) {
        getPosts();
        // console.log("scroller work",stopScroller)
      }
      window.removeEventListener("scroll", handleScroll);
      // console.log('no scroll');
      setTimeout(() => {
        window.addEventListener("scroll", handleScroll);
        // console.log('scroller on');
      }, 5000);
    }
  };
  // ****************************************************** get User details *******************************************
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
        setTempProfilePic(response.data.profilePhoto);
        setProfilePicDisplay(PROFILE_PIC_URL + response.data.profilePhoto);
      });
  };

  const getAds = async () => {
    const config = {
      headers: {
        authorization: accessToken,
        userid: userId,
        take: 3,
      },
    };

    await axios.get(API_URL + "/feed/getAds/", config).then((response) => {
      // console.log(response.data);
      setAds(response.data);
    });
    // exit = exit + 1
  };

  const deletePost = async (pid, creatorId) => {
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
          .get(API_URL + "/feed/deletePost/", config)
          .then((response) => {
            // console.log(response.data)
            // $(`#post${response.data.postId}`).hide();
            setPost(
              posts.filter((post) => post.postId !== response.data.postId)
            );
          });
      } else {
        console.log("cannot delete");
      }
    }
  };

  useEffect(() => {
    getUserDetails();
    getPosts();
    getAds();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="row p-0 m-0">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div class="col-sm-8 col-xs-12 p-0 feedBody">
        <div class="container-fluid p-0 feedPage">
          <div class="container p-0 feed-container">
            {/* <InputBox accessToken profilePic={profilePic} name={userDetails.name}/> */}
            {/* InputBox Start */}
            {userDetails.type === 3 ? (
              <div className="mt-6 p-2 inputBox">
                <div className="inputBox-body">
                  <img
                    src={profilePic}
                    width={40}
                    height={40}
                    className="rounded-circle"
                  />
                  <form className="inputBox-form">
                    <a
                      href="#"
                      class="inputBox-input text-muted"
                      data-bs-toggle="modal"
                      data-bs-target="#inputBox"
                    >
                      what's on your mind,
                      {userInfo.user.name === "undifined"
                        ? userDetails.name
                        : userInfo.user.name}{" "}
                      ?
                    </a>
                    <button hidden type="submit">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="d-flex justify-content-evenly p-2 border-top">
                  <div className="d-flex align-items-center gap-1 flex-grow justify-content-center p-1 px-4 inputBox-inputIcon">
                    <a
                      className="d-flex gap-1 inputBox-action"
                      data-bs-toggle="modal"
                      data-bs-target="#inputBox"
                    >
                      <i class="bi bi-camera-reels-fill text-danger"></i>
                      <p className="m-0 inputBox-icon">Video</p>
                    </a>
                  </div>
                  <div className="d-flex align-items-center gap-1 flex-grow justify-content-center p-1 px-4 inputBox-inputIcon">
                    <a
                      className="d-flex gap-1 inputBox-action"
                      data-bs-toggle="modal"
                      data-bs-target="#inputBox"
                    >
                      <i class="bi bi-file-image-fill text-success"></i>
                      <p className="m-0 inputBox-icon">Photo</p>
                    </a>
                  </div>
                </div>
                {/* update plan modal */}
                <div
                  class="modal fade"
                  id="inputBox"
                  tabindex="-1"
                  aria-labelledby="complainModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                      <div class="modal-header p-3">
                        <div>
                          <h6 class="mb-0" id="complainModalLabel">
                            Create a post
                          </h6>
                        </div>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body p-4 ">
                        <div class="card border shadow-none border-bottom p-4 pb-0">
                          <div class="row">
                            <div>
                              {/* border */}
                              <form>
                                {/* row */}
                                <div class="mb-3 row">
                                  <label
                                    for="description"
                                    class="col-sm-4 col-form-label form-label"
                                  >
                                    Description
                                  </label>
                                  <div class="col-md-8 col-12">
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Description"
                                      id="description"
                                      ref={postDescription}
                                    />
                                  </div>
                                </div>
                                <div class="row mb-3">
                                  <div class="col-md-12">
                                    {/* dropzone input */}
                                    <div>
                                      <form class=" mb-3  dz-clickable">
                                        <img
                                          src={postImage}
                                          style={{
                                            width: "41rem",
                                            height: "12rem",
                                          }}
                                          alt=""
                                        />

                                        <input
                                          type="file"
                                          ref={postImageInput}
                                          onChange={handlePostImageChange}
                                          style={{ display: "none" }}
                                          placeholder="Insert image or video"
                                        />

                                        <button
                                          type="button"
                                          class="btn mt-2  btn-secondary"
                                          onClick={handlePostImageClick}
                                        >
                                          Add Image
                                        </button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer justify-content-start p-4 pt-2">
                        <button
                          type="submit"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          class="btn btn-primary"
                          onClick={uploadPostPicture}
                        >
                          {" "}
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            {/* InputBox End */}

            {/* <Posts profilePic={profilePic} name={userDetails.name} /> */}
            {/* Post section  start */}
            <div className="pb-3">
              {/*console.log(savedPosts,"saved posts")*/}
              {posts &&
                posts.map((post) => {
                  return (
                    <Post
                      key={post.postId}
                      id={"post" + post.postId}
                      postid={post.postId}
                      userName={userDetails.name}
                      profilePic={profilePic}
                      profilerId={userId}
                      name={post.name}
                      message={post.description}
                      timestamp={post.publishedDate}
                      image={POST_PIC_URL + post.imagevideo}
                      userImage={PROFILE_PIC_URL + post.profilePhoto}
                      commentCount={post.commentCount}
                      likes={post.reactCount}
                      creatorId={post.creatorId}
                      deletePost={deletePost}
                      reactedPosts={reactedPosts}
                      savedPosts={savedPosts}
                      tempProfilePIc={tempProfilePIc}
                    />
                  );
                })}
            </div>
            {/* Post sectoin ends */}
          </div>
        </div>
      </div>
      <div class="col-sm-4 col-xs-4 col-advertisment">
        {ads.map((ad) => {
          return (
            <Ad
              key={ad.advertisementId}
              adId={ad.advertisementId}
              image={ADVERTISMENT_PIC_URL + ad.contentLink}
              creatorId={ad.creatorId}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Feed;
