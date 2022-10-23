import { useEffect, useState, React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SearchPanel } from "react-search-panel";

import { API_URL, PROFILE_PIC_URL } from "../../constants/globalConstants";
import { logout } from "../../actions/userActions";

import "./NavBarCreator.css";
import logo from "../../images/logo.png";
import axios from "axios";

function NavBarCreator() {
  const [profilePic, setProfilePic] = useState("");
  const [userId, setUserId] = useState("");

  //const [searchCreators, setSearchCreators] = useState([]);
  //const [allCreators, setAllCreators] = useState([]);
  const [input, setInput] = useState("");
  //const [selectedChoices, setSelectedChoices] = useState(searchCreators);

  const userInfo = useSelector((state) => state.userInfo);
  const { accessToken } = userInfo.user;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //setSearchCreators({ key: "1", description: "janitha" })

  // signout ---------------------------------
  const signout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };
  // end signout -----------------------------

  const searchCreator = (e) => {
    e.preventDefault();
    if (input) {
      navigate("/searchcreatorlist", {
        state: {
          name: input,
        },
      });
    }
  };

  useEffect(() => {
    if (!userInfo.user) {
      navigate("/login");
    } else {
      const { userId, accessToken, profilePhoto } = userInfo.user;
      setProfilePic(PROFILE_PIC_URL + profilePhoto);
      setUserId(userId);
    }
  }, []);

  return (
    <span className="NavBarCreator">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            onClick={() => {
              navigate("/feed");
            }}
          >
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
            <form
              className="d-flex me-auto sebr"
              role="search"
              onSubmit={searchCreator}
            >
              {/* <a className="btn btn-secondary" type="submit">
                                <i className="bi bi-search"></i>
                            </a> */}
              <div class="wrap-sb">
                <div class="search">
                  <button class="searchButton">
                    <i class="bi bi-search"></i>
                  </button>
                  <input
                    type="text"
                    class="searchTerm"
                    placeholder="Search"
                    onChange={(event) => setInput(event.target.value)}
                  />
                </div>
                {/* <div class="">
                  <SearchPanel
                    choices={searchCreators}
                    onChange={event => setInput(event.target.value)}
                    onSelectionChange={setSelectedChoices}
                    onClear={() => setInput("")}
                    placeholder="Search"
                    selectedChoices={selectedChoices}
                    value={input}
                    variant={1}
                    shadow
                    maximumHeight={300}
                  />
                </div> */}
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
                    <span class="notification-bell-btn">3</span>
                  </button>

                  <div
                    class="dropdown-menu dropdown-menu-lg dropdown-menu-end"
                    aria-labelledby="page-header-notifications-dropdown"
                  >
                    <header>
                      <strong>Notifications</strong>
                    </header>
                    <div
                      role="menu"
                      tabindex="-1"
                      class="dropdown-body clearfix"
                      aria-hidden="false"
                    >
                      <div class="notification-list">
                        <ul>
                          <li>
                            <div class="notification-icon">
                              <i class="bi bi-postcard-fill"></i>
                            </div>
                            <div class="notification-subject">
                              <div class="notification-text">
                                You have 2 likes on your recent posts from
                                Mahesh and Lavinka
                              </div>
                              <small>
                                <time
                                  class="time-text"
                                  datetime="2020-03-15T07:08:20.000Z"
                                  title="2020-03-15 07:08"
                                >
                                  {" "}
                                  2 months ago
                                </time>
                              </small>
                            </div>
                          </li>
                          <li>
                            <div class="notification-icon">
                              <i class="bi bi-badge-ad-fill"></i>
                            </div>
                            <div class="notification-subject">
                              <div class="notification-text">
                                You have 2 likes on your recent posts from
                                Mahesh and Lavinka
                              </div>
                              <small>
                                <time
                                  class="time-text"
                                  datetime="2020-03-15T07:08:20.000Z"
                                  title="2020-03-15 07:08"
                                >
                                  {" "}
                                  2 months ago
                                </time>
                              </small>
                            </div>
                          </li>
                          <li>
                            <div class="notification-icon">
                              <i class="bi bi-x-octagon-fill"></i>
                            </div>
                            <div class="notification-subject">
                              <div class="notification-text">
                                You have 2 likes on your recent posts from
                                Mahesh and Lavinka
                              </div>
                              <small>
                                <time
                                  class="time-text"
                                  datetime="2020-03-15T07:08:20.000Z"
                                  title="2020-03-15 07:08"
                                >
                                  {" "}
                                  2 months ago
                                </time>
                              </small>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat */}
                {/* <div class="dropdown d-inline-block drop-list-upper">
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
                    class="dropdown-menu dropdown-menu-lg dropdown-menu-end"
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
                </div> */}

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
                      width={40}
                      height={40}
                      className="rounded-circle"
                    ></img>
                  </button>

                  <div
                    class="dropdown-menu dropdown-menu-end "
                    aria-labelledby="page-header-user-dropdown"
                  >
                    <a
                      class="dropdown-item dinv"
                      onClick={() => {
                        navigate("/creatorprofile");
                      }}
                    >
                      <i class="bi bi-person-circle dinvit"></i>{" "}
                      <span class="align-middle">View Profile</span>
                    </a>
                    <a
                      class="dropdown-item dinv"
                      onClick={() => {
                        navigate("/settings");
                      }}
                    >
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
