import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid footer-section">
      <div class="container ">
        <div className="row">
          <div className="col-2 align-self-center ">
            <h6>Section</h6>
            <div className="links">
              <ul>
                <li>
                  <a>Link -1</a>
                </li>
                <li>
                  <a>Link -2</a>
                </li>
                <li>
                  <a>Link -3</a>
                </li>
                <li>
                  <a>Link -4</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 align-self-center ">
            <h6>Section</h6>
            <div className="links">
              <ul>
                <li>
                  <a>Link -1</a>
                </li>
                <li>
                  <a>Link -2</a>
                </li>
                <li>
                  <a>Link -3</a>
                </li>
                <li>
                  <a>Link -4</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-8 align-self-center ">
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Subscribe to our newsletter
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <div className="social-links">
              <a>
                <div className="social-link-container">
                  <i className="bi bi-twitter social-link"></i>
                </div>
              </a>
              <a>
                <div className="social-link-container">
                  <i className="bi bi-linkedin social-link"></i>
                </div>
              </a>
              <a>
                <div className="social-link-container">
                  <i className="bi bi-facebook social-link"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <hr />
          All right reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
