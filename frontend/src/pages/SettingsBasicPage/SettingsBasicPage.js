import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import {
  API_URL,
  PROFILE_PIC_URL,
  COVER_PIC_URL,
} from "../../constants/globalConstants";
import { updateUserState } from "../../actions/userActions";

import "./settings.css";
// import t from "../../../../backend/images/profilePic";

function SettingsBasicPage() {
  const [userDetails, setUserDetails] = useState({});

  const [profilePicDisplay, setProfilePicDisplay] = useState("");
  const [profilePicStore, setProfilePicStore] = useState("");
  const [coverPicDisplay, setCoverPicDisplay] = useState("");
  const [coverPicStore, setCoverPicStore] = useState("");

  const profilePicInput = useRef(null);
  const coverPicInput = useRef(null);
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  // profile picture - START
  const handleProfilePicClick = (event) => {
    profilePicInput.current.click();
  };

  const handleProfilePicChange = (e) => {
    setProfilePicDisplay(URL.createObjectURL(e.target.files[0]));
    setProfilePicStore(e.target.files[0]);
  };

  const uploadProfilePicture = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        authorization: accessToken,
        userid: userId,
        uploadfiletype: "1",
      },
    };

    const inputData = new FormData();

    inputData.append("file", profilePicStore);

    await axios
      .post(API_URL + "/user/uploadprofileorcoverpicture/", inputData, config)
      .then((response) => {
        dispatch(updateUserState(userId));
      });
  };
  // profile picture - END

  // cover picture - START
  const handleCoverPicClick = (event) => {
    coverPicInput.current.click();
  };

  const handleCoverPicChange = (e) => {
    setCoverPicDisplay(URL.createObjectURL(e.target.files[0]));
    setCoverPicStore(e.target.files[0]);
  };

  const uploadCoverPicture = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        authorization: accessToken,
        userid: userId,
        uploadfiletype: "2",
      },
    };

    const inputData = new FormData();

    inputData.append("file", coverPicStore);

    await axios
      .post(API_URL + "/user/uploadprofileorcoverpicture/", inputData, config)
      .then((response) => { });
  };
  // cover picture - END

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
        setCoverPicDisplay(
          COVER_PIC_URL + response.data.followerCreator.coverPhoto
        );
      });
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="settingsPage">
      <div class="row mb-6">
        <div class="col">
          {/* card */}
          <div class="card">
            {/* card body */}
            <div class="card-body">
              <div class=" mb-6">
                <h4 class="mb-1">Profile Settings</h4>
              </div>
              <div class="row align-items-center mb-8">
                <div class="col-md-3 mb-3 mb-md-0">
                  <h5 class="mb-0">Avatar</h5>
                </div>
                <div class="col-md-9">
                  <div class="d-flex align-items-center">
                    <div class="me-3">
                      <img
                        src={profilePicDisplay}
                        class="rounded-circle avatar avatar-lg"
                        alt=""
                      />
                    </div>
                    <div>
                      <form onSubmit={uploadProfilePicture}>
                        <input
                          type="file"
                          ref={profilePicInput}
                          onChange={handleProfilePicChange}
                          style={{ display: "none" }}
                        />
                        <button
                          type="button"
                          class="btn btn-outline-white
                            me-1"
                          onClick={handleProfilePicClick}
                        >
                          Change
                        </button>
                        <button type="submit" class="btn btn-outline-white">
                          Save
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* col */}
              <div class="row mb-6">
                <div class="col-md-3 mb-3 mb-md-0">
                  {/* heading */}
                  <h5 class="mb-0">Cover photo</h5>
                </div>
                <div class="col-md-9">
                  {/* dropzone input */}
                  <div>
                    <form
                      onSubmit={uploadCoverPicture}
                      class=" mb-3  dz-clickable"
                    >
                      <img
                        src={coverPicDisplay}
                        style={{ width: "41rem", height: "12rem" }}
                        alt=""
                      />

                      <input
                        type="file"
                        ref={coverPicInput}
                        onChange={handleCoverPicChange}
                        style={{ display: "none" }}
                      />

                      <button
                        type="button"
                        class="btn btn-outline-white"
                        onClick={handleCoverPicClick}
                      >
                        Change
                      </button>
                      <button type="submit" class="btn btn-outline-white">
                        Save
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div>
                {/* border */}
                <div class="mb-6">
                  <h4 class="mb-1">Basic information</h4>
                </div>
                <form>
                  {/* row */}

                  <div class="mb-3 row">
                    <label
                      for="email"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Name
                    </label>
                    <div class="col-md-8 col-12">
                      <input
                        type="text"
                        class="form-control"
                        value={userDetails.name}
                        required
                      />
                    </div>
                  </div>

                  {/* row */}
                  <div class="mb-3 row">
                    <label
                      for="email"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Email
                    </label>
                    <div class="col-md-8 col-12">
                      <input
                        type="email"
                        class="form-control"
                        value={userDetails.email}
                        disabled
                      />
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label
                      for="email"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Username
                    </label>
                    <div class="col-md-8 col-12">
                      <input
                        type="text"
                        class="form-control"
                        value={userDetails.name}
                        required
                      />
                    </div>
                  </div>

                  {/* row */}
                  <div class="mb-3 row">
                    <label
                      for="phone"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Bio
                    </label>
                    <div class="col-md-8 col-12">
                      <textarea
                        type="text"
                        rows="3"
                        class="form-control"
                        value={userDetails.bio}
                        required
                      />
                    </div>

                    {/* button */}
                    <div class="offset-md-4 col-md-8 col-12 mt-3">
                      <button type="submit" class="btn btn-primary">
                        Save Changes
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-6">
        <div class="col-md-12 col-12">
          {/* card */}
          <div class="card" id="edit">
            {/* card body */}
            <div class="card-body">
              <div class="mb-6 mt-6">
                <h4 class="mb-1">Change your password</h4>
              </div>
              <form>
                {/* row */}
                <div class="mb-3 row">
                  <label
                    for="currentPassword"
                    class="col-sm-4 col-form-label form-label"
                  >
                    Current password
                  </label>

                  <div class="col-md-8 col-12">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Enter Current password"
                      id="currentPassword"
                      required
                    />
                  </div>
                </div>
                {/* row */}
                <div class="mb-3 row">
                  <label
                    for="currentNewPassword"
                    class="col-sm-4 col-form-label form-label"
                  >
                    New password
                  </label>

                  <div class="col-md-8 col-12">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Enter New password"
                      id="currentNewPassword"
                      required
                    />
                  </div>
                </div>
                {/* row */}
                <div class="row align-items-center">
                  <label
                    for="confirmNewpassword"
                    class="col-sm-4 col-form-label form-label"
                  >
                    Confirm new password
                  </label>
                  <div class="col-md-8 col-12 mb-2 mb-lg-0">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Confirm new password"
                      id="confirmNewpassword"
                      required
                    />
                  </div>
                  {/* list */}
                  <div class="offset-md-4 col-md-8 col-12 mt-4">
                    <h6 class="mb-1">Password requirements:</h6>
                    <p>Ensure that these requirements are met:</p>
                    <ul>
                      <li> Minimum 8 characters long the more, the better</li>
                      <li>At least one lowercase character</li>
                      <li>At least one uppercase character</li>
                      <li>
                        At least one number, symbol, or whitespace character
                      </li>
                    </ul>
                    <button type="submit" class="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-8">
        <div class="col">
          {/* card */}

          <div class="card">
            {/* card body */}
            <div class="card-body">
              <div class="mb-6">
                <h4 class="mb-1">Notification for email</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          {/*  card  */}

          <div class="card">
            {/*  card body  */}
            <div class="card-body">
              <div class="mb-6">
                <h4 class="mb-1">Danger Zone </h4>
              </div>
              <div>
                {/*  text  */}
                <p>
                  Delete any and all content you have, such as articles,
                  comments, your reading list or chat messages. Allow your
                  username to become available to anyone.
                </p>
                <a href="#" class="btn btn-danger">
                  Delete Account
                </a>
                <p class="small mb-0 mt-3">
                  Feel free to contact with any <a href="#">arttic@gmail.com</a>{" "}
                  questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsBasicPage;
