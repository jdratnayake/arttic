import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import { useSelector } from "react-redux";

import "./SideNavBar.css";

function SideNavBar({ sideNavBarIndex }) {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userInfo);
  const { userId, type, accessToken, openSeaStatus, premiumUser } =
    userInfo.user;

  const [heightVal, setHeightVal] = useState("360px");
  const [clientNormal, setClientNormal] = useState({});
  const [clientPremium, setClientPremium] = useState({});

  const initialFunc = () => {
    if (type === 3) {
      setHeightVal("360px");
      setClientNormal({});
      setClientPremium({});
    } else if (type === 4) {
      setClientNormal({ display: "none" });

      if (premiumUser) {
        setClientPremium({});
        setHeightVal("270px");
      } else {
        setClientPremium({ display: "none" });
        setHeightVal("225px");
      }
    }
  };

  useEffect(() => {
    initialFunc();

    $(".sideNavBarSectionHighlight").each(function (i) {
      const index = parseInt(sideNavBarIndex);

      if (i === index) {
        $(this).addClass("activesb");
      }
    });

    $(".sideNavBarSectionHighlight").click(function (e) {
      // console.log("Hi");
      $(".sideNavBarSectionHighlight").each(function (i) {
        console.log(i);
        $(this).removeClass("activesb");
      });

      $(this).addClass("activesb");
    });

    $(".premium").click(function (e) {
      // console.log("Hi");
      $(".sideNavBarSectionHighlight").each(function (i) {
        console.log(i);
        $(this).removeClass("activesb");
      });

      $("#settingsSection").addClass("activesb");
    });
  }, []);

  useEffect(() => {
    initialFunc();
  }, [userInfo.user]);

  return (
    <span className="sideNavBar">
      <nav id="sidebar" style={{ height: heightVal }}>
        <div className="content-top">
          <ul className="list-unstyled">
            <li
              className="sideNavBarSectionHighlight"
              onClick={() => {
                navigate("/feed");
              }}
            >
              <a>
                <i className="bi bi-rss-fill icon-theme"></i>Feed
              </a>
            </li>
            <li
              className="sideNavBarSectionHighlight"
              onClick={() => {
                navigate("/subscribedcreatorspage");
              }}
            >
              <a>
                <i className="bi bi-people-fill icon-theme"></i>Find Creators
              </a>
            </li>
            <li
              className="sideNavBarSectionHighlight"
              onClick={() => {
                navigate("/favourite");
              }}
            >
              <a>
                <i className="bi bi-star-fill icon-theme"></i>Favourites
              </a>
            </li>
            <li
              className="sideNavBarSectionHighlight"
              onClick={() => {
                navigate("/creator/chat");
              }}
              style={clientPremium}
            >
              <a>
                <i className="bi bi-chat-left-dots-fill icon-theme"></i>
                Chat
              </a>
            </li>

            <li
              className="sideNavBarSectionHighlight"
              onClick={() => {
                navigate("/creator/analytics");
              }}
              style={clientNormal}
            >
              <a>
                <i className="bi bi-bar-chart-fill icon-theme"></i>Analytics
              </a>
            </li>

            <li
              className="sideNavBarSectionHighlight"
              id="settingsSection"
              onClick={() => {
                navigate("/settings");
              }}
            >
              <a>
                <i className="bi bi-gear-fill icon-theme"></i>Settings
              </a>
            </li>
            <li
              className="sideNavBarSectionHighlight"
              onClick={() => {
                navigate("/Advertisment");
              }}
              style={clientNormal}
            >
              <a>
                <i className="bi bi-badge-ad-fill icon-theme"></i>Advertisment
              </a>
            </li>
          </ul>
          <br />
          {!premiumUser && (
            <div
              className="premium"
              onClick={() => {
                navigate("/settings");
              }}
            >
              <div className="content-pre">
                <p className="para">
                  <a>
                    Upgrade to premimum <i className="bi bi-gem icon-pre"></i>
                  </a>
                </p>
                <p className="para">
                  Subscribe premium package to have more benefits
                </p>
              </div>
            </div>
          )}
        </div>
      </nav>
    </span>
  );
}

export default SideNavBar;
