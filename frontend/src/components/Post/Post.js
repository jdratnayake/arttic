import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { initialReportValues, reportDescriptionValidation } from "./Validation";

import Comment from "../Comment/Comment";
import {
  API_URL,
  PROFILE_PIC_URL,
  POST_PIC_URL,
} from "../../constants/globalConstants";

import "./Post.css";

function Post(props) {
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;
  const [comments, setComments] = useState("");
  const [newComment, setNewComment] = useState(null);
  const [iscommentBoxOpen, setCommentBoxOpen] = useState(false);
  const [commentCount, setCommentCount] = useState(props.commentCount);
  const [reactCount, setReactCount] = useState(props.likes);
  const [reportPost, setReportPost] = useState(props.postid);
  const commentRef = useRef(null);

  const deleteComment = async (cid, commenterId) => {
    if (props.profilerId === commenterId) {
      // console.log("delete clicked")
      if (window.confirm("Do you want to delete the comment !")) {
        const config = {
          headers: {
            authorization: accessToken,
            userid: userId,
            commentId: cid,
          },
        };

        await axios
          .get(API_URL + "/feed/deleteComment/", config)
          .then((response) => {
            // console.log(response.data)
            $(`#comment${response.data.commentId}`).hide();
            setComments(comments.filter(comment => comment.commentId !== response.data.commentId))

            setCommentCount(commentCount - 1);
          });
      } else {
        console.log("cannot delete");
      }
    }
  };

  const gotoProfile = (pid) => {
    if (pid === userId) {
      navigate("/creatorprofile");
    } else {
      navigate("/viewuserprofile/" + pid);
    }
  };

  const submitReport = async (data, { resetForm }) => {
    const inputData = {
      userId: userId,
      category: data.reportCategory,
      description: data.newDescription,
      reportType: 2,
      reportedpostid: data.reportpostId,
    };

    // console.log(inputData,data.reportpostId);

    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    // console.log("post reported");
    await axios
      .post(API_URL + "/feed/uploadPostReport/", inputData, config)
      .then((response) => {
        // console.log(response);
        $(`#btn-close-form${props.postid}`).click();
        if (response.status === 201) {
          toast.success("You have successfully reported the post", {
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

  const addComment = (e) => {
    if (iscommentBoxOpen) {
      setCommentBoxOpen(false);
    } else {
      setCommentBoxOpen(true);
      getComments();
    }
    // console.log("button click", iscommentBoxOpen);
  };

  // *********** upload comment ************
  const sendComment = async (e) => {
    e.preventDefault();
    // setCommentBoxOpen(false);

    var data = JSON.stringify({
      commenterId: props.profilerId,
      postId: props.postid,
      description: commentRef.current.value,
    });

    if (!commentRef.current.value) {
      return;
    }

    const config = {
      headers: {
        authorization: accessToken,
        "Content-Type": "application/json",
      },
    };

    axios
      .post(API_URL + "/feed/uploadComment/", data, config)
      .then((response) => {
        console.log(response.data)
        setComments((current) => [response.data, ...current]);
        setCommentCount(commentCount + 1);
      });
  };

  // ******** upload post save ***********
  const uploadPostSave = async (PID) => {
    // console.log("PID :" + PID + "saved !");
    var data = JSON.stringify({
      postId: PID,
    });

    const config = {
      headers: {
        authorization: accessToken,
        "Content-Type": "application/json",
        userid: props.profilerId,
      },
    };

    axios
      .post(API_URL + "/feed/uploadPostSave/", data, config)
      .then((response) => {
        // console.log(response.data);
      });
  };

  // ************ upload post react ************
  const uploadPostReact = async (PID) => {
    // console.log(PID);
    var data = JSON.stringify({
      reactorId: props.profilerId,
      postId: PID,
    });

    const config = {
      headers: {
        authorization: accessToken,
        "Content-Type": "application/json",
      },
    };

    axios
      .post(API_URL + "/feed/uploadpostReaction/", data, config)
      .then((response) => {
        // console.log(response.data);
        setReactCount(reactCount + 1);
      });
  };

  // *********** get comments ************
  const getComments = async () => {
    const id = props.postid;

    const config = {
      headers: {
        authorization: accessToken,
        postid: id,
      },
    };

    await axios.get(API_URL + "/feed/getComments/", config).then((response) => {
      setComments(response.data);
      console.log(response.data);
    });
  };

  return (
    <span className="Post">
      <div className="d-flex post">
        <div className="p-3 pb-2 mt-3 post-header rounded-top">
          <div className="d-flex justify-content-between gap-2 ">
            <div
              className="d-flex justify-items-center gap-2"
              style={{ cursor: "pointer" }}
              onClick={() => {
                gotoProfile(props.creatorId);
              }}
            >
              <img
                className="rounded-circle"
                src={props.userImage}
                width={40}
                height={40}
              />
              <div>
                <p className="m-0 post-name">{props.name}</p>
                <p className="m-0 post-timestamp">
                  {new Date(props.timestamp).toLocaleString()}
                  {/* {props.timestamp} */}
                </p>
              </div>
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
                class="dropdown-menu dropdown-menu-lg dropdown-menu-end dropdown-menu-arrow"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <a
                  class="dropdown-item dinv"
                  data-bs-toggle="modal"
                  data-bs-target={"#complainModal" + props.postid}
                >
                  <i class="bi bi-flag-fill dinvit icon-theme"></i>{" "}
                  <span class="align-middle">Report</span>
                </a>
                {props.profilerId === props.creatorId ? (
                  <a
                    class="dropdown-item dinv"
                    onClick={() => { props.deletePost(props.postid, props.creatorId) }}
                  >
                    <i class="bi bi-trash-fill dinvit icon-theme"></i>{" "}
                    <span class="align-middle">Delete</span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
          <p className="pt-3 m-0 fs-8">{props.message}</p>
        </div>
        {props.image && (
          <div className="post-image-container">
            <img src={props.image} className="m-0 post-image" />
          </div>
        )}
        <div className="bg-white d-flex justify-content-between">
          <div className="d-flex fs-8 align-items-center gap-1 flex-grow justify-content-center p-1 px-4 post-inputIcon">
            <i className="bi bi-hand-thumbs-up-fill"></i>
            <p className="m-0 post-react-count">{reactCount}</p>
          </div>
          <div className="d-flex align-items-center gap-1 flex-grow justify-content-center p-1 px-4 post-inputIcon">
            <p className="m-0  post-react-count">{commentCount} Comments</p>
          </div>
        </div>
        <div className="p-1 border-top post-footer d-flex justify-content-between align-items-center rounded-bottom bg-white">
          <div
            className="d-flex align-items-center gap-1 flex-grow justify-content-center p-1 px-4 post-inputIcon"
            onClick={() => uploadPostReact(props.postid)}
          >
            <i className="bi bi-hand-thumbs-up-fill"></i>
            <p className="m-0 post-react">Like</p>
          </div>
          <div
            onClick={addComment}
            className="d-flex align-items-center gap-1 flex-grow justify-content-center p-1 px-4 post-inputIcon"
          >
            <i className="bi bi-chat-square-dots-fill"></i>
            <p className="m-0  post-react">Comment</p>
          </div>
          <div
            className="d-flex align-items-center gap-1 flex-grow justify-content-center p-1 px-4 post-inputIcon"
            onClick={() => uploadPostSave(props.postid)}
          >
            <i className="bi bi-star-fill"></i>
            <p className="m-0 post-react">Favourite</p>
          </div>
        </div>
        {/* comment */}
        {iscommentBoxOpen && (
          <div className="mt-6 p-2 inputBox">
            <div className="commentSetion">
              {/* new comment start*/}

              {/* {newComment && (
                <Comment
                  key={newComment.commentId}
                  id={"comment" + newComment.commentId}
                  commentorImage={props.profilePic}
                  commentId={newComment.commentId}
                  profilerId={props.profilerId}
                  userId={userId}
                  deleteComment={deleteComment}
                  description={newComment.description}
                />
              )} */}

              {/* new comment end*/}
              {/* comments start*/}

              {comments &&
                comments.map((comment) => {
                  return (
                    <Comment
                      key={comment.commentId}
                      id={`comment${comment.commentId}`}
                      commentorImage={PROFILE_PIC_URL + comment.profilePhoto}
                      commentId={comment.commentId}
                      profilerId={props.profilerId}
                      userId={userId}
                      deleteComment={deleteComment}
                      description={comment.description}
                    />
                  );
                })}
              {/* comments end*/}
            </div>
            <div className="inputBox-body">
              <img
                src={props.profilePic}
                width={40}
                height={40}
                className="rounded-circle"
              />
              <form className="inputBox-form">
                <input
                  ref={commentRef}
                  className="inputBox-input text-muted"
                  type="text"
                  placeholder={`comment here`}
                  style={{ textAlign: "left !important" }}
                />
                <button
                  className="btn btn-primary"
                  onClick={sendComment}
                  hidden
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* complain modal start*/}

      <div
        class="modal fade"
        id={'complainModal' + props.postid}
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
                id={`btn-close-form${props.postid}`}
              ></button>
            </div>
            <div class="modal-body p-4">
              <div class="card border shadow-none border-bottom p-4">
                <div class="row">
                  <div>
                    {/* border */}
                    <Formik
                      initialValues={{
                        newDescription: "",
                        reportCategory: '1',
                        reportpostId: JSON.stringify(props.postid),
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
                              id="reportpostId"
                              name="reportpostId"
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
    </span>
  );
}

export default Post;
