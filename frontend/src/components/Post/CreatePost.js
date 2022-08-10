import React from 'react'

import './CreatePost.css'
import profile from "../../images/users/pic4.png";


function CreatePost( props ) {
  return (
    <span className="CreatePost">
      <div className="container p-0">
        <div className="status box createPost-box">
          <div className="create-status-main">
          <img src={profile}  className="status-img" alt="" />
           
            <a
              href="#"
              class="status-textarea d-grid mb-2 openComplaintDialog"
              data-bs-toggle="modal"
              data-bs-target="#PostCreateModal"
            >
                Post something..
            </a>
          </div>
         </div>
      </div>
      {/* update plan modal */}
      <div
          class="modal fade"
          id="PostCreateModal"
          tabindex="-1"
          aria-labelledby="complainModalLabel"
          aria-hidden="true"
      >
          <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                  <div class="modal-header p-3">
                      <div>
                          <h4 class="mb-0" id="complainModalLabel">
                              Create a post
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
                               <div>
                {/* border */}
                <div class="mb-6">
                  <h4 class="mb-1">Basic information</h4>
                </div>
                <form>
                  {/* row */}

                  <div class="mb-3 row">
                    <label
                      for="fullName"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Full name
                    </label>
                    <div class="col-sm-4 mb-3 mb-lg-0">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First name"
                        id="fullName"
                        required
                      />
                    </div>
                    <div class="col-sm-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last name"
                        id="lastName"
                        required
                      />
                    </div>
                  </div>

                  {/* row */}
                  <div class="mb-3 row">
                    <label
                      for="email"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Email
                    </label>
                    <div class="col-md-8 col-12">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        id="email"
                        required
                      />
                    </div>
                  </div>
                  {/* row */}
                  <div class="mb-3 row">
                    <label
                      for="phone"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Phone <span class="text-muted">(Optional)</span>
                    </label>
                    <div class="col-md-8 col-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Phone"
                        id="phone"
                      />
                    </div>
                  </div>
                  {/* row */}
                  <div class="mb-3 row">
                    <label
                      for="location"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Location
                    </label>

                    <div class="col-md-8 col-12">
                      <select class="form-select" id="location">
                        <option selected>Select Country</option>
                        <option value="1">India</option>
                        <option value="2">UK</option>
                        <option value="3">USA</option>
                      </select>
                    </div>
                  </div>
                  {/* row */}
                  <div class="mb-3 row">
                    <label
                      for="addressLine"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Address line 1
                    </label>

                    <div class="col-md-8 col-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="placeholder"
                        id="addressLine"
                      />
                    </div>
                  </div>
                  {/* row */}
                  <div class="mb-3 row">
                    <label
                      for="addressLineTwo"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Address line 2
                    </label>
                    <div class="col-md-8 col-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="placeholder"
                        id="addressLineTwo"
                      />
                    </div>
                  </div>
                  {/* row */}
                  <div class="row align-items-center mb-3">
                    <label
                      for="zipcode"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Zip code <i data-feather="info" class="me-2 icon-xs"></i>
                    </label>

                    <div class="col-md-8 col-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="placeholder"
                        id="zipcode"
                      />
                    </div>
                    
                  </div>
                  <div class="row mb-8">
               
                  <div class="col-md-12">
                    {/* dropzone input */}
                    <div>
                      <form action="#" class="dropzone mb-3 border-dashed dz-clickable">
                        <div class="dz-default dz-message">
                          <button className="dz-button" type="button">Drop files here to upload </button>
                        </div>
                      </form>
                      <button type="submit" class="btn btn-secondary">
                        Change
                      </button>
                    </div>
                  </div>
                </div>
                </form>
              </div>
                          </div>
                      </div>
                  </div>
                  <div class="modal-footer justify-content-start p-4 pt-2">
                      <button type="submit" class="btn btn-primary">
                        {" "}
                        Save Changes
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
    // <div className="card postCard p-2">
    //         <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Start a post"/>
    //     <div className="card-body pt-1 pb-0">
    //         <div class="input-group createPostInput">
    //             <label class="input-group-text inputLablesCreate" for="inputGroupFile01"><i class="bi bi-image-fill">  Photos</i></label>
    //             <input type="file"  id="inputGroupFile01" hidden/>

    //             <label class="input-group-text inputLablesCreate" for="inputGroupFile02"><i class="bi bi-camera-video-fill">  Videos</i></label>
    //             <input type="file" id="inputGroupFile02" hidden/>

    //             <label class="input-group-text inputLablesCreate" for="inputGroupFile03"><i class="bi bi-flag-fill"> Events</i></label>
    //             <input type="file" id="inputGroupFile03" hidden/>
    //         </div>
    //     </div>
    // </div>
  )
}

export default CreatePost