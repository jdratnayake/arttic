import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import $ from "jquery";
import Switch from "react-switch";

import {
  API_URL,
  PROFILE_PIC_URL,
  COVER_PIC_URL,
} from "../../constants/globalConstants";
import { updateUserState } from "../../actions/userActions";

import { initialPasswd, passwdValidation } from "./validation";

import "./settings.css";
// import t from "../../../../backend/images/profilePic";

function SettingsBasicPage() {
  const [userDetails, setUserDetails] = useState({});

  const [profilePicDisplay, setProfilePicDisplay] = useState("");
  const [profilePicStore, setProfilePicStore] = useState("");
  const [coverPicDisplay, setCoverPicDisplay] = useState("");
  const [coverPicStore, setCoverPicStore] = useState("");

  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorUserName, setErrorUserName] = useState("");

  const [premiumUser, SetPremiumUser] = useState(false);
  const [adVisiChecked, setAdVisiChecked] = useState(false);
  const handleChange = nextChecked => {
    setAdVisiChecked(nextChecked);
  };

  const profilePicInput = useRef(null);
  const coverPicInput = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, type, accessToken, openSeaStatus } = userInfo.user;

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
        toast.success("Profile Picture Updated", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
      .then((response) => {
        toast.success("Cover Picture Updated", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  // cover picture - END

  //get user detais -----------------------------------------------------------
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
        setName(response.data.name);
        setUserName(response.data.username);
        setBio(response.data.bio);
        setProfilePicDisplay(PROFILE_PIC_URL + response.data.profilePhoto);
        setCoverPicDisplay(
          COVER_PIC_URL + response.data.followerCreator.coverPhoto
        );
        SetPremiumUser(response.data.premiumUser);
        setAdVisiChecked(response.data.advertisementVisibility);

      });
  };
  //end user details ------------------------------------------------------

  //change basic details ---------------------------------------------------
  const changeBasicDetails = async (event) => {
    event.preventDefault();

    if (valName()) {
      if (valUserName()) {
        //console.log("bio ejed");
        const head = {
          headers: {
            authorization: accessToken,
            userid: userId,
          },
        };

        const formData = { name, username, bio };

        await axios
          .post(API_URL + "/user/updateuserdetails/", formData, head)
          .then((res) => {
            console.log(res.data);
            getUserDetails();
            dispatch(updateUserState(userId));

            toast.success(res.data.msg, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          });
      }
    }
  };
  //end basic deatils------------------------------------------------------

  //validations ------------------------------------------------------------
  const valName = async () => {
    if (name) {
      if (name != userDetails.name) {
        setErrorName("");
        return true;
      }
    } else {
      setErrorName("Name is required");
      return false;
    }
    return false;
  };

  const valUserName = async () => {
    if (username) {
      if (username != userDetails.username) {
        //console.log(username);
        //console.log(userDetails.username);
        const token = {
          headers: {
            authorization: accessToken,
            userid: userId,
          },
        };

        await axios
          .get(API_URL + "/user/checkusername/" + username, token)
          .then((res) => {
            //console.log(res.data.status);
            if (res.data.status == "YES") {
              setErrorUserName("");
              return true;
            } else {
              setErrorUserName("Username is alredy in use!");
              return false;
            }
          });
      }
    } else {
      setErrorUserName("Username is required");
      return false;
    }
    return false;
  };
  //end validations ----------------------------------------------------

  //change password--------------------------------------------------
  const changePassword = async (formdata, { resetForm }) => {
    const head = {
      headers: {
        authorization: accessToken,
        userid: userId,
      },
    };

    await axios
      .post(API_URL + "/auth/changepassword/", formdata, head)
      .then((res) => {
        console.log(res);
        if (res.data.msg == "Success") {
          toast.success("Password Changed!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          resetForm();
        } else if (res.data.msg == "WrPass") {
          toast.error("Wrong Current Password!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          resetForm();
        }
      });
  };
  //end change password----------------------------------------------


  //change Ad free ---------------------------------------------------
  const changeAdFree = async (event) => {
    event.preventDefault();

    const head = {
      headers: {
        authorization: accessToken,
      },
    };

    const formData = {
      data: {
        userId: userId,
        state: adVisiChecked
      }
    };

    await axios
      .post(API_URL + "/user/adfreefeature/", formData, head)
      .then((res) => {
        //console.log(res.data);
        dispatch(updateUserState(userId));
        toast.success(res.data.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });


  };
  //end ad free------------------------------------------------------

  useEffect(() => {
    getUserDetails();
  }, []);

  const upgradeToCreator = async () => {
    console.log("done");

    const token = {
      headers: {
        authorization: accessToken,
      },
    };

    const inputData = { userId };

    await axios
      .post(API_URL + "/auth/converttocreator/", inputData, token)
      .then((res) => {
        if (res.data.statusCode === 1) {
          dispatch(updateUserState(userId));
        }
        // console.log(res.data);
      });

    $("#btn-close-form").click();
  };

  useEffect(() => {
    if (type === 3 && openSeaStatus === 0) {
      navigate("/login");
    }
  }, [type]);

  return (
    <div className="settingsPage">
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
                        <button type="submit" class="btn btn-outline-white" style={{ background: "#33ff94", border: "#33ff94", color: "black" }}>
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

                      <br /><br />

                      <button
                        type="button"
                        class="btn btn-outline-white me-1"
                        onClick={handleCoverPicClick}
                      >
                        Change
                      </button>
                      <button type="submit" class="btn btn-outline-white" style={{ background: "#33ff94", border: "#33ff94", color: "black" }}>
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

                <form onSubmit={changeBasicDetails}>
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
                        defaultValue={userDetails.name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <div className="error-msg">{errorName}</div>
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
                        defaultValue={userDetails.username}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                      <div className="error-msg">{errorUserName}</div>
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
                        rows="5"
                        class="form-control"
                        defaultValue={userDetails.bio}
                        on
                        onChange={(e) => setBio(e.target.value)}
                      />
                    </div>

                    {/* button */}
                    <div class="offset-md-4 col-md-8 col-12 mt-3">
                      <button
                        type="submit"
                        class="btn btn-primary"
                        onClick={() => {
                          valName();
                          valUserName();
                        }}
                      >
                        Save Changes
                      </button>
                      <div className="error-msg" style={{ color: "blue" }}>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <br />
              {premiumUser && (
                <div>
                  <div class="mb-6 mt-6">
                    <h4 class="mb-1">Advertisment-free feature</h4>
                  </div>

                  <form onSubmit={changeAdFree}>
                    {/* row */}
                    <div class="mb-3 row">
                      <label
                        for="followerVisibility"
                        class="switch-lable  d-flex align-items-center justify-content-between col-sm-4 col-form-label form-label"
                      >
                        Enable Advertisments
                        {/* add toggle button */}
                        <Switch
                          onChange={handleChange}
                          checked={adVisiChecked}
                          className="react-switch col-md-8 col-12"
                          onColor="#86d3ff"
                          onHandleColor="#2693e6"
                          handleDiameter={20}
                          uncheckedIcon={false}
                          checkedIcon={false}
                          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                          height={15}
                          width={45}
                          id="material-switch-1"
                        />
                      </label>
                    </div>
                    <div class="row align-items-center">
                      <div class="offset-md-4 col-md-8 mt-4">
                        <button type="submit" class="btn btn-primary">
                          {" "}
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}


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

              <Formik
                initialValues={initialPasswd}
                validationSchema={passwdValidation}
                onSubmit={changePassword}
              >
                {({ isSubmitting }) => (
                  <Form>
                    {/* row */}
                    <div class="mb-3 row">
                      <label
                        for="currentPassword"
                        class="col-sm-4 col-form-label form-label"
                      >
                        Current password
                      </label>

                      <div class="col-md-8 col-12">
                        <Field
                          type="password"
                          class="form-control"
                          placeholder="Enter Current password"
                          id="curPassword"
                          name="curPassword"
                        />
                        <ErrorMessage
                          name="curPassword"
                          component="div"
                          className="error-msg"
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
                        <Field
                          type="password"
                          class="form-control"
                          placeholder="Enter New password"
                          id="newPassword"
                          name="newPassword"
                        />
                        <ErrorMessage
                          name="newPassword"
                          component="div"
                          className="error-msg"
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
                        <Field
                          type="password"
                          class="form-control"
                          placeholder="Confirm new password"
                          id="confirmPassword"
                          name="confirmPassword"
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          component="div"
                          className="error-msg"
                        />
                      </div>
                      {/* list */}
                      <div class="offset-md-4 col-md-8 col-12 mt-4">
                        <h6 class="mb-1">Password requirements:</h6>
                        <p>Ensure that these requirements are met:</p>
                        <ul>
                          <li>
                            {" "}
                            Minimum 8 characters long the more, the better
                          </li>
                          <li>At least one lowercase character</li>
                          <li>At least one uppercase character</li>
                          <li>
                            At least one number, symbol, or whitespace character
                          </li>
                        </ul>
                        <button
                          type="submit"
                          class="btn btn-primary"
                          disabled={isSubmitting}
                          style={{ background: "#33ff94", border: "#33ff94", color: "black" }}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          {/*  card  */}

          {type === 4 && (
            <div class="card">
              {/*  card body  */}
              <div class="card-body">
                <div class="mb-6">
                  <h4 class="mb-1">Upgrade To Creator </h4>
                </div>
                <div>
                  {/*  text  */}

                  <button
                    href="#"
                    class="btn btn-danger"
                    style={{
                      backgroundColor: "#33ff94",
                      borderColor: "#33ff94",
                      color: "#000",
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#upgradeAccount"
                  >
                    Upgrade Account
                  </button>
                </div>
              </div>
            </div>
          )}

          <div
            class="modal fade"
            id="upgradeAccount"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Confirm Upgrade
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  This procedure is irreversible. Do you want to proceed?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                    id="btn-close-form"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{
                      backgroundColor: "#8427e2",
                      borderColor: "#8427e2",
                    }}
                    onClick={upgradeToCreator}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

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
                  Feel free to contact with any questions{" "}
                  <a href="#">arttic@gmail.com</a>.
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
