import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import {
  API_URL,
  POST_PIC_URL,
} from "../../constants/globalConstants";

import userImg from "../../images/avatar/avatar-1.jpg";
import './InputBox.css';

function InputBox( props ) {
  const [postImage, setPostImage] = useState("");
  const [postImageStore, setPostImageStore] = useState("");
  const [description, setDescription] = useState("");

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const postImageInput = useRef(null);
  const postDescription = useRef(null);

  const handlePostImageClick = (event) => {
    postImageInput.current.click();
  };

  const handlePostImageChange = (e) => {
    setPostImage(URL.createObjectURL(e.target.files[0]));
    setPostImageStore(e.target.files[0]);
  };

  const uploadPostPicture = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        authorization: accessToken,
        userid: userId,
        uploadfiletype: "3",
      },
    };
    setDescription(postDescription.current.value);
    const inputData = new FormData();

    inputData.append("file", postImageStore);
    inputData.append("desc", description);
  
    setPostImage(null);
    setPostImageStore(null);
    postDescription.current.value = "";
    
    await axios
      .post(API_URL + "/user/uploadPostImage/", inputData, config)
      .then((response) => {});
  }

  return (
    <div className="mt-6 p-2 inputBox">
      <div className="inputBox-body">
          <img src={props.profilePic} width={40} height={40} className="rounded-circle"/>
          <form className="inputBox-form">
            <a
              href="#"
              class="inputBox-input text-muted"
              data-bs-toggle="modal"
              data-bs-target="#inputBox"
            >
                what's on your mind,{props.name} ?
            </a>
            <button hidden type="submit">Submit</button>
          </form>
      </div>
      <div className="d-flex justify-content-evenly p-2 border-top">
          <div className="d-flex align-items-center gap-1 flex-grow justify-content-center p-1 px-4 inputBox-inputIcon">
            <a className="d-flex gap-1 inputBox-action" data-bs-toggle="modal" data-bs-target="#inputBox">
              <i class="bi bi-camera-reels-fill text-danger"></i>
              <p className="m-0 inputBox-icon">Video</p>
            </a>
          </div>
          <div className="d-flex align-items-center gap-1 flex-grow justify-content-center p-1 px-4 inputBox-inputIcon">
            <a className="d-flex gap-1 inputBox-action" data-bs-toggle="modal" data-bs-target="#inputBox">
              <i class="bi bi-file-image-fill text-success"></i>
              <p className="m-0 inputBox-icon">Photo</p>
            </a>
          </div>
      </div>
          {/* update plan modal */}
      <div
          class="modal fade"
          id="inputBox"
          tabindex="-1"
          aria-labelledby="complainModalLabel"
          aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header p-3">
              <div>
                <h6 class="mb-0" id="complainModalLabel">
                  Create a post
                </h6>
              </div>
              <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
              ></button>
            </div>
            <div class="modal-body p-4 ">
              <div class="card border shadow-none border-bottom p-4 pb-0">
                <div class="row">
                  <div>
                    {/* border */}
                    <form>
                      {/* row */}
                      <div class="mb-3 row">
                        <label
                          for="description"
                          class="col-sm-4 col-form-label form-label"
                        >
                          Description
                        </label>
                        <div class="col-md-8 col-12">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Description"
                            id="description"
                            ref={ postDescription }
                          />
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-md-12">
                          {/* dropzone input */}
                          <div>
                            <form
                              class=" mb-3  dz-clickable"
                            >
                              <img
                                src={ postImage }
                                style={{ width: "41rem", height: "12rem" }}
                                alt=""
                              />

                              <input
                                type="file"
                                ref={ postImageInput }
                                onChange={ handlePostImageChange }
                                style={{ display: "none" }}
                                placeholder="Insert image or video"
                              />

                              <button
                                type="button"
                                class="btn mt-2  btn-secondary"
                                onClick={handlePostImageClick}
                              >
                                Add Image
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-start p-4 pt-2">
              <button type="submit" 
                data-bs-dismiss="modal"
                aria-label="Close" 
                class="btn btn-primary" 
                onClick = { uploadPostPicture } 
              >
                {" "}
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputBox