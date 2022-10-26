import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";

import SummaryCard from "../../components/SummaryCard/SummaryCard";
import { API_URL } from "../../constants/globalConstants";

import "./ReportUserAdmin1Page.css";
import "react-toastify/dist/ReactToastify.css";

function ReportUserAdmin1Page() {
  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const [complaintId, setComplainId] = useState(0);
  const [complaintType, setComplainType] = useState(0);
  const [complain, setComplain] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [path, setPath] = useState("");

  const [total, setTotal] = useState(0);
  const [solveCount, setSolveCount] = useState(0);
  const [unSolveCount, setUnSolveCount] = useState(0);
  const [userComplaintList, setUserComplaintList] = useState([]);
  const [postComplaintList, setPostComplaintList] = useState([]);
  const [commentComplaintList, setCommentComplaintList] = useState([]);
  const [advertismentComplaintList, setAdvertismentComplaintList] = useState(
    []
  );

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

  const setResolveComplaint = async () => {
    // console.log(complaintId);
    // console.log(complaintType);

    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    const inputData = { complaintId, complaintType };

    await axios
      .post(API_URL + "/complaintreview/resolvecomplaint/", inputData, config)
      .then((response) => {
        toast.success("You Have Successfully Resolved the Complaint", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        if (complaintType === 1) {
          setUserComplaintList(
            userComplaintList.filter((data) => {
              return data.userReportedId !== complaintId;
            })
          );
        } else if (complaintType === 2) {
          setPostComplaintList(
            postComplaintList.filter((data) => {
              return data.postReportId !== complaintId;
            })
          );
        } else if (complaintType === 3) {
          setCommentComplaintList(
            commentComplaintList.filter((data) => {
              return data.commentReportId !== complaintId;
            })
          );
        } else if (complaintType === 4) {
          setAdvertismentComplaintList(
            advertismentComplaintList.filter((data) => {
              return data.advertisementReportId !== complaintId;
            })
          );
        }

        $("#btn-close-form").click();
      });
  };

  const handleClick = (obj) => {
    let newData = {};
    setComplainId(obj.id);

    if (obj.type === "User") {
      newData = userComplaintList.filter((data) => {
        return data.userReportedId === obj.id;
      })[0];
      setDate(new Date(newData.userReportedDate).toLocaleDateString());

      setComplainType(1);
    } else if (obj.type === "Post") {
      newData = postComplaintList.filter((data) => {
        return data.postReportId === obj.id;
      })[0];
      setDate(new Date(newData.postReportedDate).toLocaleDateString());

      setComplainType(2);
    } else if (obj.type === "Comment") {
      newData = commentComplaintList.filter((data) => {
        return data.commentReportId === obj.id;
      })[0];
      setDate(new Date(newData.commentReportedDate).toLocaleDateString());

      setComplainType(3);
    } else if (obj.type === "Advertisment") {
      newData = advertismentComplaintList.filter((data) => {
        return data.advertisementReportId === obj.id;
      })[0];
      setDate(new Date(newData.postReportedDate).toLocaleDateString());

      setComplainType(4);
    }

    setComplain(newData.description);
    setCategory(typeList[newData.reportCategory]);
    setPath("/admin1/report" + obj.type + "/" + obj.id);
  };

  const getUserData = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/complaintreview/getusercomplaints/", config)
      .then((response) => {
        setTotal(response.data.total);
        setSolveCount(response.data.solveCount);
        setUnSolveCount(response.data.unSolveCount);
        setUserComplaintList(response.data.userComplaintList);
      });
  };

  const getPostData = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/complaintreview/getpostcomplaints/", config)
      .then((response) => {
        setTotal(response.data.total);
        setSolveCount(response.data.solveCount);
        setUnSolveCount(response.data.unSolveCount);
        setPostComplaintList(response.data.postComplaintList);
      });
  };

  const getCommentData = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/complaintreview/getcommentcomplaints/", config)
      .then((response) => {
        setTotal(response.data.total);
        setSolveCount(response.data.solveCount);
        setUnSolveCount(response.data.unSolveCount);
        setCommentComplaintList(response.data.commentComplaintList);
      });
  };

  const getAdvertismentData = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/complaintreview/getadvertismentcomplaints/", config)
      .then((response) => {
        setTotal(response.data.total);
        setSolveCount(response.data.solveCount);
        setUnSolveCount(response.data.unSolveCount);
        setAdvertismentComplaintList(response.data.advertisementComplaintList);
      });
  };

  useEffect(() => {
    $("#user-tab").click(function (e) {
      getUserData();
    });

    $("#post-tab").click(function (e) {
      getPostData();
    });

    $("#comment-tab").click(function (e) {
      getCommentData();
    });

    $("#advertisment-tab").click(function (e) {
      getAdvertismentData();
    });

    getUserData();
  }, []);

  return (
    <span className="reportUserAdmin1Page">
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

      <div class="card-body admin-page-title date-card">
        <div class="row">
          <h4>Complaints</h4>
        </div>
      </div>

      <div class="card-body date-card">
        <div class="row">
          <div class="col">
            <SummaryCard
              cardHeading="Total"
              numberValue={total.toLocaleString()}
            />
          </div>
          <div class="col">
            <SummaryCard
              cardHeading="Solve"
              numberValue={solveCount.toLocaleString()}
            />
          </div>
          <div class="col">
            <SummaryCard
              cardHeading="Have to check"
              numberValue={unSolveCount.toLocaleString()}
            />
          </div>
        </div>
      </div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link settings-nav-link active"
            id="user-tab"
            data-bs-toggle="tab"
            data-bs-target="#user-tab-pane"
            type="button"
            role="tab"
            aria-controls="user-tab-pane"
            aria-selected="true"
          >
            User
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link settings-nav-link"
            id="post-tab"
            data-bs-toggle="tab"
            data-bs-target="#post-tab-pane"
            type="button"
            role="tab"
            aria-controls="post-tab-pane"
            aria-selected="false"
          >
            Post
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link settings-nav-link"
            id="comment-tab"
            data-bs-toggle="tab"
            data-bs-target="#comment-tab-pane"
            type="button"
            role="tab"
            aria-controls="comment-tab-pane"
            aria-selected="false"
          >
            Comment
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link settings-nav-link"
            id="advertisment-tab"
            data-bs-toggle="tab"
            data-bs-target="#advertisment-tab-pane"
            type="button"
            role="tab"
            aria-controls="advertisment-tab-pane"
            aria-selected="false"
          >
            Advertisment
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane complain-tab fade show active"
          id="user-tab-pane"
          role="tabpanel"
          aria-labelledby="user-tab"
          tabindex="0"
        >
          <div class="row mx-3 pt-4 pb-4">
            <div className="tableSection">
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {userComplaintList.map((data, i) => (
                    <tr key={data.userReportedId}>
                      <td className="idStyle">{i + 1}</td>
                      <td>
                        {new Date(data.userReportedDate).toLocaleDateString()}
                      </td>
                      <td>
                        <p className="userComplaintDescription">
                          {data.description}
                        </p>
                      </td>
                      <td>{typeList[data.reportCategory]}</td>
                      <td>
                        <a
                          onClick={() =>
                            handleClick({
                              id: data.userReportedId,
                              type: "User",
                            })
                          }
                          href="#"
                          class="btn btn-primary d-grid mb-2 openComplaintDialog"
                          data-bs-toggle="modal"
                          data-bs-target="#complainModal"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          class="tab-pane complain-tab fade"
          id="post-tab-pane"
          role="tabpanel"
          aria-labelledby="post-tab"
          tabindex="0"
        >
          <div class="row mx-3 pt-4 pb-4">
            <div className="tableSection">
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {postComplaintList.map((data, i) => (
                    <tr key={data.postReportId}>
                      <td className="idStyle">{i + 1}</td>
                      <td>
                        {new Date(data.postReportedDate).toLocaleDateString()}
                      </td>
                      <td>
                        <p className="userComplaintDescription">
                          {data.description}
                        </p>
                      </td>
                      <td>{typeList[data.reportCategory]}</td>
                      <td>
                        <a
                          onClick={() =>
                            handleClick({
                              id: data.postReportId,
                              type: "Post",
                            })
                          }
                          href="#"
                          class="btn btn-primary d-grid mb-2 openComplaintDialog"
                          data-bs-toggle="modal"
                          data-bs-target="#complainModal"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          class="tab-pane complain-tab fade"
          id="comment-tab-pane"
          role="tabpanel"
          aria-labelledby="comment-tab"
          tabindex="0"
        >
          <div class="row mx-3 pt-4 pb-4">
            <div className="tableSection">
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {commentComplaintList.map((data, i) => (
                    <tr key={data.commentReportId}>
                      <td className="idStyle">{i + 1}</td>
                      <td>
                        {new Date(
                          data.commentReportedDate
                        ).toLocaleDateString()}
                      </td>
                      <td>
                        <p className="userComplaintDescription">
                          {data.description}
                        </p>
                      </td>
                      <td>{typeList[data.reportCategory]}</td>
                      <td>
                        <a
                          onClick={() =>
                            handleClick({
                              id: data.commentReportId,
                              type: "Comment",
                            })
                          }
                          href="#"
                          class="btn btn-primary d-grid mb-2 openComplaintDialog"
                          data-bs-toggle="modal"
                          data-bs-target="#complainModal"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          class="tab-pane complain-tab fade"
          id="advertisment-tab-pane"
          role="tabpanel"
          aria-labelledby="advertisment-tab"
          tabindex="0"
        >
          <div class="row mx-3 pt-4 pb-4">
            <div className="tableSection">
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {advertismentComplaintList.map((data, i) => (
                    <tr key={data.advertisementReportId}>
                      <td className="idStyle">{i + 1}</td>
                      <td>
                        {new Date(data.postReportedDate).toLocaleDateString()}
                      </td>
                      <td>
                        <p className="userComplaintDescription">
                          {data.description}
                        </p>
                      </td>
                      <td>{typeList[data.reportCategory]}</td>
                      <td>
                        <a
                          onClick={() =>
                            handleClick({
                              id: data.advertisementReportId,
                              type: "Advertisment",
                            })
                          }
                          href="#"
                          class="btn btn-primary d-grid mb-2 openComplaintDialog"
                          data-bs-toggle="modal"
                          data-bs-target="#complainModal"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* complain view modal */}
      <div
        class="modal fade"
        id="complainModal"
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
                id="btn-close-form"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body p-4">
              <div class="card border shadow-none border-bottom p-4">
                <div class="row">
                  <div class="col-6 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Date </h6>
                    <p class="mb-1 fs-8">{date}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Category </h6>
                    <p class="mb-1 fs-8">{category}</p>
                  </div>
                  <div class="col-12 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Description</h6>
                    <p class="mb-1 fs-8">{complain}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-start p-4 pt-2">
              <Link className="btn btn-primary" to={path} target="_blank">
                {" "}
                View{" "}
              </Link>
              <button
                type="button"
                class="btn btn-danger"
                onClick={setResolveComplaint}
              >
                Resolve
              </button>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default ReportUserAdmin1Page;
