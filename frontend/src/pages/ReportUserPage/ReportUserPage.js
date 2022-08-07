import { useParams } from "react-router-dom";

import "./ReportUserPage.css";
import avatar from "../../images/users/avatar-1.jpg";
import checkedMark from "../../images/svg/checked-mark.svg";

function ReportUserPage() {
  let { id } = useParams();
  return (
    <span className="ReportUserPage">
      <div class="row align-items-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-12">
          {/* Bg */}
          <div class="pt-20 rounded-top bannerImage"></div>
          <div class="bg-white smooth-shadow-sm ">
            <div class="d-flex align-items-center justify-content-between pt-4 pb-6 px-4">
              <div class="d-flex align-items-center">
                {/* avatar */}
                <div class="avatar-xxl avatar-indicators avatar-online me-2 position-relative d-flex justify-content-end align-items-end mt-n10">
                  <img
                    src={avatar}
                    class="avatar-xxl rounded-circle border border-4 border-white-color-40"
                    alt=""
                  />
                  <a
                    href="#!"
                    class="position-absolute top-0 right-0 me-2"
                    data-bs-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Verified"
                  >
                    <img src={checkedMark} alt="" height="30" width="30" />
                  </a>
                </div>
                {/* text */}
                <div class="lh-1">
                  <h2 class="mb-0">
                    Jitu Chauhan
                    <a
                      href="#!"
                      class="text-decoration-none"
                      data-bs-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="Beginner"
                    ></a>
                  </h2>
                  <p class="mb-0 d-block">@imjituchauhan</p>
                </div>
                <div>
                  <button type="button" class="btn btn-danger banButton">
                    Temporary Hold
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card reportBio">
            {/* card body */}
            <div class="card-body reportBioBody">
              <span class="text-uppercase fw-medium text-dark fs-4 ls-2">
                Bio
              </span>
              {/* text */}
              <p class="mt-1 mb-1 px-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspen disse var ius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla,
                ut commodo diam libero vitae erat.
              </p>
              {/* row */}
              <div class="row">
                <div class="col-12 mb-1">
                  {/* text */}
                  <h6 class="text-uppercase fs-4 ls-2">User id</h6>
                  <p class="mb-0 px-2">{id}</p>
                </div>
                <div class="col-12 mb-1">
                  {/* text */}
                  <h6 class="text-uppercase fs-4 ls-2">Username</h6>
                  <p class="mb-0 px-2">Mahesh</p>
                </div>
                <div class="col-6 mb-1">
                  <h6 class="text-uppercase fs-4 ls-2">Phone </h6>
                  <p class="mb-0 px-2">+32112345689</p>
                </div>
                <div class="col-6 mb-1">
                  <h6 class="text-uppercase fs-4 ls-2">Joined date </h6>
                  <p class="mb-0 px-2">01.10.2020</p>
                </div>
                <div class="col-6">
                  <h6 class="text-uppercase fs-4 ls-2">Email </h6>
                  <p class="mb-0 px-2">Arttic@gmail.com</p>
                </div>
                <div class="col-6">
                  <h6 class="text-uppercase fs-4 ls-2">Accounnt status</h6>
                  <p class="mb-0 px-2">Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div class="py-5">
        {/* row */}
        <div class="row">
          <div class="col-xl-6 col-lg-12 col-md-12 col-12 mb-5 ">
            {/*card */}
            <div class="card">
              {/* card body */}
              <div class="card-body">
                {/* card title */}
                {/*<h4 class="card-title mb-4">About Me</h4>*/}
                <span class="text-uppercase fw-medium text-dark fs-5 ls-2">
                  User report
                </span>
                <div class="row mt-2  p-1 complain-body">
                  {/* Accordion */}
                  <div class="accordion" id="accordionUser">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="true"
                          aria-controls="collapse1"
                        >
                          It is hidden by default, until the collapse
                          plugin...
                        </button>
                      </h2>
                      <div
                        id="collapse1"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionUser"
                      >
                        <div class="accordion-body">
                          <p>Nudity</p>
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style
                          each element. These classes control the overall
                          appearance, as well as the showing and hiding via
                          CSS transitions. You can modify any of this with
                          custom CSS or overriding our default variables.
                          It's also worth noting that just about any HTML
                          can go within the
                          <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                          It is hidden by default, until the collapse
                          plugin...
                        </button>
                      </h2>
                      <div
                        id="collapse2"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionUser"
                      >
                        <div class="accordion-body">
                          <p>Nudity</p>
                          <strong>
                            This is the second item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style
                          each element. These classes control the overall
                          appearance, as well as the showing and hiding via
                          CSS transitions. You can modify any of this with
                          custom CSS or overriding our default variables.
                          It's also worth noting that just about any HTML
                          can go within the
                          <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                        >
                          It is hidden by default, until the collapse
                          plugin...
                        </button>
                      </h2>
                      <div
                        id="collapse3"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionUser"
                      >
                        <div class="accordion-body">
                          <p>Nudity</p>
                          <strong>
                            This is the third item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style
                          each element. These classes control the overall
                          appearance, as well as the showing and hiding via
                          CSS transitions. You can modify any of this with
                          custom CSS or overriding our default variables.
                          It's also worth noting that just about any HTML
                          can go within the
                          <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12 col-md-12 col-12 mb-5 ">
            {/*card */}
            <div class="card">
              {/* card body */}
              <div class="card-body">
                {/* card title */}
                {/*<h4 class="card-title mb-4">About Me</h4>*/}
                <span class="text-uppercase fw-medium text-dark fs-5 ls-2">
                  Post report
                </span>
                <div class="row mt-2 p-1 complain-body">
                  {/* Accordion */}
                  <div class="accordion" id="accordionPost">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                          aria-expanded="true"
                          aria-controls="collapse4"
                        >
                          It is hidden by default, until the collapse
                          plugin...
                        </button>
                      </h2>
                      <div
                        id="collapse4"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionPost"
                      >
                        <div class="accordion-body">
                          <p>Nudity</p>
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style
                          each element. These classes control the overall
                          appearance, as well as the showing and hiding via
                          CSS transitions. You can modify any of this with
                          custom CSS or overriding our default variables.
                          It's also worth noting that just about any HTML
                          can go within the
                          <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                        >
                          It is hidden by default, until the collapse
                          plugin...
                        </button>
                      </h2>
                      <div
                        id="collapse5"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionPost"
                      >
                        <div class="accordion-body">
                          <p>Nudity</p>
                          <strong>
                            This is the second item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style
                          each element. These classes control the overall
                          appearance, as well as the showing and hiding via
                          CSS transitions. You can modify any of this with
                          custom CSS or overriding our default variables.
                          It's also worth noting that just about any HTML
                          can go within the
                          <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse6"
                          aria-expanded="false"
                          aria-controls="collapse6"
                        >
                          It is hidden by default, until the collapse
                          plugin...
                        </button>
                      </h2>
                      <div
                        id="collapse6"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionPost"
                      >
                        <div class="accordion-body">
                          <p>Nudity</p>
                          <strong>
                            This is the third item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style
                          each element. These classes control the overall
                          appearance, as well as the showing and hiding via
                          CSS transitions. You can modify any of this with
                          custom CSS or overriding our default variables.
                          It's also worth noting that just about any HTML
                          can go within the
                          <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12 col-md-12 col-12 mb-5 ">
            {/*card */}
            <div class="card">
              {/* card body */}
              <div class="card-body">
                {/* card title */}
                {/*<h4 class="card-title mb-4">About Me</h4>*/}
                <span class="text-uppercase fw-medium text-dark fs-5 ls-2">
                  Comment report
                </span>
                <div class="row mt-2 p-1 complain-body">
                  {/* Accordion */}
                  <div class="accordion" id="accordionComment">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse7"
                          aria-expanded="true"
                          aria-controls="collapse7"
                        >
                          It is hidden by default, until the collapse
                          plugin...
                        </button>
                      </h2>
                      <div
                        id="collapse7"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionComment"
                      >
                        <div class="accordion-body">
                          <p>Nudity</p>
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style
                          each element. These classes control the overall
                          appearance, as well as the showing and hiding via
                          CSS transitions. You can modify any of this with
                          custom CSS or overriding our default variables.
                          It's also worth noting that just about any HTML
                          can go within the
                          <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse8"
                          aria-expanded="false"
                          aria-controls="collapse8"
                        >
                          It is hidden by default, until the collapse
                          plugin...
                        </button>
                      </h2>
                      <div
                        id="collapse8"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionComment"
                      >
                        <div class="accordion-body">
                          <p>Nudity</p>
                          <strong>
                            This is the second item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style
                          each element. These classes control the overall
                          appearance, as well as the showing and hiding via
                          CSS transitions. You can modify any of this with
                          custom CSS or overriding our default variables.
                          It's also worth noting that just about any HTML
                          can go within the
                          <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse9"
                          aria-expanded="false"
                          aria-controls="collapse9"
                        >
                          It is hidden by default, until the collapse
                          plugin...
                        </button>
                      </h2>
                      <div
                        id="collapse9"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionComment"
                      >
                        <div class="accordion-body">
                          <p>Nudity</p>
                          <strong>
                            This is the third item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style
                          each element. These classes control the overall
                          appearance, as well as the showing and hiding via
                          CSS transitions. You can modify any of this with
                          custom CSS or overriding our default variables.
                          It's also worth noting that just about any HTML
                          can go within the
                          <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-12 col-md-12 col-12 mb-5 ">
            {/*card */}
            <div class="card">
              {/* card body */}
              <div class="card-body">
                {/* card title */}
                {/*<h4 class="card-title mb-4">About Me</h4>*/}
                <span class="text-uppercase fw-medium text-dark fs-5 ls-2">
                  Advertisment report
                </span>
                <div class="row mt-2 p-1 complain-body">
                  {/* Accordion */}
                  <div class="accordion" id="accordionAd">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse10"
                          aria-expanded="true"
                          aria-controls="collapse10"
                        >
                          It is hidden by default, until the collapse
                          plugin...
                        </button>
                      </h2>
                      <div
                        id="collapse10"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionAd"
                      >
                        <div class="accordion-body">
                          <p>Nudity</p>
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style
                          each element. These classes control the overall
                          appearance, as well as the showing and hiding via
                          CSS transitions. You can modify any of this with
                          custom CSS or overriding our default variables.
                          It's also worth noting that just about any HTML
                          can go within the
                          <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse11"
                          aria-expanded="false"
                          aria-controls="collapse11"
                        >
                          It is hidden by default, until the collapse
                          plugin...
                        </button>
                      </h2>
                      <div
                        id="collapse11"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionAd"
                      >
                        <div class="accordion-body">
                          <p>Nudity</p>
                          <strong>
                            This is the second item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style
                          each element. These classes control the overall
                          appearance, as well as the showing and hiding via
                          CSS transitions. You can modify any of this with
                          custom CSS or overriding our default variables.
                          It's also worth noting that just about any HTML
                          can go within the
                          <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse12"
                          aria-expanded="false"
                          aria-controls="collapse12"
                        >
                          It is hidden by default, until the collapse
                          plugin...
                        </button>
                      </h2>
                      <div
                        id="collapse12"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionAd"
                      >
                        <div class="accordion-body">
                          <p>Nudity</p>
                          <strong>
                            This is the third item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style
                          each element. These classes control the overall
                          appearance, as well as the showing and hiding via
                          CSS transitions. You can modify any of this with
                          custom CSS or overriding our default variables.
                          It's also worth noting that just about any HTML
                          can go within the
                          <code>.accordion-body</code>, though the
                          transition does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default ReportUserPage;
