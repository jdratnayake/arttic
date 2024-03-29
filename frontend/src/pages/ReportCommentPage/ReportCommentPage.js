import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import $ from "jquery";

import "../ReportUserPage/ReportUserPage.css";
import avatar from "../../images/users/avatar-1.jpg";
import checkedMark from "../../images/svg/checked-mark.svg";

import Post from "../../components/Post/Post";
import {
  API_URL,
  POST_PIC_URL,
  PROFILE_PIC_URL,
} from "../../constants/globalConstants";

function ReportCommentPage() {
  let { id } = useParams();

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken, profilePhoto } = userInfo.user;

  const [userDetails, setUserDetails] = useState({});
  const [creatorDetails, setCreatorDetails] = useState({});
  const [commentComplaint, setCommentComplaint] = useState({});
  const [postDetails, setPostDetails] = useState({});
  const [userReportDetails, setUserReportDetails] = useState([]);
  const [postReportDetails, setPostReportDetails] = useState([]);

  const [buttonName, setButtonName] = useState("Ban Comment");
  const [isDisabled, setDisabled] = useState(false);

  const typeList = [
    "",
    "Nudity",
    "Violence",
    "Harassment",
    "Suicide or self-injury",
    "False information",
    "Spam",
    "Unauthorized sales",
    "Hate speech",
    "Terrorism",
    "Something else",
  ];

  const numList = ["One", "Two", "Three", "Four", "Five"];

  const truncate = (str, n = 50) => {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  };

  const getData = async () => {
    const config = {
      headers: {
        authorization: accessToken,
        reportid: id,
      },
    };

    await axios
      .get(API_URL + "/complaintreview/getReportCommentDetails/", config)
      .then((response) => {
        if (response.data.commentComplaint.commentStatus) {
          setButtonName("Comment Banned");
          setDisabled(true);
        }
        // setDisabled(response.data.postDetails.blockedStatus);
        setUserDetails(response.data.userDetails);
        setCreatorDetails(response.data.creatorDetails);
        setPostDetails(response.data.postDetails);
        setCommentComplaint(response.data.commentComplaint);
        setUserReportDetails(response.data.userReportDetails);
        setPostReportDetails(response.data.postReportDetails);
        console.log(response);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const sendNotification = async (userId, notificationType, message) => {
    const inputData = { userId, notificationType, message };

    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .post(API_URL + "/user/oneTimeNotification", inputData, config)
      .then((response) => {
        console.log(response.data);
      });
  };

  const banUser = async () => {
    const token = {
      headers: {
        authorization: accessToken,
      },
    };

    const inputData = {
      blockUserId: commentComplaint.reportedCommentId,
      blockedAdminID: userId,
      blockType: 3,
    };

    await axios
      .post(API_URL + "/complaintreview/blockuser/", inputData, token)
      .then((res) => {});

    sendNotification(
      userDetails.userId,
      3,
      "We Have Banned Your Comment Due to the Violation of Rules and Regulations of Post Sharing"
    );

    $("#btn-close-form").click();
    setButtonName("Comment Banned");
    setDisabled(true);
  };

  const deletePost = () => {};

  return (
    <span className="ReportUserPage">
      <div class="row align-items-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-12">
          {/* Bg */}
          <div class="pt-20 rounded-top bannerImage"></div>
          <div class="bg-white smooth-shadow-sm ">
            <div class="d-flex align-items-center justify-content-between pt-4 pb-6 px-4">
              <div class="d-flex align-items-center">
                {/* avatar */}
                <div class="avatar-xxl  avatar-online me-2 position-relative d-flex justify-content-end align-items-end mt-n10">
                  <img
                    src={PROFILE_PIC_URL + "/" + userDetails.profilePhoto}
                    class="avatar-xxl rounded-circle border border-4 border-white-color-40"
                    alt=""
                  />
                  <a
                    href="#!"
                    class="position-absolute top-0 right-0 me-2"
                    data-bs-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Verified"
                  >
                    {userDetails.type === 3 &&
                      creatorDetails.openSeaStatus === 1 && (
                        <img src={checkedMark} alt="" height="30" width="30" />
                      )}
                  </a>
                </div>
                {/* text */}
                <div class="lh-1">
                  <h2 class="mb-0">{userDetails.name}</h2>
                </div>
              </div>
            </div>
          </div>

          <div class="card reportBio">
            {/* card body */}
            <div class="card-body reportBioBody">
              <span class="text-uppercase fw-medium text-dark fs-4 ls-2">
                Bio
              </span>
              {/* text */}
              <p class="mt-1 mb-1 ">{userDetails.bio}</p>
              {/* row */}
              <div class="row">
                <div class="col-6 mb-1">
                  <h6 class="text-uppercase fs-4 ls-2">Joined date </h6>
                  <p class="mb-0 ">
                    {new Date(userDetails.joinedDate).toLocaleDateString()}
                  </p>
                </div>
                <div class="col-6">
                  <h6 class="text-uppercase fs-4 ls-2">Accounnt status</h6>
                  {userDetails.premiumUser ? (
                    <p class="mb-0">Premium</p>
                  ) : (
                    <p class="mb-0">Basic</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-5">
        {/* row */}
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-7 col-md-12 col-12 mb-5 ">
            <div class="card mt-2">
              <Post
                key={postDetails.postId}
                id={"post" + postDetails.postId}
                postid={postDetails.postId}
                userName={postDetails.name}
                profilePic={PROFILE_PIC_URL + profilePhoto}
                profilerId={postDetails.creatorId}
                name={postDetails.name}
                message={postDetails.description}
                timestamp={postDetails.publishedDate}
                image={POST_PIC_URL + postDetails.imagevideo}
                userImage={PROFILE_PIC_URL + postDetails.profilePhoto}
                commentCount={postDetails.commentCount}
                likes={postDetails.reactCount}
                creatorId={postDetails.creatorId}
                deletePost={deletePost}
              />

              <div class="card-body">
                <h3 class="card-title">Reported Comment</h3>
                <p class="card-text">{commentComplaint.commentName}</p>
              </div>

              <div class="card-body">
                <h5 class="card-title">
                  {typeList[commentComplaint.reportCategory]}
                </h5>
                <p class="card-text">{commentComplaint.description}</p>
                <button
                  class="btn btn-danger mx-2"
                  disabled={isDisabled}
                  data-bs-toggle="modal"
                  data-bs-target="#upgradeAccount"
                >
                  {buttonName}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                Confirm Ban
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              This procedure is irreversible. Do you want to Ban?
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
              <button type="button" class="btn btn-danger " onClick={banUser}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div class="py-5">
        {/* row */}
        <div class="row">
          <div class="col-xl-6 col-lg-12 col-md-12 col-12 mb-5 ">
            {/*card */}
            <div class="card">
              {/* card body */}
              <div class="card-body">
                {/* card title */}
                {/*<h4 class="card-title mb-4">About Me</h4>*/}
                <span class="text-uppercase fw-medium text-dark fs-5 ls-2">
                  User report
                </span>
                <div class="row mt-2 p-1 complain-body">
                  {/* Accordion */}
                  <div class="accordion" id="accordionUser">
                    {userReportDetails.map((data, i) =>
                      i === 0 ? (
                        <div class="accordion-item" key={data.userReportedId}>
                          <h2
                            class="accordion-header"
                            id={"heading" + numList[i]}
                          >
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={"#collapse" + (i + 1)}
                              aria-expanded="true"
                              aria-controls={"collapse1" + (i + 1)}
                            >
                              {truncate(data.description)}
                            </button>
                          </h2>
                          <div
                            id={"collapse" + (i + 1)}
                            class="accordion-collapse collapse show"
                            aria-labelledby={"heading" + numList[i]}
                            data-bs-parent="#accordionUser"
                          >
                            <div class="accordion-body">
                              <p>
                                <b>{typeList[data.reportCategory]}</b>
                              </p>
                              {data.description}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div class="accordion-item" key={data.userReportedId}>
                          <h2
                            class="accordion-header"
                            id={"heading" + numList[i]}
                          >
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={"#collapse" + (i + 1)}
                              aria-expanded="false"
                              aria-controls={"collapse" + (i + 1)}
                            >
                              {truncate(data.description)}
                            </button>
                          </h2>
                          <div
                            id={"collapse" + (i + 1)}
                            class="accordion-collapse collapse"
                            aria-labelledby={"heading" + numList[i]}
                            data-bs-parent="#accordionUser"
                          >
                            <div class="accordion-body">
                              <p>
                                <b>{typeList[data.reportCategory]}</b>
                              </p>
                              {data.description}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12 col-md-12 col-12 mb-5 ">
            {/*card */}
            <div class="card">
              {/* card body */}
              <div class="card-body">
                {/* card title */}
                {/*<h4 class="card-title mb-4">About Me</h4>*/}
                <span class="text-uppercase fw-medium text-dark fs-5 ls-2">
                  Post report
                </span>
                <div class="row mt-2 p-1 complain-body">
                  {/* Accordion */}
                  <div class="accordion" id="accordionPost">
                    {postReportDetails.map((data, i) =>
                      i === 0 ? (
                        <div class="accordion-item" key={data.postReportId}>
                          <h2
                            class="accordion-header"
                            id={"heading" + numList[i]}
                          >
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={"#collapse" + (i + 1 + 5)}
                              aria-expanded="true"
                              aria-controls={"collapse" + (i + 1 + 5)}
                            >
                              {truncate(data.description)}
                            </button>
                          </h2>
                          <div
                            id={"collapse" + (i + 1 + 5)}
                            class="accordion-collapse collapse show"
                            aria-labelledby={"heading" + numList[i]}
                            data-bs-parent="#accordionPost"
                          >
                            <div class="accordion-body">
                              <p>
                                <b>{typeList[data.reportCategory]}</b>
                              </p>

                              {data.description}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div class="accordion-item" key={data.postReportId}>
                          <h2
                            class="accordion-header"
                            id={"heading" + numList[i]}
                          >
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={"#collapse" + (i + 1 + 5)}
                              aria-expanded="false"
                              aria-controls={"collapse" + (i + 1 + 5)}
                            >
                              {truncate(data.description)}
                            </button>
                          </h2>
                          <div
                            id={"collapse" + (i + 1 + 5)}
                            class="accordion-collapse collapse"
                            aria-labelledby={"heading" + numList[i]}
                            data-bs-parent="#accordionPost"
                          >
                            <div class="accordion-body">
                              <p>
                                <b>{typeList[data.reportCategory]}</b>
                              </p>
                              {data.description}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default ReportCommentPage;
