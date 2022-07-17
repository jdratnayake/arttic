// import "./Footer.css";

// function Footer() {
//   return (
//     <div className="container-fluid footer-section">
//       <div class="container py-5">
//         <div className="row g-5">
//           {/* <div className="col-2 align-self-center "> */}
//           <div className="col-md-6 col-lg-3"> 
//             <h6 class="text-white mb-4">Get In Touch</h6>
//             <p>
//               <i class="fa fa-map-marker-alt me-3"></i>
//               "12,Marine Drive,Colombo 4,Sri Lanka"
//             </p>
//             <p>
//               <i class="fa fa-phone-alt me-3"></i>
//               "+94 77 123 4567"
//             </p>
//             <p>
//               <i class="fa fa-envelope me-3"></i>
//               "info@example.com"
//             </p>
//             <div class="d-flex pt-2">
//               <a class="btn btn-outline-light btn-social" href>
//                 <i class="fab fa-twitter"></i>
//               </a>
//               <a class="btn btn-outline-light btn-social" href>
//                 <i class="fab fa-twitter"></i>
//               </a>
//               <a class="btn btn-outline-light btn-social" href>
//                 <i class="fab fa-twitter"></i>
//               </a>
//             </div>
//             {/* <div className="links">
//               <ul>
//                 <li>
//                   <a>12,Templers Rd,Colombo,Sri Lanka</a>
//                 </li>
//                 <li>
//                   <a>+94 77 123 4567</a>
//                 </li>
//                 <li>
//                   <a>arttic@example.com</a>
//                 </li>
//                 <li>
//                   <a>Link -4</a>
//                 </li>
//               </ul>
//             </div> */}
//           </div>
//           <div className="col-2 align-self-center ">
//             <h6>Quick Links</h6>
//             <div className="links">
//               <ul>
//                 <li>
//                   <a>About Us</a>
//                 </li>
//                 <li>
//                   <a>Contact Us</a>
//                 </li>
//                 <li>
//                   <a>Privacy and Policy</a>
//                 </li>
//                 <li>
//                   <a>Terms & Conditions </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-8 align-self-center ">
//             <form>
//               <div className="mb-3">
//                 <label for="exampleInputEmail1" className="form-label">
//                   Subscribe to our newsletter
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Submit
//               </button>
//             </form>
//             <div className="social-links">
//               <a>
//                 <div className="social-link-container">
//                   <i className="bi bi-twitter social-link"></i>
//                 </div>
//               </a>
//               <a>
//                 <div className="social-link-container">
//                   <i className="bi bi-linkedin social-link"></i>
//                 </div>
//               </a>
//               <a>
//                 <div className="social-link-container">
//                   <i className="bi bi-facebook social-link"></i>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div>
//           <hr />
//           All right reserved
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;


import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid footer-section">
      <div class="container ">
        <div className="row">
          <div className="col-2 align-self-center ">
            <h6>Get In Touch</h6>
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
          </div>
          <div className="col-2 align-self-center ">
            <h6>Quick Links</h6>
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
          <div className="col-6 align-self-center ">
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
                      <a href>Home</a>
                      <a href>Cookies</a>
                      <a href>Help</a>
                      <a href>FQAs</a>
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