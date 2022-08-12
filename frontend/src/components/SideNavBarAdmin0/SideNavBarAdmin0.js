import {
  useNavigate,
} from "react-router-dom";

import "./SideNavBarAdmin0.css";

function SideNavBarAdmin0() {

  const navigate = useNavigate();

  return (
    <span className="sideNavBarAdmin0">
      <nav id="sidebar">
        <div className="content-top">
          <ul class="list-unstyled">
            <li class="activesb" onClick={() => { navigate("/admin0/dashboard"); }}
            >
              <a>
                <i class="bi bi-speedometer icon-theme"></i>Dashboard
              </a>
            </li>
            <li onClick={() => { navigate("/admin0/userdetails"); }}
            >
              <a>
                <i class="bi bi-people-fill icon-theme"></i>Users
              </a>
            </li>
            <li onClick={() => { navigate("/admin1/reportuser"); }}
            >
              <a>
                <i class="bi bi-file-text icon-theme"></i>Complaints
              </a>
            </li>
            <li onClick={() => { navigate("/admin0/reviewadvertisment"); }}
            >
              <a>
                <i class="bi bi-badge-ad-fill icon-theme"></i>Advertisments
              </a>
            </li>
            <li onClick={() => { navigate("/admin0/transactions"); }}
            >
              <a>
                <i class="bi bi-cash icon-theme"></i>Transactions
              </a>
            </li>
            <li>
              <a>
                <i class="bi bi-gear icon-theme"></i>Settings
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </span>
  );
}

export default SideNavBarAdmin0;
