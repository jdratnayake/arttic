import "./FollowerProfile.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  API_URL, PROFILE_PIC_URL,
  POST_PIC_URL,
  COVER_PIC_URL,
} from "../../constants/globalConstants";

import axios from "axios";
import $ from "jquery";
import { useParams } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";

import NavBarCreator from "../../components/NavBarCreator/NavBarCreator";
import profile from "../../images/users/pic4.png";
import avatar1 from "../../images/avatar/avatar-2.jpg";
import avatar2 from "../../images/avatar/avatar-3.jpg";
import avatar3 from "../../images/avatar/avatar-4.jpg";
import t from '../../images/NFTs/monkey-removebg.png';
import Post from "../../components/Post/Post";
import checkedMark from "../../images/svg/checked-mark.svg";

import { initialReportValues, reportDescriptionValidation } from "./Validation";


function FollowerProfile() {
  let { followerId } = useParams();

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const [followingData, setFollowingsData] = useState([]);
  const [followersData, setFollowersData] = useState([]);

  const [coverPhoto, setCoverPhoto] = useState("");
  const [accstate, setaccstate] = useState("");
  const [reportType, setReportType] = useState("");
  const [reportItemId, setReportItemId] = useState("");

  const submitReport = async (data, { resetForm }) => {
    const inputData = {
      userId: userId,
      category: data.reportCategory,
      description: data.newDescription,
      reportType: reportType,
      reportedUserId: reportItemId,
    };
    console.log(inputData);
    // e.preventDefault();
    // console.log("submited");

    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    if (reportType === 1) {
      // console.log("ad reported");
      await axios
        .post(API_URL + "/user/uploadUserReport/", inputData, config)
        .then((response) => {
          console.log(response.status);
          // forceUpdate();
          $(`#btn-close-form-user-report${userId}`).click();
          if (response.status === 201) {
            toast.success("You have successfully reported the follower", {
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
    }
    resetForm();
    // window.location.reload(false);
  };


  const [profileData, setProfileData] = useState("");

  // const userInfo = useSelector((state) => state.userInfo);
  // const { userId, accessToken } = userInfo.user;

  const getUserData = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/user/getuserdetails/" + userId, config)
      .then((response) => {
        setProfileData(response.data);
        setCoverPhoto(COVER_PIC_URL + response.data.followerCreator.coverPhoto);
        setaccstate(response.data.premiumUser);
      });
  };



  //  get followes data -------------------------------------------------------
  const getFollowersData = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/user/getfollowersdetails/" + userId, config)
      .then((response) => {
        setFollowersData(response.data);
        //console.log(response.data);
      });
  };
  //  end get followers data --------------------------------------------------


  //  get followings data -----------------------------------------------------
  const getFollowingsData = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/user/getfollowingsdetails/" + userId, config)
      .then((response) => {
        setFollowingsData(response.data);
        //console.log(response.data);
      });
  };
  //  end followings data ----------------------------------------------------


  useEffect(() => {
    getUserData();
    getFollowersData();
    getFollowingsData();
  }, []);

  return (
    <span className="followerProfile">
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
      <NavBarCreator />

      <div class="main-container">
        <div class="row align-items-center main-container-row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

            {/* Bg */}
            <div class="pt-25 rounded-top bannerImage" style={{ backgroundImage: "url(" + coverPhoto + ")" }}></div>
            <div class="bg-white smooth-shadow-sm">
              <div class="d-flex align-items-center justify-content-between pt-4 pb-6 px-4">
                <div class="d-flex align-items-center">

                  {/* avatar */}
                  <div class="me-2 position-relative d-flex 
                                        justify-content-end align-items-end mt-n10">

                    <img
                      src={PROFILE_PIC_URL + profileData.profilePhoto}
                      class="avatar-xxl rounded-circle border border-4 border-white-color-40"
                      alt=""
                    />

                    <a class="position-absolute top-0 right-0 me-2" data-placement="top"
                      data-original-title="Verified"
                    >
                      <img src={checkedMark} alt="" height="30" width="30" />
                    </a>

                  </div>

                  {/* text */}
                  <div class="lh-1">
                    <h2 class="mb-0"> {profileData.name} </h2>
                    <div class="sub-lh-1">
                      {/* <p class="mb-0 d-block">{followersData.length} followers</p> */}
                      <p class="mb-0 d-block following">{followingData.length} following</p>
                    </div>
                  </div>

                </div>

                {profileData.userId !== userId &&
                  (
                    <div class="d-flex">
                      <a href="#" class="btn btn-outline-primary  d-sm-block">
                        <i class="bi bi-bookmark-plus dinvit"></i>Follow
                      </a>

                      <div class="dropdown d-inline-block drop-list-upper">
                        <button
                          className="dr-btn report-threedots"
                          id="page-header-notifications-dropdown"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="bi bi-three-dots"></i>
                        </button>

                        <div
                          class="dropdown-menu dropdown-menu-lg dropdown-menu-end dropdown-menu-arrow"
                          aria-labelledby="page-header-notifications-dropdown"
                        >
                          <a class="dropdown-item dinv">
                            <i class="bi bi-flag-fill dinvit icon-theme"></i>{" "}
                            <span class="align-middle">Report</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}


              </div>
            </div>

            <div class="card reportBio">
              {/* card body */}
              <div class="card-body reportBioBody">
                {/* row */}
                <div class="row reportBio-row">
                  <div class="col-12 mb-1">
                    {/* text */}
                    <h6 class="text-uppercase fs-5 ls-2">Bio</h6>
                    <p class="mb-0">
                      {profileData.bio}
                    </p>
                  </div>
                  {/* <div class="col-12 mb-1">
                    <h6 class="text-uppercase fs-5 ls-2">Username</h6>
                    <p class="mb-0">{profileData.username}</p>
                  </div> */}
                  {/* <div class="col-6 mb-1">
                    <h6 class="text-uppercase fs-5 ls-2">Phone </h6>
                    <p class="mb-0">{profileData.phone}</p>
                  </div> */}
                  <div class="col-6 mb-1">
                    <h6 class="text-uppercase fs-5 ls-2">Joined date </h6>
                    <p class="mb-0">{new Date(profileData.joinedDate).toDateString()}</p>
                  </div>
                  {/* <div class="col-6">
                    <h6 class="text-uppercase fs-5 ls-2">Email </h6>
                    <p class="mb-0">{profileData.email}</p>
                  </div> */}
                  <div class="col-6">
                    <h6 class="text-uppercase fs-5 ls-2">Accounnt status</h6>
                    {accstate
                      ? <p class="mb-0">Premium</p>
                      : <p class="mb-0">Basic</p>
                    }
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="py-6 intro">
          <div class="row">
            <div class="col-xl-8 col-lg-12 col-md-12 col-12 mb-8">

              {/* Posts */}


              <br />

            </div>

            <br />

            {/* Suggesions */}
            {/* <div class="col-xl-4 col-lg-12 col-md-12 col-12 mb-4">

              <div class="card mb-4">

                <div class="card-body">

                  <h4 class="card-title mb-4">Suggesions for creator</h4>
                  <div class="d-flex justify-content-between
                      align-items-center mb-4">
                    <div class="d-flex align-items-center">

                      <div>
                        <img src={profile} class="rounded-circle avatar-md" alt="" />
                      </div>

                      <div class="ms-3 ">
                        <h5 class="mb-1">Dianna Smiley</h5>
                        <p class="text-muted mb-0 fs-5 text-muted">UI / UX Designer
                        </p>
                      </div>
                    </div>
                    <div>
                      <a href="#" class="text-muted text-primary-hover"><i
                        class="me-4 icon-xs" data-feather="phone-call"></i></a>
                      <a href="#" class="text-muted text-primary-hover"><i
                        class="icon-xs" data-feather="video"></i></a>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between
                      align-items-center mb-4">
                    <div class="d-flex align-items-center">

                      <div>
                        <img src={avatar1} class="rounded-circle avatar-md" alt="" />
                      </div>

                      <div class="ms-3 ">
                        <h5 class="mb-1">Anne Brewer</h5>
                        <p class="text-muted mb-0 fs-5 text-muted">Senior UX Designer
                        </p>
                      </div>
                    </div>
                    <div>

                      <a href="#" class="text-muted text-primary-hover"><i
                        class="me-4 icon-xs" data-feather="phone-call"></i></a>
                      <a href="#" class="text-muted text-primary-hover"><i
                        class="icon-xs" data-feather="video"></i></a>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between
                      align-items-center mb-4">
                    <div class="d-flex align-items-center">

                      <div>
                        <img src={avatar2} class="rounded-circle avatar-md" alt="" />
                      </div>

                      <div class="ms-3 ">
                        <h5 class="mb-1">Richard Christmas
                        </h5>
                        <p class="text-muted mb-0 ">Front-End Engineer</p>
                      </div>
                    </div>
                    <div>

                      <a href="#" class="text-muted text-primary-hover"><i
                        class="me-4 icon-xs" data-feather="phone-call"></i></a>
                      <a href="#" class="text-muted text-primary-hover"><i
                        class="icon-xs" data-feather="video"></i></a>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between
                      align-items-center">

                    <div class="d-flex align-items-center">
                      <div>
                        <img src={avatar3} class="rounded-circle avatar-md" alt="" />
                      </div>

                      <div class="ms-3 ">
                        <h5 class="mb-1">Nicholas Binder
                        </h5>
                        <p class="text-muted mb-0 fs-5 ">Content Marketing Manager</p>
                      </div>
                    </div>
                    <div>
                      <a href="#" class="text-muted text-primary-hover"><i
                        class="me-4 icon-xs" data-feather="phone-call"></i></a>
                      <a href="#" class="text-muted text-primary-hover"><i
                        class="icon-xs" data-feather="video"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

          </div>
        </div>

      </div>
      {/* complain modal start*/}

      <div
        class="modal fade"
        id="complainUserModal"
        tabindex="-1"
        aria-labelledby="planModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header p-3">
              <div>
                <h4 class="mb-0" id="planModalLabel">
                  Complain
                </h4>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id={`btn-close-form-user-report${userId}`}
              ></button>
            </div>
            <div class="modal-body p-4">
              <div class="card border shadow-none border-bottom p-4">
                <div class="row">
                  <div>
                    {/* border */}
                    <Formik
                      initialValues={initialReportValues}
                      validationSchema={reportDescriptionValidation}
                      onSubmit={submitReport}
                    >
                      {({ isSubmitting }) => (
                        <Form>
                          {/* row */}
                          <div class="mb-3 row">
                            {/* label */}

                            <label
                              for="reportCategory"
                              class="col-sm-4 col-form-label form-label form-label-sm"
                            >
                              Report category
                            </label>
                            <div class="col-md-8 col-12">
                              {/* input */}
                              <Field
                                as="select"
                                className="form-control form-control-sm"
                                name="reportCategory"

                              >
                                <option value="1">Nudity</option>
                                <option value="2">Violence</option>
                                <option value="3">Harassment</option>
                                <option value="4">
                                  Suicide or self-injury
                                </option>
                                <option value="5">False information</option>
                                <option value="6">Spam</option>
                                <option value="7">Unauthorized sales</option>
                                <option value="8">Hate speech</option>
                                <option value="9">Terrorism</option>
                                <option value="10">Something else</option>
                              </Field>
                            </div>
                          </div>
                          {/* row ends*/}

                          {/* row */}
                          <div class="mb-3 row">
                            <label
                              for="newDescription"
                              class="col-sm-4 col-form-label form-label"
                            >
                              Description
                            </label>
                            <div class="col-md-8 col-12">
                              <Field
                                type="text"
                                className="form-control form-control-update"
                                id="newDescription"
                                name="newDescription"
                                placeholder="Enter your report description"
                                class="form-control form-control-sm"
                              />
                              <ErrorMessage
                                name="newDescription"
                                component="div"
                                className="error-msg"
                              />
                            </div>
                          </div>
                          {/* row ends*/}

                          {/* report type*/}
                          <Field

                            type="text"
                            id="reportType"
                            name="reportType"
                            class="form-control form-control-sm"
                            value={reportType}
                            hidden
                          />

                          {/* commennt id*/}
                          <Field
                            type="text"
                            id="comId"
                            name="comId"
                            class="form-control form-control-sm"
                            value={reportItemId}
                            hidden
                          />

                          <div class="col-md-8 col-12 mt-3">
                            <button
                              type="submit"
                              class="btn btn-primary"
                              disabled={isSubmitting}
                            >
                              Submit
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* complain modal ends*/}
    </span>
  )
}

export default FollowerProfile;