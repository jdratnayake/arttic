import NavBarCreator from "../../components/NavBarCreator/NavBarCreator";
import "./CreatorProfilePage.css";
import profile from "../../images/users/pic4.png";

function CreatorProfilePage() {
    return (
        <>
            <NavBarCreator />

            <div class="main-container">
                <div class="row align-items-center">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">

                        <div class="profile">
                            <img src="https://images.unsplash.com/photo-1508247967583-7d982ea01526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="" class="profile-cover" />

                        </div>




                        <div class="bg-white rounded-bottom smooth-shadow-sm profile-intro">
                            <div class="d-flex align-items-center justify-content-between
                  pt-4 pb-6 px-4">

                                <div class="d-flex align-items-center">
                                    <div class="cr-avatar-xxl position-relative d-flex justify-content-end
                      align-items-end mt-n10">

                                        <img src={profile} class="cr-avatar-xxl
                        rounded-circle border border-4 border-white-color-40" alt="" />


                                    </div>

                                    <div class="lh-3">
                                        <h2 class="mb-0">User Name</h2>
                                        <p class="mb-0 d-block">101 following</p>
                                    </div>

                                </div>
                                <div class="d-flex">
                                    <a href="#" class="btn btn-outline-primary  d-md-block"><i class="bi bi-bookmark-plus dinvit"></i>Follow</a>

                                    <div class="dropdown d-inline-block drop-list-upper">
                                        <button className="dr-btn" id="page-header-notifications-dropdown"
                                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="bi bi-three-dots"></i>
                                        </button>

                                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end dropdown-menu-arrow"
                                            aria-labelledby="page-header-notifications-dropdown">
                                            <a class="dropdown-item dinv"><i class="bi bi-flag-fill dinvit icon-theme"></i> <span class="align-middle">Report</span></a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div class="py-6 intro">
                    <div class="row">
                        <div class="col-xl-8 col-lg-12 col-md-12 col-12 mb-8">

                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title mb-4">About Me</h4>
                                    <span class="text-uppercase fw-medium text-dark
                      fs-5 ls-2">Bio</span>

                                    <p class="mt-2 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen disse var ius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                                    </p>

                                    <div class="row">
                                        <div class="col-6 mb-5">
                                            <h6 class="text-uppercase fs-5 ls-2">Phone </h6>
                                            <p class="mb-0">+32112345689</p>
                                        </div>
                                        <div class="col-6 mb-5">
                                            <h6 class="text-uppercase fs-5 ls-2">Date of Birth </h6>
                                            <p class="mb-0">01.10.1997</p>
                                        </div>
                                        <div class="col-6">
                                            <h6 class="text-uppercase fs-5 ls-2">Email </h6>
                                            <p class="mb-0">Dashui@gmail.com</p>
                                        </div>
                                        <div class="col-6">
                                            <h6 class="text-uppercase fs-5 ls-2">Location
                                            </h6>
                                            <p class="mb-0">Ahmedabad, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <br />
                            {/* Posts */}
                            <div class="card">

                                <div class="card-body">
                                    <div class="d-flex justify-content-between mb-5
                      align-items-center">

                                        <div class="d-flex align-items-center">
                                            <div>
                                                <img src="../assets/images/avatar/avatar-1.jpg" alt="" class="avatar avatar-md rounded-circle" />
                                            </div>
                                            <div class="ms-3">
                                                <h5 class="mb-0 fw-bold">Jitu Chauhan</h5>
                                                <p class="mb-0">19 minutes ago</p>
                                            </div>
                                        </div>
                                        <div>

                                            <div class="dropdown dropstart">
                                                <a href="#" class="text-muted text-primary-hover" id="dropdownprojectFive" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i data-feather="more-vertical" class="icon-xxs"></i>
                                                </a>
                                                <div class="dropdown-menu" aria-labelledby="dropdownprojectFive">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <a class="dropdown-item" href="#">Something else
                                                        here</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-4">

                                        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen disse var ius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                                        <img src="../assets/images/blog/blog-img-1.jpg" class="rounded-3 w-100" alt="" />
                                    </div>

                                    <div class="mb-4">
                                        <span class="me-1 me-md-4"><i data-feather="heart"
                                            class="icon-xxs text-muted me-2"></i><span>20 Like</span></span>
                                        <span class="me-1 me-md-4"><i
                                            data-feather="message-square" class="icon-xxs
                          text-muted me-2"></i><span>12 Comment</span></span>
                                        <span><i data-feather="share-2" class="icon-xxs
                          text-muted me-2"></i><span>Share</span></span>
                                    </div>
                                    <div class="border-bottom border-top py-5 d-flex
                      align-items-center mb-4">

                                        <div class="avatar-group me-2 me-md-3">
                                            <span class="avatar avatar-sm">

                                                <img alt="avatar"
                                                    src="../assets/images/avatar/avatar-9.jpg"
                                                    class="rounded-circle" />
                                            </span>
                                            <span class="avatar avatar-sm">

                                                <img alt="avatar"
                                                    src="../assets/images/avatar/avatar-9.jpg"
                                                    class="rounded-circle" />
                                            </span>
                                            <span class="avatar avatar-sm">

                                                <img alt="avatar"
                                                    src="../assets/images/avatar/avatar-9.jpg"
                                                    class="rounded-circle" />
                                            </span>
                                        </div>
                                        <div><span>You and 20 more liked this</span></div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xl-1 col-lg-2 col-md-2 col-12 mb-3 mb-lg-0">

                                        <img src="../assets/images/avatar/avatar-1.jpg" class="avatar avatar-md rounded-circle" alt="" />
                                    </div>

                                    <div class="col-xl-11 col-lg-10 col-md-9 col-12 ">

                                        <div class="row g-3 align-items-center">
                                            <div class="col-md-2 col-xxl-1">
                                                <label for="name" class="col-form-label ">Name</label>
                                            </div>
                                            <div class="col-md-8 col-xxl-9  mt-0 mt-md-3">
                                                <input type="password" id="name" class="form-control" aria-describedby="name" />
                                            </div>
                                            <div class="col-md-2 col-xxl-2">
                                                <button type="submit" class="btn btn-primary">Post</button>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <br />

                        {/* Suggesions */}
                        <div class="col-xl-4 col-lg-12 col-md-12 col-12 mb-4">

                            <div class="card mb-4">

                                <div class="card-body">

                                    <h4 class="card-title mb-4">Suggesions for creator</h4>
                                    <div class="d-flex justify-content-between
                      align-items-center mb-4">
                                        <div class="d-flex align-items-center">

                                            <div>
                                                <img src="../assets/images/avatar/avatar-1.jpg" class="rounded-circle avatar-md" alt="" />
                                            </div>

                                            <div class="ms-3 ">
                                                <h5 class="mb-1">Dianna Smiley</h5>
                                                <p class="text-muted mb-0 fs-5 text-muted">UI / UX Designer
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="#" class="text-muted text-primary-hover"><i
                                                class="me-4 icon-xs" data-feather="phone-call"></i></a>
                                            <a href="#" class="text-muted text-primary-hover"><i
                                                class="icon-xs" data-feather="video"></i></a>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between
                      align-items-center mb-4">
                                        <div class="d-flex align-items-center">

                                            <div>
                                                <img src="../assets/images/avatar/avatar-2.jpg" class="rounded-circle avatar-md" alt="" />
                                            </div>

                                            <div class="ms-3 ">
                                                <h5 class="mb-1">Anne Brewer</h5>
                                                <p class="text-muted mb-0 fs-5 text-muted">Senior UX Designer
                                                </p>
                                            </div>
                                        </div>
                                        <div>

                                            <a href="#" class="text-muted text-primary-hover"><i
                                                class="me-4 icon-xs" data-feather="phone-call"></i></a>
                                            <a href="#" class="text-muted text-primary-hover"><i
                                                class="icon-xs" data-feather="video"></i></a>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between
                      align-items-center mb-4">
                                        <div class="d-flex align-items-center">

                                            <div>
                                                <img src="../assets/images/avatar/avatar-3.jpg" class="rounded-circle avatar-md" alt="" />
                                            </div>

                                            <div class="ms-3 ">
                                                <h5 class="mb-1">Richard Christmas
                                                </h5>
                                                <p class="text-muted mb-0 ">Front-End Engineer</p>
                                            </div>
                                        </div>
                                        <div>

                                            <a href="#" class="text-muted text-primary-hover"><i
                                                class="me-4 icon-xs" data-feather="phone-call"></i></a>
                                            <a href="#" class="text-muted text-primary-hover"><i
                                                class="icon-xs" data-feather="video"></i></a>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between
                      align-items-center">

                                        <div class="d-flex align-items-center">
                                            <div>
                                                <img src="../assets/images/avatar/avatar-4.jpg" class="rounded-circle avatar-md" alt="" />
                                            </div>

                                            <div class="ms-3 ">
                                                <h5 class="mb-1">Nicholas Binder
                                                </h5>
                                                <p class="text-muted mb-0 fs-5 ">Content Marketing Manager</p>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="#" class="text-muted text-primary-hover"><i
                                                class="me-4 icon-xs" data-feather="phone-call"></i></a>
                                            <a href="#" class="text-muted text-primary-hover"><i
                                                class="icon-xs" data-feather="video"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default CreatorProfilePage;