import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import $ from "jquery";

import {
  API_URL,
  POST_PIC_URL,
  PROFILE_PIC_URL,
  ADVERTISMENT_PIC_URL,
} from "../../constants/globalConstants";

import "../ReportUserPage/ReportUserPage.css";
import avatar from "../../images/users/avatar-1.jpg";
import checkedMark from "../../images/svg/checked-mark.svg";

function ReportAdvertismentPage() {
  let { id } = useParams();

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken, profilePhoto } = userInfo.user;

  const [userDetails, setUserDetails] = useState({});
  const [creatorDetails, setCreatorDetails] = useState({});
  const [advertismentComplaint, setAdvertismentComplaint] = useState({});
  const [advertismentDetails, setAdvertismentDetails] = useState({});
  const [userReportDetails, setUserReportDetails] = useState([]);
  const [advertisementReportDetails, setAdvertisementReportDetails] = useState(
    []
  );

  const [buttonName, setButtonName] = useState("Ban Advertisement");
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

  const nftTypeList = [
    "",
    "Anime",
    "Artwork",
    "Music and Media",
    "Gaming",
    "Memes",
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
      .get(API_URL + "/complaintreview/getReportAdvertismentDetails/", config)
      .then((response) => {
        if (response.data.advertisementDetails.blockedStatus) {
          setButtonName("Advertisement Banned");
          setDisabled(true);
        }

        setUserDetails(response.data.userDetails);
        setCreatorDetails(response.data.creatorDetails);
        setAdvertismentComplaint(response.data.advertisementReport);
        setAdvertismentDetails(response.data.advertisementDetails);
        setUserReportDetails(response.data.userReportDetails);
        setAdvertisementReportDetails(response.data.advertisementReportDetails);
        // console.log(response);
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
      blockUserId: advertismentDetails.advertisementId,
      blockedAdminID: userId,
      blockType: 4,
    };

    await axios
      .post(API_URL + "/complaintreview/blockuser/", inputData, token)
      .then((res) => {});

    sendNotification(
      userDetails.userId,
      3,
      "We Have Banned Your Advertisement Due to the Violation of Rules and Regulations of Post Sharing"
    );

    $("#btn-close-form").click();
    setButtonName("Post Banned");
    setDisabled(true);
  };

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
          <div class="col-xl-6 col-lg-6 col-md-12 col-12 mb-5 ">
            <div class="card mt-2">
              {/* type here */}

              <div class="modal-body p-4">
                <div class="card border shadow-none border-bottom p-4">
                  <div class="row">
                    <div class="col-12 mb-3"></div>
                    <div class="col-12 mb-3">
                      <img
                        src={
                          ADVERTISMENT_PIC_URL + advertismentDetails.contentLink
                        }
                        className="modal-image"
                        style={{ width: "350px" }}
                      />
                    </div>
                    <div class="col-12 mb-3">
                      <h6 class="text-uppercase fs-6 ls-2">Description</h6>
                      <p class="mb-1 fs-8">{advertismentDetails.description}</p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6 class="text-uppercase fs-6 ls-2">Created</h6>
                      <p class="mb-1 fs-8">
                        {new Date(
                          advertismentDetails.createdDate
                        ).toLocaleDateString()}
                      </p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6 class="text-uppercase fs-6 ls-2">Duration</h6>
                      <p class="mb-1 fs-8">
                        {new Date(
                          advertismentDetails.startDate
                        ).toLocaleDateString()}{" "}
                        -{" "}
                        {new Date(
                          advertismentDetails.endDate
                        ).toLocaleDateString()}
                      </p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6 class="text-uppercase fs-6 ls-2">Category</h6>
                      <p class="mb-1 fs-8">
                        {nftTypeList[advertismentDetails.category]}
                      </p>
                    </div>

                    <div class="col-6 mb-3">
                      <h6 class="text-uppercase fs-6 ls-2">Price</h6>
                      <p class="mb-1 fs-8">$ {advertismentDetails.price}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-body">
                <h5 class="card-title">
                  {typeList[advertismentComplaint.reportCategory]}
                </h5>
                <p class="card-text">{advertismentComplaint.description}</p>
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
                  Advertisment report
                </span>
                <div class="row mt-2 p-1 complain-body">
                  {/* Accordion */}
                  <div class="accordion" id="accordionAd">
                    {advertisementReportDetails.map((data, i) =>
                      i === 0 ? (
                        <div
                          class="accordion-item"
                          key={data.advertisementReportId}
                        >
                          <h2
                            class="accordion-header"
                            id={"heading" + numList[i]}
                          >
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={"#collapse" + i + 16}
                              aria-expanded="true"
                              aria-controls={"collapse" + i + 16}
                            >
                              {truncate(data.description)}
                            </button>
                          </h2>
                          <div
                            id={"collapse" + i + 16}
                            class="accordion-collapse collapse show"
                            aria-labelledby={"heading" + numList[i]}
                            data-bs-parent="#accordionAd"
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
                        <div
                          class="accordion-item"
                          key={data.advertisementReportId}
                        >
                          <h2
                            class="accordion-header"
                            id={"heading" + numList[i]}
                          >
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={"#collapse" + i + 16}
                              aria-expanded="false"
                              aria-controls={"collapse" + i + 16}
                            >
                              {truncate(data.description)}
                            </button>
                          </h2>
                          <div
                            id={"collapse" + i + 16}
                            class="accordion-collapse collapse"
                            aria-labelledby={"heading" + numList[i]}
                            data-bs-parent="#accordionAd"
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

export default ReportAdvertismentPage;
