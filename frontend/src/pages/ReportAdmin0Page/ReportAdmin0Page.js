import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import $ from "jquery";

import { API_URL, PROFILE_PIC_URL } from "../../constants/globalConstants";

import "./ReportAdmin0Page.css";
import checkedMark from "../../images/svg/checked-mark.svg";

function ReportAdmin0Page() {
  let { id } = useParams();

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const [userDetails, setUserDetails] = useState({});
  const [creatorDetails, setCreatorDetails] = useState({});
  const [userReportDetails, setUserReportDetails] = useState([]);
  const [postReportDetails, setPostReportDetails] = useState([]);
  const [commentReportDetails, setCommentReportDetails] = useState([]);
  const [advertisementReportDetails, setAdvertisementReportDetails] = useState(
    []
  );
  const [buttonName, setButtonName] = useState("Ban");
  const [accountStatus, setAccountStatus] = useState("Active");
  const [buttonStyle, setButtonStyle] = useState({});

  const typeList = [
    "",
    "Nudity",
    "Violence",
    "Spam",
    "False Information",
    "Something Else",
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
        type: 2,
      },
    };

    await axios
      .get(API_URL + "/complaintreview/getReportUserDetails/", config)
      .then((response) => {
        if (!response.data.userDetails.blockedStatus) {
          // setButtonName("Active");

          // setDisabled(true);
          setButtonName("Ban");
          setButtonStyle();
          setAccountStatus("Active");
        } else {
          setButtonName("Activate");
          setButtonStyle({
            background: "#33ff94",
            border: "#33ff94",
            color: "black",
          });
          setAccountStatus("Ban");
        }
        setUserDetails(response.data.userDetails);
        setCreatorDetails(response.data.creatorDetails);
        setUserReportDetails(response.data.userReportDetails);
        setPostReportDetails(response.data.postReportDetails);
        setCommentReportDetails(response.data.commentReportDetails);
        setAdvertisementReportDetails(response.data.advertisementReportDetails);
      });
  };

  const banUser = async () => {
    const token = {
      headers: {
        authorization: accessToken,
      },
    };

    let actionType;

    if (accountStatus === "Active") {
      actionType = 1;
    } else {
      actionType = 5;
    }

    const inputData = {
      blockUserId: userDetails.userId,
      blockedAdminID: userId,
      blockType: actionType,
    };

    await axios
      .post(API_URL + "/complaintreview/blockuser/", inputData, token)
      .then((res) => {});

    if (actionType === 1) {
      setButtonName("Active");
      setButtonStyle({
        background: "#33ff94",
        border: "#33ff94",
        color: "black",
      });
      setAccountStatus("Ban");
    } else {
      actionType = 5;

      setButtonName("Ban");
      setButtonStyle();
      setAccountStatus("Active");
    }

    $("#btn-close-form").click();
  };

  useEffect(() => {
    getData();
  }, []);

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
                <div>
                  <button
                    type="button"
                    class="btn btn-danger banButton"
                    data-bs-toggle="modal"
                    data-bs-target="#upgradeAccount"
                    style={buttonStyle}
                  >
                    {buttonName}
                  </button>
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
                    Confirm {accountStatus === "Active" && "Banning"}
                    {accountStatus !== "Active" && "Activation"}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  Do you want to{" "}
                  {accountStatus === "Active" ? "Ban" : "Activate"}?
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
                    class="btn btn-danger "
                    onClick={banUser}
                    style={buttonStyle}
                  >
                    Confirm
                  </button>
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
    </span>
  );
}

export default ReportAdmin0Page;
