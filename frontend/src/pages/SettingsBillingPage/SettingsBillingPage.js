import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import $ from "jquery";
import StripeCheckout from "react-stripe-checkout";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";

import AuthenticationField from "../../components/AuthenticationField/AuthenticationField";
import {
  initialBillingAddressValues,
  billingAddressValidation,
} from "./Validation";
import {
  API_URL,
  PUBLIC_KEY,
  SUBSCRIPTION_PRICE,
  ETHEREUM_ADDRESS,
} from "../../constants/globalConstants";
import { updateUserState } from "../../actions/userActions";

import "../SettingsBasicPage/settings.css";
import "react-toastify/dist/ReactToastify.css";

function SettingsBillingPage() {
  const [billingAddressList, setBillingAddressList] = useState([]);
  const [premiumStatus, setPremiumStatus] = useState(false);
  const [premiumEndDate, setPremiumEndDate] = useState(new Date());

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const dispatch = useDispatch();

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
        var origAmount = parseFloat(SUBSCRIPTION_PRICE);
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

  const getBillingAddresses = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/settings/getbillingaddresses/" + userId, config)
      .then((response) => {
        // console.log(response.data);
        setBillingAddressList(response.data);
      });
  };

  const getPremiumPackageDetails = async () => {
    const config = {
      headers: {
        authorization: accessToken,
        userId: userId,
      },
    };

    await axios
      .get(API_URL + "/settings/getpremiumpackagestatus/", config)
      .then((response) => {
        // console.log(response.data);
        setPremiumStatus(response.data.premiumUser);
        setPremiumEndDate(new Date(response.data.premiumPackageEndDate));
      });
  };

  useEffect(() => {
    getBillingAddresses();
    getPremiumPackageDetails();
  }, []);

  const registerBillingAddress = async (data, { resetForm }) => {
    const inputData = {
      userId: userId,
      country: data.country,
      addressLine1: data.address1,
      addressLine2: data.address2,
      city: data.city,
      state: data.state,
      zipCode: data.zip,
      isDefault: data.default,
    };
    // console.log(inputData);

    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .post(API_URL + "/settings/registerbillingaddress/", inputData, config)
      .then((response) => {
        if (response.data.isDefault) {
          setBillingAddressList((current) => [response.data, ...current]);
        } else {
          // let newList = billingAddressList.map((x) => x);
          // newList = newList.push(response.data);
          // console.log(newList);
          // setBillingAddressList(newList);

          setBillingAddressList((current) => [...current, response.data]);
        }
        // console.log(response.data);
        // forceUpdate();
        $("#btn-close-form").click();
      });

    resetForm();
    // window.location.reload(false);
  };

  const makePayment = async (token) => {
    const inputData = { userId, premiumStatus, premiumEndDate, token };

    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .post(API_URL + "/settings/payment/", inputData, config)
      .then((response) => {
        // console.log(response.data);
        // getPremiumPackageDetails();
        dispatch(updateUserState(userId));
        setPremiumStatus(response.data.premiumUser);
        setPremiumEndDate(new Date(response.data.premiumPackageEndDate));
      });
  };

  const makeCryptoPayment = async (token) => {
    const inputData = { userId, premiumStatus, premiumEndDate };

    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .post(API_URL + "/settings/cryptopaymentsubscription/", inputData, config)
      .then((response) => {
        // console.log(response.data);
        // getPremiumPackageDetails();
        dispatch(updateUserState(userId));
        setPremiumStatus(response.data.premiumUser);
        setPremiumEndDate(new Date(response.data.premiumPackageEndDate));
      });
  };

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
      {/* row  --> */}
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col-12 mb-6">
              {/* card  --> */}
              <div class="card">
                {/* card header  --> */}
                <div class="card-header p-4 bg-white">
                  <h4 class="mb-0">Current Plan Overview</h4>
                </div>
                {/* card body  --> */}
                <div class="card-body">
                  {/* row  --> */}
                  <div class="row">
                    <div class="col-xl-8 col-lg-6 col-md-12 col-12">
                      <div class="mb-2">
                        {/* content  --> */}
                        <p class="text-muted mb-0">Current Plan</p>
                        {/* <h3 class="mt-2 mb-3 fw-bold">Starter - Jan 2021 </h3> */}
                        <h3 class="mt-2 mb-3 fw-bold">
                          {premiumStatus ? "Premium" : "Starter"}
                        </h3>
                        {premiumStatus && (
                          <p>
                            From Pemium Package You Will Get Unlimited Access to
                            The System Features
                          </p>
                        )}
                        {!premiumStatus && (
                          <p>
                            From This Starter Package You Get Access for the
                            Common Functionalities of Our System
                          </p>
                        )}

                        <p>
                          <i
                            data-feather="info"
                            class="me-2 text-muted
                                icon-xs"
                          ></i>
                          {premiumStatus && "Next Payment: on "}
                          {premiumStatus && (
                            <span class="text-primary">$5.00 USD</span>
                          )}
                          {premiumStatus && (
                            <span class="text-dark fw-bold">
                              {" "}
                              {premiumEndDate.toLocaleDateString("en-CA")}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                    {/* col  --> */}
                    <div class="col-xl-4 col-lg-6 col-md-12 col-12">
                      {/* content  --> */}
                      <div>
                        <small class="text-muted">Monthly Payment</small>
                        <h1 class="fw-bold text-primary">$5 USD</h1>
                        <p
                          class="mb-3 text-muted
                               d-block"
                        >
                          Pay and Upgrade Your Membership from Here
                        </p>

                        <a
                          href="#"
                          class="btn btn-next d-grid mb-2"
                          data-bs-toggle="modal"
                          data-bs-target="#billingPayments"
                          style={{
                            background: "#33ff94",
                            border: "#33ff94",
                            color: "black",
                          }}
                        >
                          {premiumStatus
                            ? "Extend Subscription"
                            : "Subscribe Now"}
                        </a>

                        {/* <StripeCheckout
                          stripeKey={PUBLIC_KEY}
                          token={makePayment}
                          name="Buy React"
                          amount={5 * 100}
                        >
                          <a href="#" class="btn btn-dark d-grid mb-2">
                            {premiumStatus
                              ? "Extend Subscription"
                              : "Subscribe Now"}
                          </a>
                        </StripeCheckout> */}
                        {/* {premiumStatus && (
                          <a href="#" class="btn btn-outline-white d-grid">
                            Cancel Subscription
                          </a>
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              {/* card  --> */}
              <div class="card">
                {/* card header  --> */}
                <div class="card-header p-4 bg-white">
                  <h4 class="mb-0">Billing address</h4>
                </div>
                {/* card body  --> */}
                <div class="card-body">
                  <div class="row align-items-center">
                    {billingAddressList.map((item, index) => (
                      <div
                        key={item.billingAddressId}
                        style={{ display: "contents" }}
                      >
                        <div class="col-lg-6 col-md-12 col-12 mb-4 mb-lg-0">
                          <div class="mb-3 mb-lg-0">
                            <div class="form-check ">
                              {index === 0 ? (
                                <input
                                  type="radio"
                                  id="shippingBillingAddress"
                                  name="customRadio"
                                  class="form-check-input"
                                  checked
                                />
                              ) : (
                                <input
                                  type="radio"
                                  id="shippingBillingAddress"
                                  name="customRadio"
                                  class="form-check-input"
                                />
                              )}

                              <label
                                class="form-check-label"
                                for="shippingBillingAddress"
                              >
                                <span
                                  class="d-block mb-3 text-dark
                                 fw-bold"
                                >
                                  Billing Address
                                </span>
                                <span
                                  class="d-block text-dark
                                 fw-medium fs-4"
                                >
                                  {item.addressLine1}, {item.addressLine2}
                                </span>
                                <span class="d-block mb-4">
                                  {item.city}
                                  <br />
                                  {item.state}, {item.country}, {item.zipCode}
                                </span>

                                <a
                                  href="#"
                                  class="me-2 text-muted
                                 text-primary-hover"
                                >
                                  Edit
                                </a>
                                <a
                                  href="#"
                                  class="me-2 text-muted
                                 text-primary-hover"
                                >
                                  Delete
                                </a>
                                <a
                                  href="#"
                                  class="me-2 text-muted
                                 text-primary-hover"
                                >
                                  Remove as Default Billing
                                </a>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-lg-6 col-md-12 col-12 d-flex
                         justify-content-lg-end"
                        >
                          <div class="mb-2">
                            <p class="mb-1">E-mail: {item.email}</p>
                            <p>Phone: {item.phone}</p>
                          </div>
                        </div>
                        <div class="col-12">
                          <hr class="my-6" />
                        </div>
                      </div>
                    ))}

                    <div class="col-12">
                      {/* button  --> */}
                      <a
                        href="#"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#billingAddressModal"
                      >
                        Add New Address
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                      name="Buy React"
                      amount={5 * 100}
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
                Done
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Billing Payments */}
      <div
        class="modal fade"
        id="billingPayments"
        tabindex="-1"
        aria-labelledby="billingPaymentsLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header p-5">
              <div>
                <h4 class="mb-1" id="billingPaymentsLabel">
                  Billing Address123
                </h4>
                <p class="mb-0">
                  Please provide the billing address with the credit card you ve
                  provided.
                </p>
              </div>

              <button
                type="button"
                class="btn-close"
                id="btn-close-form"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body p-5">
              dddd
              <div class="col-12">
                <button type="submit" class="btn btn-primary d-grid">
                  Okay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsBillingPage;
