import { useNavigate, Link } from "react-router-dom";

import "./NavBarSignUp.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import logo from "../../images/logo.png";

function NavBarSignUp() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} width="200" height="45" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-end">
            <div className="navbar-item">
              <button
                type="button"
                className="btn btn-primary nav-bar-btn"
                onClick={() => {
                  navigate("/signupoption");
                }}
              >
                <strong>Sign up</strong>
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <strong>Log in</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarSignUp;
