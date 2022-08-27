import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

import "./AdvertismentTablePage.css";

function AdvertismentTablePage() {
  const navigate = useNavigate();

  const [complain, setComplain] = useState("");
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const handleClick = (obj) => {
    setComplain(
      "You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"
    );
    setUsername("Tony stark");
    setDate("07/30/2022");
    setCategory("Violence");
  };

  return (
    <span className="AdvertismentTablePage">
      <div class="col-md-12 col-xs-12 card">
        <div class=" mb-6">
          <h4 class="mb-1">Advertisments</h4>
        </div>

        <div className="row d-flex justify-content-end">
          <div class="col-md-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/Advertisment/form");
              }}
            >
              <strong>New Advertisment</strong>
            </button>
          </div>
        </div>

        <div class="row mx-3 pt-4 pb-4">
          <div className="tableSection">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Date</th>
                  <th>Img</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="idStyle">1</td>
                  <td>2008/11/28</td>
                  <td>
                    <img src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/820/cached.offlinehbpl.hbpl.co.uk/news/SUC/nft-unlock.jpg" />
                  </td>
                  <td>
                    <p className="userComplaintDescription">
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                    </p>
                  </td>
                  <td>Pending</td>
                  <td>
                    <a
                      onClick={() => handleClick({ type: "Post" })}
                      href="#"
                      class="btn btn-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#PostModal"
                    >
                      View
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="idStyle">2</td>
                  <td>2008/11/29</td>
                  <td>
                    <img src="https://img.freepik.com/free-vector/set-pixelated-workers_23-2147571601.jpg?w=740&t=st=1661336484~exp=1661337084~hmac=06b141cd5609510ad5932df89cc0e356b49cbe67f24015c755822c26b2b8dab9" />
                  </td>
                  <td>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style
                  </td>
                  <td>Accepted</td>
                  <td>
                    <a
                      onClick={() => handleClick({ type: "Post" })}
                      href="#"
                      class="btn btn-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#PostModal"
                    >
                      View
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="idStyle">3</td>
                  <td>2008/11/30</td>
                  <td>
                    <img src="https://drive.google.com/uc?export=view&id=1IFgWbb4Pgt3jNVIuQezHHpSl6sseO0Zk" />
                  </td>
                  <td>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style
                  </td>
                  <td>Pending</td>
                  <td>
                    <a
                      onClick={() =>
                        handleClick({ id: 7, type: "Advertisment" })
                      }
                      href="#"
                      class="btn btn-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#PostModal"
                    >
                      View
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* update plan modal */}
      <div
        class="modal fade"
        id="PostModal"
        tabindex="-1"
        aria-labelledby="planModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header p-3">
              <div>
                <h4 class="mb-0" id="planModalLabel">
                  Advertisment
                </h4>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body p-4">
              <div className="row"></div>
            </div>
            <div class="modal-footer justify-content-start p-4 pt-2">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default AdvertismentTablePage;
