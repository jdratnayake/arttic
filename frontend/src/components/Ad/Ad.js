import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import $ from "jquery";
import "./Ad.css";

import {
  initialReportValues,
  reportDescriptionValidation,
} from "../Post/Validation";

import {
  API_URL,
  PROFILE_PIC_URL,
  POST_PIC_URL,
} from "../../constants/globalConstants";

function Ad(props) {
  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;
  const [reportType, setReportType] = useState("");
  const [reportItemId, setReportItemId] = useState("");

  const submitReport = async (data, { resetForm }) => {
    const inputData = {
      userId: userId,
      category: data.reportCategory,
      description: data.newDescription,
      reportType: reportType,
      commentId: reportItemId,
    };
    console.log(inputData);
    // e.preventDefault();
    console.log("submited");

    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    if (reportType === 4) {
      console.log("ad reported");
      await axios
        .post(API_URL + "/feed/uploadAdReport/", inputData, config)
        .then((response) => {
          console.log(response.data);
          // forceUpdate();
          $("#btn-close-form-ad-report").click();
        });
    }
    resetForm();
    // window.location.reload(false);
  };

  return (
    <>
    <div class="card adCard mb-3 rounded-bottom">
      <img src={props.image} class="card-img-top " alt="advertisement" />
      <div class="card-body adBody">
        <div class="dropdown d-inline-block drop-list-upper">
          <button
            className="dr-btn adBtn"
            id="page-header-notifications-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="bi bi-three-dots"></i>
          </button>

          <div
            onClick={() => {
              setReportType(4);
              setReportItemId(props.adId);
            }}
            class="dropdown-menu dropdown-menu-lg dropdown-menu-end dropdown-menu-arrow"
            aria-labelledby="page-header-notifications-dropdown"
            data-bs-toggle="modal"
            data-bs-target="#complainAdModal"
          >
            <a class="dropdown-item dinv">
              <i class="bi bi-flag-fill dinvit icon-theme"></i>{" "}
              <span class="align-middle">Report</span>
            </a>
          </div>
        </div>
      </div>
    </div>
       {/* complain modal start*/}

      <div
        class="modal fade"
        id="complainAdModal"
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
                id="btn-close-form-ad-report"
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
    </>
  );
}

export default Ad;
