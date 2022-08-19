import "./CreatorProfilePage.css";
import { useState, useEffect } from "react";
import { API_URL } from "../../constants/globalConstants";
import axios from "axios";
import { useSelector } from "react-redux";

import NavBarCreator from "../../components/NavBarCreator/NavBarCreator";
import profile from "../../images/users/pic4.png";
import avatar1 from "../../images/avatar/avatar-2.jpg";
import avatar2 from "../../images/avatar/avatar-3.jpg";
import avatar3 from "../../images/avatar/avatar-4.jpg";
import t from '../../images/NFTs/monkey-removebg.png';
import Post from "../../components/Post/Post";
import checkedMark from "../../images/svg/checked-mark.svg";



function CreatorProfilePage() {

    const [profileData, setProfileData] = useState("");

    const userInfo = useSelector((state) => state.userInfo);
    const { userId, accessToken } = userInfo.user;

    const getUserData = async () => {
        const config = {
          headers: {
            authorization: accessToken,
          },
        };
    
        await axios
          .get(API_URL + "/user/getuserdetails/" + userId, config)
          .then((response) => {
            setProfileData(response.data);
          });
      };

      useEffect(() => {
        getUserData();
      }, []);

    return (
        <span className="creatorProfilePage">
            <NavBarCreator />

            <div class="main-container">
                <div class="row align-items-center">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                        {/* Bg */}
                        <div class="pt-20 rounded-top bannerImage">
                        </div>
                        <div class="bg-white smooth-shadow-sm">
                            <div class="d-flex align-items-center justify-content-between pt-4 pb-6 px-4">
                                <div class="d-flex align-items-center">

                                    {/* avatar */}
                                    <div class="me-2 position-relative d-flex 
                                        justify-content-end align-items-end mt-n10">

                                        <img src={profile} class="avatar-xxl rounded-circle border border-4 
                                            border-white-color-40" alt="" />

                                        <a class="position-absolute top-0 right-0 me-2" data-placement="top"
                                            data-original-title="Verified"
                                        >
                                            <img src={checkedMark} alt="" height="30" width="30" />
                                        </a>

                                    </div>

                                    {/* text */}
                                    <div class="lh-1">
                                        <h2 class="mb-0"> {profileData.name} </h2>
                                        <div class="sub-lh-1">
                                            <p class="mb-0 d-block">101 followers</p>
                                            <p class="mb-0 d-block following">50 following</p>
                                        </div>
                                    </div>

                                </div>
                                <div class="d-flex">
                                    <a href="#" class="btn btn-outline-primary  d-sm-block"><i class="bi bi-bookmark-plus dinvit"></i>Follow</a>

                                    <div class="dropdown d-inline-block drop-list-upper">
                                        <button className="dr-btn report-threedots" id="page-header-notifications-dropdown"
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

                        <div class="card reportBio">
                            {/* card body */}
                            <div class="card-body reportBioBody">
                                {/* row */}
                                <div class="row">
                                    <div class="col-12 mb-1">
                                        {/* text */}
                                        <h6 class="text-uppercase fs-5 ls-2">Bio</h6>
                                        <p class="mb-0">I work as CPO for a Swiss Telco/Messaging Platform Company. 
                                                        My real passion is developing in Golang, Vue-Nuxt/ReactJs/Angular 
                                                        with Redis, Nsq/RabbitMQ, ArangoDB, MongoDB and Sql</p>
                                    </div>
                                    <div class="col-12 mb-1">
                                        {/* text */}
                                        <h6 class="text-uppercase fs-5 ls-2">Username</h6>
                                        <p class="mb-0">{profileData.name}</p>
                                    </div>
                                    <div class="col-6 mb-1">
                                        <h6 class="text-uppercase fs-5 ls-2">Phone </h6>
                                        <p class="mb-0">{profileData.phone}</p>
                                    </div>
                                    <div class="col-6 mb-1">
                                        <h6 class="text-uppercase fs-5 ls-2">Joined date </h6>
                                        <p class="mb-0">{profileData.joinedDate}</p>
                                    </div>
                                    <div class="col-6">
                                        <h6 class="text-uppercase fs-5 ls-2">Email </h6>
                                        <p class="mb-0">{profileData.email}</p>
                                    </div>
                                    <div class="col-6">
                                        <h6 class="text-uppercase fs-5 ls-2">Accounnt status</h6>
                                        <p class="mb-0">Premium</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="py-6 intro">
                    <div class="row">
                        <div class="col-xl-8 col-lg-12 col-md-12 col-12 mb-8">

                            {/* Posts */}
                            <Post
                                image={t}
                                name={"Peter Pan"}
                                date={"2022-07-13"}
                                title={"Happy Holiday"}
                                desc={
                                    "When the bass drops, so do my problems.When the bass drops, so do my problems."
                                }
                            />

                            <br />

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
                                                <img src={profile} class="rounded-circle avatar-md" alt="" />
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
                                                <img src={avatar1} class="rounded-circle avatar-md" alt="" />
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
                                                <img src={avatar2} class="rounded-circle avatar-md" alt="" />
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
                                                <img src={avatar3} class="rounded-circle avatar-md" alt="" />
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

        </span>
    )
}

export default CreatorProfilePage;