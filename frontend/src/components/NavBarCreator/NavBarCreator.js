import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { PROFILE_PIC_URL } from "../../constants/globalConstants";
import { logout } from "../../actions/userActions";

import "./NavBarCreator.css";
import logo from "../../images/logo.png";

function NavBarCreator() {
  const [profilePic, setProfilePic] = useState("");

  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    if (!userInfo.user) {
      navigate("/login");
    } else {
      const { userId, accessToken, profilePhoto } = userInfo.user;
      setProfilePic(PROFILE_PIC_URL + profilePhoto);
    }
  }, []);

  return (
    <span className="NavBarCreator">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} width="200" height="45" />
          </a>

          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex me-auto sebr" role="search">
              {/* <a className="btn btn-secondary" type="submit">
                                <i className="bi bi-search"></i>
                            </a> */}
              <div class="wrap-sb">
                <div class="search">
                  <button class="searchButton">
                    <i class="bi bi-search"></i>
                  </button>
                  <input type="text" class="searchTerm" placeholder="Search" />
                </div>
              </div>
              {/* <input type="search" className="form-control" placeholder="Search" aria-label="Search" /> */}
            </form>

            <div className="navbar-end">
              <div className="navbar-item">
                {/* Notification */}
                <div class="dropdown d-inline-block drop-list-upper">
                  <button
                    className="dr-btn"
                    id="page-header-notifications-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="bi bi-bell-fill icon-theme-nav"></i>
                  </button>

                  <div
                    class="dropdown-menu dropdown-menu-lg dropdown-menu-end dropdown-menu-arrow"
                    aria-labelledby="page-header-notifications-dropdown"
                  >
                    <a class="dropdown-item">
                      <span class="align-middle">N 1</span>
                    </a>
                    <a class="dropdown-item">
                      <span class="align-middle">N 2</span>
                    </a>
                    <a class="dropdown-item">
                      <span class="align-middle">N 3</span>
                    </a>
                  </div>
                </div>

                {/* Chat */}
                <div class="dropdown d-inline-block drop-list-upper">
                  <button
                    className="dr-btn"
                    id="page-header-notifications-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="bi bi-chat-dots icon-theme-nav"></i>
                  </button>

                  <div
                    class="dropdown-menu dropdown-menu-lg dropdown-menu-end dropdown-menu-arrow"
                    aria-labelledby="page-header-notifications-dropdown"
                  >
                    <a class="dropdown-item">
                      <span class="align-middle">C 1</span>
                    </a>
                    <a class="dropdown-item">
                      <span class="align-middle">C 2</span>
                    </a>
                    <a class="dropdown-item">
                      <span class="align-middle">C 3</span>
                    </a>
                  </div>
                </div>

                {/* Profile */}
                <div class="dropdown d-inline-block drop-list-upper">
                  <button
                    className="dr-btn"
                    id="page-header-user-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {/* <i class="bi bi-person-circle icon-theme-nav"></i> */}
                    <img
                      src={profilePic}
                      width={35}
                      height={35}
                      className="rounded-circle"
                    ></img>
                  </button>

                  <div
                    class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                    aria-labelledby="page-header-user-dropdown"
                  >
                    <a class="dropdown-item dinv">
                      <i class="bi bi-person-circle dinvit"></i>{" "}
                      <span class="align-middle">View Profile</span>
                    </a>
                    <a class="dropdown-item dinv">
                      <i class="bi bi-gear-fill dinvit"></i>{" "}
                      <span class="align-middle">Settings</span>
                    </a>
                    <a class="dropdown-item dinv" onClick={signout}>
                      <i class="bi bi-box-arrow-right dinvit"></i>{" "}
                      <span class="align-middle">Sign out</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </span>
  );
}

export default NavBarCreator;
