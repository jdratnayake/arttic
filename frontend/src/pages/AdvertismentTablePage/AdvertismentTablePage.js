import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL, ADVERTISMENT_PIC_URL } from "../../constants/globalConstants";
import "./AdvertismentTablePage.css";

function AdvertismentTablePage() {

  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const [advertismentTable, setAdvertismentTable] = useState([]);

  const getAdvertisments = async () => {
    const token = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/advertisment/getadvertismenttable/" + userId, token)
      .then((res) => {
        setAdvertismentTable(res.data);
      });

  };

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

  useEffect(() => {
    getAdvertisments();
  }, [])

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

        <br />

        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link settings-nav-link active"
              id="pending-tab"
              data-bs-toggle="tab"
              data-bs-target="#pending-tab-pane"
              type="button"
              role="tab"
              aria-controls="pending-tab-pane"
              aria-selected="true"
            >
              Pending
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link settings-nav-link "
              id="accepted-tab"
              data-bs-toggle="tab"
              data-bs-target="#accepted-tab-pane"
              type="button"
              role="tab"
              aria-controls="accepted-tab-pane"
              aria-selected="true"
            >
              Accepted
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link settings-nav-link"
              id="old-tab"
              data-bs-toggle="tab"
              data-bs-target="#old-tab-pane"
              type="button"
              role="tab"
              aria-controls="old-tab-pane"
              aria-selected="false"
            >
              Old
            </button>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane complain-tab fade show active"
            id="pending-tab-pane"
            role="tabpanel"
            aria-labelledby="pending-tab"
            tabindex="0"
          >
            <div class="row mx-3 pt-4 pb-4">
              <div className="tableSection">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
                      <th>Img</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {advertismentTable.map((ad) => (
                      <tr key={ad.advertisementId}>
                        <td className="idStyle">{ad.advertisementId}</td>
                        <td>{new Date(ad.createdDate).toLocaleDateString()}</td>
                        <td>
                          <img src={ADVERTISMENT_PIC_URL + ad.contentLink} />
                        </td>
                        <td>
                          <p className="userComplaintDescription">
                            {ad.description}
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
                    ))}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            class="tab-pane complain-tab fade"
            id="accepted-tab-pane"
            role="tabpanel"
            aria-labelledby="accepted-tab"
            tabindex="0"
          >
            <div class="row mx-3 pt-4 pb-4">
              <div className="tableSection">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
                      <th>Img</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {advertismentTable.map((ad) => (
                      <tr key={ad.advertisementId}>
                        <td className="idStyle">{ad.advertisementId}</td>
                        <td>{new Date(ad.createdDate).toLocaleDateString()}</td>
                        <td>
                          <img src={ADVERTISMENT_PIC_URL + ad.contentLink} />
                        </td>
                        <td>
                          <p className="userComplaintDescription">
                            {ad.description}
                          </p>
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
                            Pay
                          </a>
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            class="tab-pane complain-tab fade"
            id="old-tab-pane"
            role="tabpanel"
            aria-labelledby="old-tab"
            tabindex="0"
          >
            <div class="row mx-3 pt-4 pb-4">
              <div className="tableSection">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
                      <th>Img</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {advertismentTable.map((ad) => (
                      <tr key={ad.advertisementId}>
                        <td className="idStyle">{ad.advertisementId}</td>
                        <td>{new Date(ad.createdDate).toLocaleDateString()}</td>
                        <td>
                          <img src={ADVERTISMENT_PIC_URL + ad.contentLink} />
                        </td>
                        <td>
                          <p className="userComplaintDescription">
                            {ad.description}
                          </p>
                        </td>
                        <td>Old</td>
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
                    ))}

                  </tbody>
                </table>
              </div>
            </div>
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
