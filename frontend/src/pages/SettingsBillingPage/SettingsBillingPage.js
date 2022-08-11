import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import AuthenticationField from "../../components/AuthenticationField/AuthenticationField";
import {
  initialBillingAddressValues,
  billingAddressValidation,
} from "./Validation";
import { registerBillingAddress } from "./Helper";

import "../SettingsBasicPage/settings.css";

function SettingsBillingPage() {
  const [billingAddressList, setBillingAddressList] = useState([]);

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const getBillingAddresses = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    // await axios
    //   .get(API_URL + "/settings/getPurchaseHistory/" + userId, config)
    //   .then((response) => {
    //     // setPurchaseData(response.data);
    //     console.log(response.data);
    //   });
  };

  useEffect(() => {
    getBillingAddresses();
  }, []);

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
                        <h3 class="mt-2 mb-3 fw-bold">Starter - Jan 2021 </h3>
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
                          Next Payment: on{" "}
                          <span class="text-primary">$499.00 USD</span>
                          <span class="text-dark fw-bold"> Jan 1, 2022</span>
                        </p>
                      </div>
                    </div>
                    {/* col  --> */}
                    <div class="col-xl-4 col-lg-6 col-md-12 col-12">
                      {/* content  --> */}
                      <div>
                        <small class="text-muted">Yearly Payment</small>
                        <h1 class="fw-bold text-primary">$499 USD</h1>
                        <a
                          href="#"
                          class="mb-3 text-muted
                              text-primary-hover d-block"
                        >
                          Learn more about our membership policy
                        </a>
                        <a
                          href="#"
                          class="btn btn-dark d-grid mb-2"
                          data-bs-toggle="modal"
                          data-bs-target="#planModal"
                        >
                          Change Plan
                        </a>
                        <a href="#" class="btn btn-outline-white d-grid">
                          Cancel Subscription
                        </a>
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
                    <div class="col-lg-6 col-md-12 col-12 mb-4 mb-lg-0">
                      <div class="mb-3 mb-lg-0">
                        {/* radio  --> */}
                        <div class="form-check ">
                          <input
                            type="radio"
                            id="shippingBillingAddress"
                            name="customRadio"
                            class="form-check-input"
                            checked
                          />
                          <label
                            class="form-check-label"
                            for="shippingBillingAddress"
                          >
                            <span
                              class="d-block mb-3 text-dark
                                  fw-bold"
                            >
                              Shipping Billing Address
                            </span>
                            <span
                              class="d-block text-dark
                                  fw-medium fs-4"
                            >
                              Valarie Tarrant
                            </span>
                            <span class="d-block mb-4">
                              3757 Morgan Street Tallahassee, FL 32301
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
                      {/* text  --> */}
                      <div class="mb-2">
                        <p class="mb-1">
                          E-mail: <a href="#">valarietarrant@dashui.com</a>
                        </p>
                        <p>Phone: 321-654-0987</p>
                      </div>
                    </div>
                    <div class="col-12">
                      {/* hr  --> */}
                      <hr class="my-6" />
                    </div>
                    <div class="col-lg-6 col-md-12 col-12 mb-4 mb-lg-0">
                      {/* radio  --> */}
                      <div class="form-check ">
                        <input
                          type="radio"
                          id="customRadio2"
                          name="customRadio"
                          class="form-check-input"
                        />
                        <label class="form-check-label" for="customRadio2">
                          <span
                            class="d-block mb-3 text-dark
                                fw-bold"
                          >
                            Default Billing Address
                          </span>
                          <span
                            class="d-block text-dark fw-medium
                                fs-4"
                          >
                            Mildred Cantu
                          </span>
                          <span class="d-block mb-4">
                            3757 Morgan Street Tallahassee, FL 32301
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
                            Set as Default
                          </a>
                        </label>
                      </div>
                    </div>
                    <div
                      class="col-lg-6 col-md-12 col-12 d-flex
                          justify-content-lg-end"
                    >
                      {/* text  --> */}
                      <div class="mb-2">
                        <p class="mb-1">
                          E-mail: <a href="#">valarietarrant@dashui.com</a>
                        </p>
                        <p>Phone: 321-654-0987</p>
                      </div>
                    </div>
                    <div class="col-12">
                      {/* hr  --> */}
                      <hr class="mt-6 mb-4" />
                    </div>
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

      {/* update plan modal --> */}
      <div
        class="modal fade"
        id="planModal"
        tabindex="-1"
        aria-labelledby="planModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header p-3">
              <div>
                <h4 class="mb-0" id="planModalLabel">
                  Update Your Plan
                </h4>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body p-5">
              <h4 class="mb-1">Change your plan</h4>
              <p>You can choose from one of the available plans bellow.</p>
              <div class="card border shadow-none">
                <div class="card-body border-bottom">
                  <div
                    class="d-flex justify-content-between
                  align-items-center"
                  >
                    <div>
                      <div class="form-check ">
                        <input
                          type="radio"
                          id="customRadioStandard"
                          name="customRadio"
                          class="form-check-input"
                        />
                        <label
                          class="form-check-label form-label"
                          for="customRadioStandard"
                        >
                          <span class="d-block text-dark fw-bold">
                            Free
                            <span class="badge bg-success">Active Plan</span>
                          </span>
                          <span class="mb-0 small text-muted">Single Site</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <h4 class="fw-bold mb-0 text-dark">$0.00</h4>
                    </div>
                  </div>
                </div>
                <div class="card-body border-bottom">
                  <div
                    class="d-flex justify-content-between
                  align-items-center"
                  >
                    <div>
                      <div class="form-check ">
                        <input
                          type="radio"
                          id="customRadioMultiside"
                          name="customRadio"
                          class="form-check-input"
                        />
                        <label
                          class="form-check-label form-label"
                          for="customRadioMultiside"
                        >
                          <span class="d-block text-dark fw-bold">
                            Premimum
                          </span>
                          <span class="mb-0 small text-muted">
                            Unlimited sites
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <h4 class="fw-bold mb-0 text-dark">$149.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-start p-5">
              <button type="button" class="btn btn-primary">
                Save and Continue
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
