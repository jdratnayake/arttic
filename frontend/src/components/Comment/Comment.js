import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";

import { initialReportValues, reportDescriptionValidation } from "../Post/Validation";

import {
  API_URL,
} from "../../constants/globalConstants";

function Comment(props) {
  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;
  // const [commentCount, setCommentCount] = useState(props.commentCount);

  const updateLike = async (ComId) => {
    var data = JSON.stringify({
      reactorId: props.profilerId,
      commentId: ComId,
    });

    const config = {
      headers: {
        authorization: accessToken,
        "Content-Type": "application/json",
      },
    };

    axios
      .post(API_URL + "/feed/uploadCommentReaction/", data, config)
      .then((response) => {
        // console.log(response.data);
      });
  };
  const submitReport = async (data, { resetForm }) => {
    const inputData = {
      userId: userId,
      category: data.reportCategory,
      description: data.newDescription,
      reportType: 3,
      commentId: data.reportcommentId,
    };

    // console.log(inputData);

    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    // console.log("comment reported");
      await axios
      .post(API_URL + "/feed/uploadCommentReport/", inputData, config)
      .then((response) => {
        // console.log(response.data);
        $(`#btn-close-formcomment${props.commentId}`).click();
        if (response.status === 201) {
          toast.success("You have successfully reported the comment", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        }
      });
      resetForm();
  };

  return (
    <div>
      <div className="p-3 pt-0 pb-2 d-flex justify-items-center gap-2">
        <img
          className="rounded-circle"
          src={props.commentorImage}
          width={30}
          height={30}
        />
        <div>
          <p className="px-3 rounded pt-1 pb-1 m-0 fs-9 comment text-muted">
            {props.description}
          </p>
          <p
            className="m-0 comment-like"
            onClick={() => updateLike(props.commentId)}
          >
            Like
          </p>
        </div>
        <div class="dropdown d-inline-block drop-list-upper">
          <button
            className="dr-btn"
            id="page-header-notifications-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="bi bi-three-dots"></i>
          </button>

          <div
            class="dropdown-menu dropdown-menu-lg dropdown-menu-end dropdown-menu-arrow dDownCustomComment"
            aria-labelledby="page-header-notifications-dropdown"
          >
            <a
              class="dropdown-item dinv"
              data-bs-toggle="modal"
              data-bs-target={'#complaincommentModal' + props.commentId}
            >
              <i class="bi bi-flag-fill dinvit icon-theme"></i>{" "}
              <span class="align-middle">Report</span>
            </a>
            {props.profilerId === props.userId ? (
              <a
                class="dropdown-item dinv"
                onClick={() => {props.deleteComment(props.commentId, userId)}}
              >
                <i class="bi bi-trash-fill dinvit icon-theme"></i>{" "}
                <span class="align-middle">Delete</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
      {/* complain modal start*/}

      <div
        class="modal fade"
        id={'complaincommentModal' + props.commentId}
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
                id={`btn-close-formcomment${props.commentId}`}
              ></button>
            </div>
            <div class="modal-body p-4">
              <div class="card border shadow-none border-bottom p-4">
                <div class="row">
                  <div>
                    {/* border */}
                    <Formik
                      initialValues={{
                        newDescription : "",
                        reportCategory : '1',
                        reportcommentId : JSON.stringify(props.commentId),
                      }}
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
                            <Field
                                type="text"
                                className="form-control form-control-update"
                                id="reportcommentId"
                                name="reportcommentId"
                                placeholder="Enter your report description"
                                class="form-control form-control-sm"
                                hidden
                              />
                          </div>
                          {/* row ends*/}
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
    </div>
  );
}

export default Comment;
