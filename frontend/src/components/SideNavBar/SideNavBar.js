import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

import "./SideNavBar.css";

function SideNavBar({ sideNavBarIndex }) {
  const navigate = useNavigate();

  useEffect(() => {
    $(".sideNavBarSectionHighlight").each(function (i) {
      const index = parseInt(sideNavBarIndex);

      if (i === index) {
        $(this).addClass("activesb");
      }
    });

    $(".sideNavBarSectionHighlight").click(function (e) {
      console.log("Hi");
      $(".sideNavBarSectionHighlight").each(function (i) {
        console.log(i);
        $(this).removeClass("activesb");
      });

      $(this).addClass("activesb");
    });
  }, []);

  return (
    <span className="sideNavBar">
      <nav id="sidebar">
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
            <li className="sideNavBarSectionHighlight">
              <a>
                <i className="bi bi-people-fill icon-theme"></i>Find Creators
              </a>
            </li>
            <li className="sideNavBarSectionHighlight"
            onClick={() => {
                navigate("/favourite");
              }}>

              <a>
                <i className="bi bi-star-fill icon-theme"></i>Favourits
              </a>
            </li>
            <li className="sideNavBarSectionHighlight">
              <a>
                <i className="bi bi-chat-left-dots-fill icon-theme"></i>Chat
              </a>
            </li>
            <li
              className="sideNavBarSectionHighlight"
              onClick={() => {
                navigate("/creator/analytics");
              }}
            >
              <a>
                <i className="bi bi-bar-chart-fill icon-theme"></i>Analytics
              </a>
            </li>
            <li
              className="sideNavBarSectionHighlight"
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
            >
              <a>
                <i className="bi bi-badge-ad-fill icon-theme"></i>Advertisment
              </a>
            </li>
          </ul>
          <br />

          <div className="premium">
            <div className="content-pre">
              <p className="para">
                <a>Upgrade to premimum <i className="bi bi-gem icon-pre"></i></a>
              </p>
              <p className="para">
                small description on to have interest on premium package
              </p>
            </div>
          </div>
        </div>
      </nav>
    </span>
  );
}

export default SideNavBar;
