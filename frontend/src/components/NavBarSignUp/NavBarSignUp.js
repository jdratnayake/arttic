import { useNavigate, Link } from "react-router-dom";

import "./NavBarSignUp.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import logo from "../../images/logo.png";

function NavBarSignUp() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-signup navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} width="200" height="45" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-end">
            <div className="navbar-item">
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
