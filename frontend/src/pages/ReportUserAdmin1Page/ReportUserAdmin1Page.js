import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useState } from "react";

import "./ReportUserAdmin1Page.css";
import NavBar from "../../components/NavBar/NavBar";
import SideNavBarAdmin0 from "../../components/SideNavBarAdmin0/SideNavBarAdmin0";

function ReportUserAdmin1Page() {
  const [complain, setComplain] = useState("");
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [path, setPath] = useState("");

  const handleClick = (obj) => {
    setComplain(
      "You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"
    );
    setUsername("Tony stark");
    setDate("07/30/2022");
    setCategory("Violence");
    setPath("/admin1/report" + obj.type + "/" + obj.id);
    console.log(obj, path);
  };

  return (
    <span className="reportUserAdmin1Page">
      <NavBar />
      <div className="wrapperAdmin">
        <SideNavBarAdmin0 />

        <div id="contentAdmin">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link settings-nav-link active"
                id="user-tab"
                data-bs-toggle="tab"
                data-bs-target="#user-tab-pane"
                type="button"
                role="tab"
                aria-controls="user-tab-pane"
                aria-selected="true"
              >
                User
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link settings-nav-link"
                id="post-tab"
                data-bs-toggle="tab"
                data-bs-target="#post-tab-pane"
                type="button"
                role="tab"
                aria-controls="post-tab-pane"
                aria-selected="false"
              >
                Post
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link settings-nav-link"
                id="comment-tab"
                data-bs-toggle="tab"
                data-bs-target="#comment-tab-pane"
                type="button"
                role="tab"
                aria-controls="comment-tab-pane"
                aria-selected="false"
              >
                Comment
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link settings-nav-link"
                id="advertisment-tab"
                data-bs-toggle="tab"
                data-bs-target="#advertisment-tab-pane"
                type="button"
                role="tab"
                aria-controls="advertisment-tab-pane"
                aria-selected="false"
              >
                Advertisment
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane complain-tab fade show active"
              id="user-tab-pane"
              role="tabpanel"
              aria-labelledby="user-tab"
              tabindex="0"
            >
              <div class="row mx-3 pt-4 pb-4">
                <div className="tableSection">
                  <table>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="idStyle">1</td>
                        <td>2008/11/28</td>
                        <td>
                          <p className="userComplaintDescription">
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the
                          </p>
                        </td>
                        <td>Nudity</td>
                        <td>
                          <a
                            onClick={() =>
                              handleClick({ id: 100, type: "User" })
                            }
                            href="#"
                            class="btn btn-dark d-grid mb-2 openComplaintDialog"
                            data-bs-toggle="modal"
                            data-bs-target="#complainModal"
                          >
                            View
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td className="idStyle">2</td>
                        <td>2008/11/29</td>
                        <td>Pradeep Ratnayake</td>
                        <td>Violence</td>
                        <td>
                          <a
                            onClick={() =>
                              handleClick({ id: 100, type: "User" })
                            }
                            href="#"
                            class="btn btn-dark d-grid mb-2"
                            data-bs-toggle="modal"
                            data-bs-target="#complainModal"
                          >
                            View
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td className="idStyle">3</td>
                        <td>2008/11/30</td>
                        <td>Dulitha Ratnayake</td>
                        <td>Advertisment</td>
                        <td>
                          <a
                            onClick={() =>
                              handleClick({ id: 100, type: "User" })
                            }
                            href="#"
                            class="btn btn-dark d-grid mb-2"
                            data-bs-toggle="modal"
                            data-bs-target="#complainModal"
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
            <div
              class="tab-pane complain-tab fade"
              id="post-tab-pane"
              role="tabpanel"
              aria-labelledby="post-tab"
              tabindex="0"
            >
              <div class="row mx-3 pt-4 pb-4">
                <div className="tableSection">
                  <table>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="idStyle">1</td>
                        <td>2008/11/28</td>
                        <td>
                          <p className="userComplaintDescription">
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the
                          </p>
                        </td>
                        <td>Nudity</td>
                        <td>
                          <a
                            onClick={() =>
                              handleClick({ id: 100, type: "Post" })
                            }
                            href="#"
                            class="btn btn-dark d-grid mb-2 openComplaintDialog"
                            data-bs-toggle="modal"
                            data-bs-target="#complainModal"
                          >
                            View
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td className="idStyle">2</td>
                        <td>2008/11/29</td>
                        <td>Pradeep Ratnayake</td>
                        <td>Violence</td>
                        <td>
                          <a
                            onClick={() =>
                              handleClick({ id: 100, type: "Post" })
                            }
                            href="#"
                            class="btn btn-dark d-grid mb-2"
                            data-bs-toggle="modal"
                            data-bs-target="#complainModal"
                          >
                            View
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td className="idStyle">3</td>
                        <td>2008/11/30</td>
                        <td>Dulitha Ratnayake</td>
                        <td>Advertisment</td>
                        <td>
                          <a
                            onClick={() =>
                              handleClick({ id: 100, type: "Post" })
                            }
                            href="#"
                            class="btn btn-dark d-grid mb-2"
                            data-bs-toggle="modal"
                            data-bs-target="#complainModal"
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
            <div
              class="tab-pane complain-tab fade"
              id="comment-tab-pane"
              role="tabpanel"
              aria-labelledby="comment-tab"
              tabindex="0"
            >
              <div class="row mx-3 pt-4 pb-4">
                <div className="tableSection">
                  <table>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="idStyle">1</td>
                        <td>2008/11/28</td>
                        <td>
                          <p className="userComplaintDescription">
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the
                          </p>
                        </td>
                        <td>Nudity</td>
                        <td>
                          <a
                            onClick={() =>
                              handleClick({ id: 90, type: "Comment" })
                            }
                            href="#"
                            class="btn btn-dark d-grid mb-2 openComplaintDialog"
                            data-bs-toggle="modal"
                            data-bs-target="#complainModal"
                          >
                            View
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td className="idStyle">2</td>
                        <td>2008/11/29</td>
                        <td>Pradeep Ratnayake</td>
                        <td>Violence</td>
                        <td>
                          <a
                            onClick={() =>
                              handleClick({ id: 80, type: "Comment" })
                            }
                            href="#"
                            class="btn btn-dark d-grid mb-2"
                            data-bs-toggle="modal"
                            data-bs-target="#complainModal"
                          >
                            View
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td className="idStyle">3</td>
                        <td>2008/11/30</td>
                        <td>Dulitha Ratnayake</td>
                        <td>Advertisment</td>
                        <td>
                          <a
                            onClick={() =>
                              handleClick({ id: 70, type: "Comment" })
                            }
                            href="#"
                            class="btn btn-dark d-grid mb-2"
                            data-bs-toggle="modal"
                            data-bs-target="#complainModal"
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
            <div
              class="tab-pane complain-tab fade"
              id="advertisment-tab-pane"
              role="tabpanel"
              aria-labelledby="advertisment-tab"
              tabindex="0"
            >
              <div class="row mx-3 pt-4 pb-4">
                <div className="tableSection">
                  <table>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="idStyle">1</td>
                        <td>2008/11/28</td>
                        <td>
                          <p className="userComplaintDescription">
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the
                          </p>
                        </td>
                        <td>Nudity</td>
                        <td>
                          <a
                            onClick={() =>
                              handleClick({ id: 1, type: "Advertisment" })
                            }
                            href="#"
                            class="btn btn-dark d-grid mb-2 openComplaintDialog"
                            data-bs-toggle="modal"
                            data-bs-target="#complainModal"
                          >
                            View
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td className="idStyle">2</td>
                        <td>2008/11/29</td>
                        <td>Pradeep Ratnayake</td>
                        <td>Violence</td>
                        <td>
                          <a
                            onClick={() =>
                              handleClick({ id: 2, type: "Advertisment" })
                            }
                            href="#"
                            class="btn btn-dark d-grid mb-2"
                            data-bs-toggle="modal"
                            data-bs-target="#complainModal"
                          >
                            View
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td className="idStyle">3</td>
                        <td>2008/11/30</td>
                        <td>Dulitha Ratnayake</td>
                        <td>Nudity</td>
                        <td>
                          <a
                            onClick={() =>
                              handleClick({ id: 7, type: "Advertisment" })
                            }
                            href="#"
                            class="btn btn-dark d-grid mb-2"
                            data-bs-toggle="modal"
                            data-bs-target="#complainModal"
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
          </div>
        </div>
      </div>
      {/* update plan modal */}
      <div
        class="modal fade"
        id="planModal"
        tabindex="-1"
        aria-labelledby="planModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header p-3">
              <div>
                <h4 class="mb-0" id="planModalLabel">
                  Complain
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
              <div class="card border shadow-none border-bottom p-4">
                <div class="row">
                  <div class="col-12 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Username</h6>
                    <p class="mb-1 fs-8">{username}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Date </h6>
                    <p class="mb-1 fs-8">{date}</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Category </h6>
                    <p class="mb-1 fs-8">{category}</p>
                  </div>
                  <div class="col-12 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Description</h6>
                    <p class="mb-1 fs-8">{complain}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-start p-4 pt-2">
              <button type="button" class="btn btn-danger">
                Resolve
              </button>
              <Link className="btn btn-primary" to={path} target="_blank">
                {" "}
                View{" "}
              </Link>
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

export default ReportUserAdmin1Page;
