import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import {
  API_URL,
  PROFILE_PIC_URL,
  POST_PIC_URL,
} from "../../constants/globalConstants";

import "./Feed.css";

import Post from "../../components/Post/Post";
import Ad from "../../components/Ad/Ad";

function Feed() {
  const [userDetails, setUserDetails] = useState({});
  const [profilePic, setProfilePicDisplay] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postImageStore, setPostImageStore] = useState("");
  const [newPost, setNewPost] = useState(null);

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
   
    console.log(postDescription.current.value)
    setNewPost(temp);

    await axios
      .post(API_URL + "/feed/uploadPost/", inputData, config)
      .then((response) => { 
        console.log(response);
        postDescription.current.value = "";
        if(response.status === 201 ){
          setNewPost(response.data)
        }
      });
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
        setProfilePicDisplay(PROFILE_PIC_URL + response.data.profilePhoto);
      });
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const ads = [
    {
      id: 1,
      url: "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/820/cached.offlinehbpl.hbpl.co.uk/news/SUC/nft-unlock.jpg",
    },
    {
      id: 2,
      url: "https://press.farm/wp-content/uploads/2022/02/nft-pomotion-advertise-your-nfts-755x466.jpg",
    },
  ];

  const posts = [
		{
			id:1,
			name:"Mahesh Lakshan",
			message:"owasfbgbaeufbv jubfubauifg jasdguawrbfuawrg",
			timestamp:"2022-08-16T16:10:24.013Z",
			image:"https://images.unsplash.com/photo-1508179719682-dbc62681c355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80",
			userImage:"https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg",
			comments:[
				{
					id:5,
					name:"Roman Reigns",
					message:"hi,how you doing?",
					userImage:"https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg",
					timestamp:"2022-08-16T16:10:24.013Z",
				},
				{
					id:6,
					name:"Dwaine Johnson",
					message:"whatsup?",
					userImage:"https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg",
					timestamp:"2022-08-16T16:10:24.013Z",
				}
				],
			likes:20
		},
		{
			id:2,
			name:"Janitha",
			message:"owasfbgbaeufbv jubfubauifg jasdguawrbfuawrg",
			timestamp:"2022-08-16T16:10:24.013Z",
			userImage:"https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg",
			likes:10
		},	
		{
			id:3,
			name:"Charith Anjana",
			message:"owasfbgbaeufbv jubfubauifg jasdguawrbfuawrg",
			timestamp:"2022-08-16T16:10:24.013Z",
			image:"https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			userImage:"https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg",
			likes:50
		},
		];

    const temp = {
        blockedStatus: false,
        commentCount: 0,
        creatorId: 1,
        description: "hi",
        imagevideo: "1660666220856.png",
        postId: 12,
        publishedDate: "2022-08-16T16:10:24.013Z",
        reactCount: 0
      }
    


  return (
    <div className="row p-0 m-0">
      <div class="col-sm-8 col-xs-12 p-0 feedBody">
        <div class="container-fluid p-0 feedPage">
          <div class="container p-0 feed-container">
            {/* <InputBox accessToken profilePic={profilePic} name={userDetails.name}/> */}
            {/* InputBox Start */}
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
                    what's on your mind,{userDetails.name} ?
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
            {/* InputBox End */}

            {/* <Posts profilePic={profilePic} name={userDetails.name} /> */}
            {/* Post section  start */}
            <div className="pb-3">
              { newPost &&
                <Post 
                key={ newPost.postId }
                userName = { userDetails.name }
                profilePic = { profilePic }
                name={ userDetails.name }
                message={ newPost.description }
                timestamp={ newPost.publishedDate }
                image={ POST_PIC_URL + newPost.imagevideo }
                userImage = { profilePic }
                comments = {newPost.comments}
                likes= {newPost.reactCount}
                /> 
              }
              {
                posts.map(post => {
                  return(
                    <Post 
                      key={post.id}
                      userName = { userDetails.name }
                      profilePic = { profilePic }
                      name={post.name}
                      message={post.message}
                      timestamp={post.timestamp}
                      image={post.image}
                      userImage = {post.userImage}
                      comments = {post.comments}
                      likes= {post.likes}
                      /> 
                    )
                  }
                )
              }
		        </div>
            {/* Post sectoin ends */}

          </div>
        </div>
      </div>
      <div class="col-sm-4 col-xs-4 col-advertisment">
        {ads.map((ad) => {
          return <Ad key={ad.id} image={ad.url} />;
        })}
      </div>
    </div>
  );
}
export default Feed;
