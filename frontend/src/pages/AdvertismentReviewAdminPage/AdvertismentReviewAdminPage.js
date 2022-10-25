import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import $ from "jquery";

import SummaryCard from "../../components/SummaryCard/SummaryCard";
import { API_URL, ADVERTISMENT_PIC_URL } from "../../constants/globalConstants";

import "./AdvertismentReviewAdminPage.css";

function AdvertismentReviewAdminPage() {
  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const [advertismentTable, setAdvertismentTable] = useState([]);
  const [request, setRequest] = useState(0);
  const [active, setActive] = useState(0);
  const [old, setOld] = useState(0);

  const [advertismentId, setAdvertismentId] = useState(0);
  const [advertismentOwnerId, setAdvertismentOwnerId] = useState(0);
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [date, setDate] = useState("");
  const [stdate, setstDate] = useState("");
  const [endate, setenDate] = useState("");
  const [price, setprice] = useState(0);
  const [adimage, setadimage] = useState("");

  const nftTypeList = [
    "",
    "Anime",
    "Artwork",
    "Music and Media",
    "Gaming",
    "Memes",
  ];

  const handleClick = (
    id,
    imageLink,
    des,
    cDate,
    sDate,
    edate,
    cate,
    pri,
    oId
  ) => {
    setAdvertismentId(id);
    setadimage(ADVERTISMENT_PIC_URL + imageLink);
    setdescription(des);
    setDate(new Date(cDate).toLocaleDateString());
    setstDate(new Date(sDate).toLocaleDateString());
    setenDate(new Date(edate).toLocaleDateString());
    setcategory(nftTypeList[cate]);
    setprice(parseInt(pri));
    setAdvertismentOwnerId(oId);
  };

  const getData = async () => {
    const token = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/advertismentreview/getadvertisments/", token)
      .then((res) => {
        setAdvertismentTable(res.data.advertisementList);
        setRequest(res.data.requestAdvertisementCount);
        setActive(res.data.activeAdvertisementCount);
        setOld(res.data.oldAdvertisementCount);
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

  const verifyAdvertisement = async () => {
    console.log(advertismentId);

    const token = {
      headers: {
        authorization: accessToken,
        advertismentid: advertismentId,
      },
    };

    await axios
      .get(API_URL + "/advertismentreview/verifyadvertisement/", token)
      .then((res) => {
        console.log(res.data);
        const newList = advertismentTable.map((data) => {
          // 👇️ if id equals 2, update country property
          if (data.advertisementId === advertismentId) {
            return { ...data, verifyStatus: true };
          }

          // 👇️ otherwise return object as is
          return data;
        });
        setAdvertismentTable(newList);
        setRequest(request - 1);
        sendNotification(
          advertismentOwnerId,
          2,
          "Successfully Accepted Your New Advertisment"
        );
      });

    $("#btn-close-form").click();
  };

  return (
    <span className="AdvertismentReviewAdminPage">
      <div class="card-body admin-page-title date-card">
        <div class="row">
          <h4>Advertisments</h4>
        </div>
      </div>

      <div class="card-body date-card">
        <div class="row">
          <div class="col">
            <SummaryCard
              cardHeading="Requests"
              numberValue={request.toLocaleString()}
            />
          </div>
          <div class="col">
            <SummaryCard
              cardHeading="Active"
              numberValue={active.toLocaleString()}
            />
          </div>
          <div class="col">
            <SummaryCard cardHeading="Old" numberValue={old.toLocaleString()} />
          </div>
        </div>
      </div>

      <div class="card-body">
        <div class="row">
          <div className="tableSection">
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
                  Requests
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
                  Active
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
                  Old
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
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Img</th>
                        <th>Description</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {advertismentTable.map(
                        (ad) =>
                          ad.verifyStatus == false &&
                          new Date(ad.endDate) >= new Date() && (
                            <tr key={ad.advertisementId}>
                              <td className="idStyle">{ad.advertisementId}</td>
                              <td>
                                {new Date(ad.createdDate).toLocaleDateString()}
                              </td>
                              <td>
                                <img
                                  src={ADVERTISMENT_PIC_URL + ad.contentLink}
                                />
                              </td>
                              <td>
                                <p className="userComplaintDescription">
                                  {ad.description}
                                </p>
                              </td>

                              <td>
                                <a
                                  onClick={() =>
                                    handleClick(
                                      ad.advertisementId,
                                      ad.contentLink,
                                      ad.description,
                                      ad.createdDate,
                                      ad.startDate,
                                      ad.endDate,
                                      ad.category,
                                      ad.price,
                                      ad.creatorId
                                    )
                                  }
                                  href="#"
                                  class="btn btn-secondary"
                                  data-bs-toggle="modal"
                                  data-bs-target="#ViewRequestAdModal"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                          )
                      )}
                    </tbody>
                  </table>
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
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Img</th>
                        <th>Description</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {advertismentTable.map(
                        (ad) =>
                          ad.verifyStatus == true &&
                          ad.paymentStatus == true &&
                          new Date(ad.endDate) >= new Date() && (
                            <tr key={ad.advertisementId}>
                              <td className="idStyle">{ad.advertisementId}</td>
                              <td>
                                {new Date(ad.createdDate).toLocaleDateString()}
                              </td>
                              <td>
                                <img
                                  src={ADVERTISMENT_PIC_URL + ad.contentLink}
                                />
                              </td>
                              <td>
                                <p className="userComplaintDescription">
                                  {ad.description}
                                </p>
                              </td>

                              <td>
                                <a
                                  onClick={() =>
                                    handleClick(
                                      ad.advertisementId,
                                      ad.contentLink,
                                      ad.description,
                                      ad.createdDate,
                                      ad.startDate,
                                      ad.endDate,
                                      ad.category,
                                      ad.price,
                                      ad.creatorId
                                    )
                                  }
                                  href="#"
                                  class="btn btn-secondary"
                                  data-bs-toggle="modal"
                                  data-bs-target="#ViewActiveAdModal"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                          )
                      )}
                    </tbody>
                  </table>
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
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Img</th>
                        <th>Description</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {advertismentTable.map(
                        (ad, i) =>
                          new Date(ad.endDate) < new Date() && (
                            <tr key={ad.advertisementId}>
                              <td className="idStyle">{ad.advertisementId}</td>
                              <td>
                                {new Date(ad.createdDate).toLocaleDateString()}
                              </td>
                              <td>
                                <img
                                  src={ADVERTISMENT_PIC_URL + ad.contentLink}
                                />
                              </td>
                              <td>
                                <p className="userComplaintDescription">
                                  {ad.description}
                                </p>
                              </td>

                              <td>
                                <a
                                  onClick={() =>
                                    handleClick(
                                      ad.advertisementId,
                                      ad.contentLink,
                                      ad.description,
                                      ad.createdDate,
                                      ad.startDate,
                                      ad.endDate,
                                      ad.category,
                                      ad.price,
                                      ad.creatorId
                                    )
                                  }
                                  href="#"
                                  class="btn btn-secondary"
                                  data-bs-toggle="modal"
                                  data-bs-target="#ViewActiveAdModal"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                          )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* update plan modal request ad*/}
      <div
        class="modal fade"
        id="ViewRequestAdModal"
        tabindex="-1"
        aria-labelledby="planModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header p-3">
              <div>
                <h4 class="mb-0" id="planModalLabel">
                  Advertisment Request
                </h4>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body p-4">
              <div class="card border shadow-none border-bottom p-4">
                <div class="row">
                  <div class="col-12 mb-3">
                    <img src={adimage} className="modal-image" />
                  </div>
                  <div class="col-12 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Description</h6>
                    <p class="mb-1 fs-8">{description}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Created Date</h6>
                    <p class="mb-1 fs-8">{date}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Duration</h6>
                    <p class="mb-1 fs-8">
                      {stdate} - {endate}
                    </p>
                  </div>{" "}
                  <div class="col-6 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Category</h6>
                    <p class="mb-1 fs-8">{category}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Price</h6>
                    <p class="mb-1 fs-8">$ {price}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-start p-4 pt-2">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#upgradeAccount"
              >
                Verify
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
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
                Verify Advertisement
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              This procedure is irreversible. Do you want to Verify?
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
                onClick={verifyAdvertisement}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* update plan modal active ad*/}
      <div
        class="modal fade"
        id="ViewActiveAdModal"
        tabindex="-1"
        aria-labelledby="planModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header p-3">
              <div>
                <h4 class="mb-0" id="planModalLabel">
                  Advertisment Details
                </h4>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body p-4">
              <div class="card border shadow-none border-bottom p-4">
                <div class="row">
                  <div class="col-12 mb-3">
                    <img src={adimage} className="modal-image" />
                  </div>
                  <div class="col-12 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Description</h6>
                    <p class="mb-1 fs-8">{description}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Created Date</h6>
                    <p class="mb-1 fs-8">{date}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Duration</h6>
                    <p class="mb-1 fs-8">
                      {stdate} - {endate}
                    </p>
                  </div>{" "}
                  <div class="col-6 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Category</h6>
                    <p class="mb-1 fs-8">{category}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Price</h6>
                    <p class="mb-1 fs-8">$ {price}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-start p-4 pt-2">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Okay
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default AdvertismentReviewAdminPage;
