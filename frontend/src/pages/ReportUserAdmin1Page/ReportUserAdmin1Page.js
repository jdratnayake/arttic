import { Link } from 'react-router-dom';

import './ReportUserAdmin1Page.css'
import NavBar from "../../components/NavBar/NavBar";
import SideNavBarAdmin0 from "../../components/SideNavBarAdmin0/SideNavBarAdmin0";

function ReportUserAdmin1Page() {
    return (
        <span className="reportUserAdmin1Page">
            <NavBar />
            <div className="wrapperAdmin">
                <SideNavBarAdmin0 />

                <div id="contentAdmin">
                    <div class="card-body admin-page-title date-card">
                        <div class="row">
                            <h4>User complaints</h4>
                        </div>
                    </div>

                    <div class="row">
                        <div className="tableSection">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Date</th>
                                        <th>Description</th>
                                        <th>Category</th>
                                        <th>View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="idStyle">USER__1001</td>
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
                                        <td><span class="badge Nudity reportCategory">Nudity</span></td>
                                        <td><a
                                            href="#"
                                            class="btn btn-dark d-grid mb-2"
                                            data-bs-toggle="modal"
                                            data-bs-target="#planModal"
                                        >
                                            View
                                        </a></td>
                                    </tr>

                                    <tr>
                                        <td className="idStyle">USER__1002</td>
                                        <td>2008/11/29</td>
                                        <td>Pradeep Ratnayake</td>
                                        <td><span class="badge Violence reportCategory">Violence</span></td>
                                        <td class="amount">$520.18</td>
                                    </tr>

                                    <tr>
                                        <td className="idStyle">USER__1003</td>
                                        <td>2008/11/30</td>
                                        <td>Dulitha Ratnayake</td>
                                        <td>Advertisment</td>
                                        <td class="amount">$520.18</td>
                                    </tr>
                                </tbody>
                            </table>
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
                                            <p class="mb-1 fs-8">Mahesh</p>
                                        </div>
                                        <div class="col-6 mb-3">
                                            <h6 class="text-uppercase fs-6 ls-2">Date </h6>
                                            <p class="mb-1 fs-8">2022/07/25</p>
                                        </div>
                                        <div class="col-6 mb-3">
                                            <h6 class="text-uppercase fs-6 ls-2">Category </h6>
                                            <p class="mb-1 fs-8"><span class="badge Nudity reportCategory">Nudity</span></p>
                                        </div>
                                        <div class="col-12 mb-3">
                                            <h6 class="text-uppercase fs-6 ls-2">Description</h6>
                                            <p class="mb-1 fs-8">
                                                It is hidden by default, until the collapse plugin
                                                adds the appropriate classes that we use to style
                                                each element. These classes control the overall
                                                appearance, as well as the showing and hiding via
                                                CSS transitions. You can modify any of this with
                                                custom CSS or overriding our default variables. It's
                                                also worth noting that just about any HTML can go
                                                within the
                                            </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-start p-4 pt-0">
                            <button type="button" class="btn btn-primary">
                                Resolve
                            </button>
                            <Link className="btn-primary" to="/report">Profile</Link>
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
    )
}

export default ReportUserAdmin1Page