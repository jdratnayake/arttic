import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState, React } from "react";

import "./NavBar.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import logo from "../../images/logo.png";

function NavBar() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const searchCreator = (e) => {
    e.preventDefault();
    if (input) {
      navigate('/searchcreators', {
        state: {
          name: input,
        }
      });
    }

  };

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
          <form className="d-flex me-auto sebr" role="search" onSubmit={searchCreator}>
            <div class="wrap-sb">
              <div class="search">
                <button class="searchButton">
                  <i class="bi bi-search"></i>
                </button>
                <input type="text" class="searchTerm" placeholder="Search" onChange={event => setInput(event.target.value)} />

              </div>
            </div>
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
