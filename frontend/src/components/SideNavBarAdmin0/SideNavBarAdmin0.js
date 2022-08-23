import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

import "./SideNavBarAdmin0.css";

function SideNavBarAdmin0({ sideNavBarIndex }) {
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
    <span className="sideNavBarAdmin0">
      <nav id="sidebar">
        <div className="content-top">
          <ul class="list-unstyled">
            <li
              className="sideNavBarSectionHighlight"
              onClick={() => {
                navigate("/admin0/dashboard");
              }}
            >
              <a>
                <i class="bi bi-speedometer icon-theme"></i>Dashboard
              </a>
            </li>
            <li
              className="sideNavBarSectionHighlight"
              onClick={() => {
                navigate("/admin0/accountmanage");
              }}
            >
              <a>
                <i class="bi bi-people-fill icon-theme"></i>Users
              </a>
            </li>
            <li
              className="sideNavBarSectionHighlight"
              onClick={() => {
                navigate("/admin1/reportuser");
              }}
            >
              <a>
                <i class="bi bi-clipboard-x-fill icon-theme"></i>Complaints
              </a>
            </li>
            <li
              className="sideNavBarSectionHighlight"
              onClick={() => {
                navigate("/admin0/reviewadvertisment");
              }}
            >
              <a>
                <i class="bi bi-badge-ad-fill icon-theme"></i>Advertisments
              </a>
            </li>
            <li
              className="sideNavBarSectionHighlight"
              onClick={() => {
                navigate("/admin0/transactions");
              }}
            >
              <a>
                <i class="bi bi-wallet-fill icon-theme"></i>Transactions
              </a>
            </li>
            <li className="sideNavBarSectionHighlight">
              <a>
                <i class="bi bi-gear-fill icon-theme"></i>Settings
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </span>
  );
}

export default SideNavBarAdmin0;
