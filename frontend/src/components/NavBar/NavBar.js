import { useNavigate } from "react-router-dom";

import "./NavBar.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import logo from "../../images/logo.png";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} width="200" height="45" />
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link nav-link-active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item nav-bar-item">
              <a className="nav-link" href="#">
                Creators
              </a>
            </li>
            <li className="nav-item nav-bar-item">
              <a className="nav-link" href="#">
                Resources
              </a>
            </li>
            <li className="nav-item nav-bar-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <form className="search-form" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            {/* <button className="btn btn-secondary" type="submit">
                                <i className="bi bi-search"></i>
                            </button> */}
          </form>
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

export default NavBar;
