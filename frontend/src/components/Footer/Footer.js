import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid footer-section">
      <div class="container py-5">
        <div className="row g-5">
          {/* <div className="col-4 align-self-center "> */}
          <div className="col-md-6 col-lg-3">
            <h5 class="text-white mb-4">Get In Touch</h5>
            <div className="links">
              <ul>
                <li>
                  <a><i class="bi bi-house-door me-3"></i>12,Marine Drvie,Colombo,Sri Lanka</a>
                </li>
                <li>
                  <a><i class="bi bi-telephone me-3"></i>+94 77 123 4567</a>
                </li>
                <li>
                <a><i class="bi bi-telephone me-3"></i>+94 77 123 4555</a>
                </li>
                <li>
                <a><i class="bi bi-envelope me-3"></i>arrtic@exmaple.com</a>
                </li>
              </ul>
            </div>
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
          {/* <div className="col-2 align-self-center "> */}
          <div className="col-md-6 col-lg-3">
            <h5 class="text-white mb-4">Quick Link</h5>
            <div className="links">
              <ul>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
                <li>
                  <a>Privacy Policy</a>
                </li>
                <li>
                  <a>Terms and Conditions</a>
                </li>
              </ul>
            </div>
          </div>
           {/* <div className="col-2 align-self-center "> */}
           <div className="col-md-6 col-lg-3">
            <h5 class="text-white mb-4">Quick Link</h5>
            <div className="links">
              <ul>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
                <li>
                  <a>Privacy Policy</a>
                </li>
                <li>
                  <a>Terms and Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-6 align-self-center "> */}
          <div className="col-md-6 col-lg-3">
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
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>

              </div>
            </form>
          </div>
        </div>
        {/* <div>
          <hr />
          All right reserved
        </div> */}
        <div class="container">
           <div class="copyright">
              <div class="row">
                  <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    "©" 
                    <a class="border-bottom" href="#">Arttic</a>
                    ", All Right Reserved"
                  </div>
                  <div class="col-md-6 text-center text-md-end">
                    <div class="footer-menu">
                      <a class="link" href>Home</a>
                      <a class="link" href>Cookies</a>
                      <a class="link" href>Help</a>
                      <a class="link" href>FQAs</a>
                    </div>
                  </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
