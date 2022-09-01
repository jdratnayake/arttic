import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import $ from "jquery";
import StripeCheckout from "react-stripe-checkout";

import AuthenticationField from "../../components/AuthenticationField/AuthenticationField";
import {
  initialBillingAddressValues,
  billingAddressValidation,
} from "./Validation";
import { API_URL, PUBLIC_KEY } from "../../constants/globalConstants";

import "../SettingsBasicPage/settings.css";

function SettingsBillingPage() {
  const [billingAddressList, setBillingAddressList] = useState([]);
  const [premiumStatus, setPremiumStatus] = useState(false);
  const [premiumEndDate, setPremiumEndDate] = useState(new Date());

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

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
        setPremiumStatus(response.data.premiumUser);
        setPremiumEndDate(new Date(response.data.premiumPackageEndDate));
      });
  };

  return (
    <div className="settingsPage">
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
                        <p>
                          Unlimited access to essential tools for design,
                          bootstrap themes, illustrator and icons.
                        </p>
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
                        <a
                          href="#"
                          class="mb-3 text-muted
                              text-primary-hover d-block"
                        >
                          Learn more about our membership policy
                        </a>

                        <StripeCheckout
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
                        </StripeCheckout>
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
        id="billingAddressModal"
        tabindex="-1"
        aria-labelledby="billingAddressModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header p-5">
              <div>
                <h4 class="mb-1" id="billingAddressModalLabel">
                  Billing Address
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
              <Formik
                initialValues={initialBillingAddressValues}
                validationSchema={billingAddressValidation}
                onSubmit={registerBillingAddress}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <AuthenticationField
                      label="Country"
                      type="text"
                      id="country"
                      name="country"
                      placeholder="Enter Country"
                    />

                    <AuthenticationField
                      label="Address Line 1"
                      type="text"
                      id="address1"
                      name="address1"
                      placeholder="Enter Address Line 1"
                    />

                    <AuthenticationField
                      label="Address Line 2"
                      type="text"
                      id="address2"
                      name="address2"
                      placeholder="Enter Address Line 2"
                    />

                    <AuthenticationField
                      label="City"
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Enter City"
                    />

                    <AuthenticationField
                      label="State"
                      type="text"
                      id="state"
                      name="state"
                      placeholder="Enter State"
                    />

                    <AuthenticationField
                      label="Zip/Postal Code"
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="Enter Zip/Postal Code"
                    />

                    <div class="col-12 mb-3">
                      <div class="form-check custom-checkbox">
                        <Field
                          type="checkbox"
                          className="form-check-input"
                          id="default"
                          name="default"
                        />
                        <label class="form-check-label" for="default">
                          Make this my default payment method.
                        </label>
                      </div>
                    </div>

                    <div class="col-12">
                      <button
                        type="submit"
                        class="btn btn-primary d-grid"
                        disabled={isSubmitting}
                      >
                        Save Address
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
  );
}

export default SettingsBillingPage;
