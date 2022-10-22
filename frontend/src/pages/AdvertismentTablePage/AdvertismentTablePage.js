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
import StripeCheckout from "react-stripe-checkout";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";

import {
  API_URL,
  PUBLIC_KEY,
  SUBSCRIPTION_PRICE,
  ETHEREUM_ADDRESS,
  ADVERTISMENT_PIC_URL,
} from "../../constants/globalConstants";

import "react-toastify/dist/ReactToastify.css";
import "./AdvertismentTablePage.css";

function AdvertismentTablePage() {
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const [advertismentTable, setAdvertismentTable] = useState([]);

  const [advertismentId, setAdvertismentId] = useState(0);
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [date, setDate] = useState("");
  const [stdate, setstDate] = useState("");
  const [endate, setenDate] = useState("");

  const [price, setprice] = useState(0);
  const [adimage, setadimage] = useState("");

  // Crypto payment - START
  const startPayment = async ({ ether, addr }) => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);

      const tx = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether.toString()),
      });

      makeCryptoPayment();

      console.log({ ether, addr });
      console.log("tx", tx);
      // setTxs([tx]);
    } catch (err) {
      // console.log(err.message);

      toast.error("Insufficient Funds", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // setError(err.message);
    }
  };

  const payByCrypto = async () => {
    let etherAmount;

    await $.getJSON(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum",
      function (data) {
        var origAmount = parseFloat(price);
        var exchangeRate = parseInt(data[0].current_price);

        etherAmount = parseFloat(origAmount / exchangeRate);
      }
    );

    await startPayment({
      ether: etherAmount,
      addr: ETHEREUM_ADDRESS,
    });
  };
  // Crypto payment - END

  const nftTypeList = [
    "",
    "Anime",
    "Artwork",
    "Music and Media",
    "Gaming",
    "Memes",
  ];

  const handleClick = (id, imageLink, des, cDate, sDate, edate, cate, pri) => {
    setAdvertismentId(id);
    setadimage(ADVERTISMENT_PIC_URL + imageLink);
    setdescription(des);
    setDate(new Date(cDate).toLocaleDateString());
    setstDate(new Date(sDate).toLocaleDateString());
    setenDate(new Date(edate).toLocaleDateString());
    setcategory(nftTypeList[cate]);
    setprice(parseInt(pri));
    // console.log(parseInt(pri));
    // console.log(typeof parseInt(pri));
  };

  // get advertisments ----------------------------------------------------
  const getAdvertisments = async () => {
    const token = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/advertisment/getadvertismenttable/" + userId, token)
      .then((res) => {
        setAdvertismentTable(res.data);
      });
  };
  // end get advertisments ------------------------------------------------

  useEffect(() => {
    getAdvertisments();
  }, []);

  const deleteAdvertisement = async () => {
    console.log(advertismentId);

    const token = {
      headers: {
        authorization: accessToken,
        advertismentid: advertismentId,
      },
    };

    toast.success("Advertisement Deleted Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    await axios
      .get(API_URL + "/advertisment/deleteadvertisment/", token)
      .then((res) => {
        const newList = advertismentTable.filter((data) => {
          return data.advertisementId !== advertismentId;
        });

        setAdvertismentTable(newList);
      });

    $("#btn-close-form").click();
  };

  const makePayment = async (token) => {
    const inputData = { userId, advertisementId: advertismentId, price, token };

    // console.log(inputData);

    // return 0;

    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .post(API_URL + "/advertisment/payment/", inputData, config)
      .then((response) => {
        console.log(response.data);
        const newList = advertismentTable.map((data) => {
          // 👇️ if id equals 2, update country property
          if (data.advertisementId === advertismentId) {
            return { ...data, paymentStatus: true };
          }

          // 👇️ otherwise return object as is
          return data;
        });
        setAdvertismentTable(newList);

        // getPremiumPackageDetails();
        // setPremiumStatus(response.data.premiumUser);
        // setPremiumEndDate(new Date(response.data.premiumPackageEndDate));
      });
  };

  const makeCryptoPayment = async () => {
    const inputData = { userId, advertisementId: advertismentId, price };

    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .post(API_URL + "/advertisment/cryptopayment/", inputData, config)
      .then((response) => {
        // console.log(response.data);
        const newList = advertismentTable.map((data) => {
          // 👇️ if id equals 2, update country property
          if (data.advertisementId === advertismentId) {
            return { ...data, paymentStatus: true };
          }

          // 👇️ otherwise return object as is
          return data;
        });
        setAdvertismentTable(newList);
        // getPremiumPackageDetails();
        // setPremiumStatus(response.data.premiumUser);
        // setPremiumEndDate(new Date(response.data.premiumPackageEndDate));
      });
  };

  return (
    <span className="AdvertismentTablePage">
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

      <div class="col-md-12 col-xs-12 card">
        <div class=" mb-6">
          <h4 class="mb-1">Advertisments</h4>
        </div>

        <div className="row d-flex justify-content-end">
          <div class="col-md-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/Advertisment/form");
              }}
            >
              <strong>New Advertisment</strong>
            </button>
          </div>
        </div>

        <br />

        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link settings-nav-link active"
              id="pending-tab"
              data-bs-toggle="tab"
              data-bs-target="#pending-tab-pane"
              type="button"
              role="tab"
              aria-controls="pending-tab-pane"
              aria-selected="true"
            >
              Pending
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link settings-nav-link "
              id="accepted-tab"
              data-bs-toggle="tab"
              data-bs-target="#accepted-tab-pane"
              type="button"
              role="tab"
              aria-controls="accepted-tab-pane"
              aria-selected="true"
            >
              Accepted
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link settings-nav-link "
              id="active-tab"
              data-bs-toggle="tab"
              data-bs-target="#active-tab-pane"
              type="button"
              role="tab"
              aria-controls="active-tab-pane"
              aria-selected="true"
            >
              Active
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link settings-nav-link"
              id="old-tab"
              data-bs-toggle="tab"
              data-bs-target="#old-tab-pane"
              type="button"
              role="tab"
              aria-controls="old-tab-pane"
              aria-selected="false"
            >
              Old
            </button>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane complain-tab fade show active"
            id="pending-tab-pane"
            role="tabpanel"
            aria-labelledby="pending-tab"
            tabindex="0"
          >
            <div class="row mx-3 pt-4 pb-4">
              <div className="tableSection">
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
                                    ad.price
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
          </div>
          <div
            class="tab-pane complain-tab fade"
            id="accepted-tab-pane"
            role="tabpanel"
            aria-labelledby="accepted-tab"
            tabindex="0"
          >
            <div class="row mx-3 pt-4 pb-4">
              <div className="tableSection">
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
                        ad.paymentStatus == false &&
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
                                    ad.price
                                  )
                                }
                                href="#"
                                class="btn btn-secondary"
                                data-bs-toggle="modal"
                                data-bs-target="#ViewPayAdModal"
                              >
                                Pay
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
          <div
            class="tab-pane complain-tab fade"
            id="active-tab-pane"
            role="tabpanel"
            aria-labelledby="active-tab"
            tabindex="0"
          >
            <div class="row mx-3 pt-4 pb-4">
              <div className="tableSection">
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
                                    ad.price
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
          </div>
          <div
            class="tab-pane complain-tab fade"
            id="old-tab-pane"
            role="tabpanel"
            aria-labelledby="old-tab"
            tabindex="0"
          >
            <div class="row mx-3 pt-4 pb-4">
              <div className="tableSection">
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
                                    ad.price
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
          </div>
        </div>
      </div>

      {/* Delete Model */}
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
                Delete Advertisement
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Do you want to Delete?</div>
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
                onClick={deleteAdvertisement}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* update plan modal pending and old ad*/}
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
                data-bs-toggle="modal"
                data-bs-target="#upgradeAccount"
              >
                Delete
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
      {/* update plan modal pending and old ad*/}

      {/* update plan modal pay ad*/}
      <div
        class="modal fade"
        id="ViewPayAdModal"
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
                data-bs-toggle="modal"
                data-bs-target="#billingPayments"
              >
                Pay
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
      {/* update plan modal pay ad*/}

      {/* Billing Address Modal --> */}
      <div
        class="modal fade"
        id="billingPayments"
        tabindex="-1"
        aria-labelledby="billingPaymentsLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header p-3">
              <div>
                <h4 class="mb-0" id="planModalLabel">
                  Payments
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
            <div class="modal-body p-4 payment">
              <div class="card border shadow-none border-bottom p-4">
                <div class="row">
                  <div class="col-4 mb-3 payment-chioce">
                    <h5 class="text-uppercase ls-2 payment-caption">
                      Card Payment
                    </h5>
                    <StripeCheckout
                      stripeKey={PUBLIC_KEY}
                      token={makePayment}
                      name="Pay Advertisment"
                      amount={price * 100}
                    >
                      <button class="btn btn-primary">
                        Pay with Credit/Debit Card
                      </button>
                    </StripeCheckout>
                  </div>
                </div>
              </div>
              <div class="card border shadow-none border-bottom p-4">
                <div class="row">
                  <div class="col-4 mb-3 payment-chioce">
                    <h5 class="text-uppercase  ls-2 payment-caption">
                      Crypto Payment
                    </h5>

                    <button class="btn btn-primary" onClick={payByCrypto}>
                      Pay with Meta Mask
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-end p-4 pt-2">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default AdvertismentTablePage;
