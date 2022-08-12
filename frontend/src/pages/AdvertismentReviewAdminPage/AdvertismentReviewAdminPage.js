import "./AdvertismentReviewAdminPage.css";

import { useState } from "react";

import SummaryCard from "../../components/SummaryCard/SummaryCard";

function AdvertismentReviewAdminPage() {

    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [category, setcategory] = useState("");
    const [date, setDate] = useState("");
    const [stdate, setstDate] = useState("");
    const [endate, setenDate] = useState("");
    const [vpd, setvpd] = useState("");
    const [price, setprice] = useState("");
    const [adimage, setadimage] = useState("");

    const handleClick = (obj) => {
        settitle("Physics Theory 2021");
        setdescription(
            "You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"
        );
        setcategory("Tony stark");
        setDate("07/30/2022");
        setstDate("08/30/2022");
        setenDate("09/30/2022");
        setvpd("100");
        setprice("$ 2500");
        setadimage("https://drive.google.com/uc?export=view&id=1KOZ9Yt9tc5qgiYjTdu9D-pnURTlRj_NU");
    };

    return (
        <span className="AdvertismentReviewAdminPage">
            <div class="card-body admin-page-title date-card">
                <div class="row">
                    <h4>Advertisments</h4>
                </div>
            </div>

            <div class="card-body date-card">
                <div class="row">
                    <div class="col">
                        <SummaryCard cardHeading="Requests" numberValue="100" />
                    </div>
                    <div class="col">
                        <SummaryCard cardHeading="Active" numberValue="1, 500" />
                    </div>
                    <div class="col">
                        <SummaryCard cardHeading="Old" numberValue="1, 000" />
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="row">
                    <div className="tableSection">

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
                                    Requests
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
                                    Active
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
                                    Old
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
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Image</th>
                                                <th>Email</th>
                                                <th>Type</th>
                                                <th>Status</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="idStyle">1</td>
                                                <td>
                                                    <img src="https://drive.google.com/uc?export=view&id=1IFgWbb4Pgt3jNVIuQezHHpSl6sseO0Zk" />
                                                </td>
                                                <td>janitharatnayake@gmail.com</td>
                                                <td>Creator</td>
                                                <td>
                                                    <span class="status status-pending">Pending</span>
                                                </td>
                                                <td class="amount">
                                                    <a
                                                        onClick={() =>
                                                            handleClick({ id: 100})
                                                        }
                                                        href="#"
                                                        class="btn btn-secondary openComplaintDialog"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#ViewRequestAdModal"
                                                    >
                                                        View
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="idStyle">2</td>
                                                <td>
                                                    <img src="https://drive.google.com/uc?export=view&id=1f4xC0G0UeGqQxrjbKt12C0gP3RGkA8y3" />
                                                </td>
                                                <td>pradeepratnayake@gmail.com</td>
                                                <td>Admin</td>
                                                <td>
                                                    <span class="status status-pending">Pending</span>
                                                </td>
                                                <td class="amount">
                                                    <a
                                                        onClick={() =>
                                                            handleClick({ id: 100})
                                                        }
                                                        href="#"
                                                        class="btn btn-secondary openComplaintDialog"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#ViewRequestAdModal"
                                                    >
                                                        View
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="idStyle">3</td>
                                                <td>
                                                    <img src="https://drive.google.com/uc?export=view&id=1KOZ9Yt9tc5qgiYjTdu9D-pnURTlRj_NU" />
                                                </td>
                                                <td>dulitharatnayake@gmail.com</td>
                                                <td>Follower</td>
                                                <td>
                                                    <span class="status status-pending">Pending</span>
                                                </td>
                                                <td class="amount">
                                                    <a
                                                        onClick={() =>
                                                            handleClick({ id: 100})
                                                        }
                                                        href="#"
                                                        class="btn btn-secondary openComplaintDialog"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#ViewRequestAdModal"
                                                    >
                                                        View
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Image</th>
                                                <th>Email</th>
                                                <th>Type</th>
                                                <th>Status</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="idStyle">1</td>
                                                <td>
                                                    <img src="https://drive.google.com/uc?export=view&id=1IFgWbb4Pgt3jNVIuQezHHpSl6sseO0Zk" />
                                                </td>
                                                <td>janitharatnayake@gmail.com</td>
                                                <td>Creator</td>
                                                <td>
                                                    <span class="status status-paid">Active</span>
                                                </td>
                                                <td class="amount">
                                                    <a
                                                        onClick={() =>
                                                            handleClick({ id: 100})
                                                        }
                                                        href="#"
                                                        class="btn btn-secondary openComplaintDialog"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#ViewActiveAdModal"
                                                    >
                                                        View
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="idStyle">2</td>
                                                <td>
                                                    <img src="https://drive.google.com/uc?export=view&id=1f4xC0G0UeGqQxrjbKt12C0gP3RGkA8y3" />
                                                </td>
                                                <td>pradeepratnayake@gmail.com</td>
                                                <td>Admin</td>
                                                <td>
                                                    <span class="status status-paid">Active</span>
                                                </td>
                                                <td class="amount">
                                                    <a
                                                        onClick={() =>
                                                            handleClick({ id: 100})
                                                        }
                                                        href="#"
                                                        class="btn btn-secondary openComplaintDialog"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#ViewActiveAdModal"
                                                    >
                                                        View
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="idStyle">3</td>
                                                <td>
                                                    <img src="https://drive.google.com/uc?export=view&id=1KOZ9Yt9tc5qgiYjTdu9D-pnURTlRj_NU" />
                                                </td>
                                                <td>dulitharatnayake@gmail.com</td>
                                                <td>Follower</td>
                                                <td>
                                                    <span class="status status-paid">Active</span>
                                                </td>
                                                <td class="amount">
                                                    <a
                                                        onClick={() =>
                                                            handleClick({ id: 100})
                                                        }
                                                        href="#"
                                                        class="btn btn-secondary openComplaintDialog"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#ViewActiveAdModal"
                                                    >
                                                        View
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Image</th>
                                                <th>Email</th>
                                                <th>Type</th>
                                                <th>Status</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="idStyle">1</td>
                                                <td>
                                                    <img src="https://drive.google.com/uc?export=view&id=1IFgWbb4Pgt3jNVIuQezHHpSl6sseO0Zk" />
                                                </td>
                                                <td>janitharatnayake@gmail.com</td>
                                                <td>Creator</td>
                                                <td>
                                                    <span class="status status-unpaid">Old</span>
                                                </td>
                                                <td class="amount">
                                                    <a
                                                        onClick={() =>
                                                            handleClick({ id: 100})
                                                        }
                                                        href="#"
                                                        class="btn btn-secondary openComplaintDialog"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#ViewOldAdnModal"
                                                    >
                                                        View
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="idStyle">2</td>
                                                <td>
                                                    <img src="https://drive.google.com/uc?export=view&id=1f4xC0G0UeGqQxrjbKt12C0gP3RGkA8y3" />
                                                </td>
                                                <td>pradeepratnayake@gmail.com</td>
                                                <td>Admin</td>
                                                <td>
                                                    <span class="status status-unpaid">Old</span>
                                                </td>
                                                <td class="amount">
                                                    <a
                                                        onClick={() =>
                                                            handleClick({ id: 100})
                                                        }
                                                        href="#"
                                                        class="btn btn-secondary openComplaintDialog"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#ViewOldAdnModal"
                                                    >
                                                        View
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="idStyle">3</td>
                                                <td>
                                                    <img src="https://drive.google.com/uc?export=view&id=1KOZ9Yt9tc5qgiYjTdu9D-pnURTlRj_NU" />
                                                </td>
                                                <td>dulitharatnayake@gmail.com</td>
                                                <td>Follower</td>
                                                <td>
                                                    <span class="status status-unpaid">Old</span>
                                                </td>
                                                <td class="amount">
                                                    <a
                                                        onClick={() =>
                                                            handleClick({ id: 100})
                                                        }
                                                        href="#"
                                                        class="btn btn-secondary openComplaintDialog"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#ViewOldAdnModal"
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

            {/* update plan modal request ad*/}
            <div
                class="modal fade"
                id="ViewRequestAdModal"
                tabindex="-1"
                aria-labelledby="planModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header p-3">
                            <div>
                                <h4 class="mb-0" id="planModalLabel">
                                    Advertisment Request
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
                                        <h6 class="text-uppercase fs-6 ls-2">{title}</h6>
                                        <p class="mb-1 fs-8">{date}</p>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <img src={adimage} className="modal-image"/>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <h6 class="text-uppercase fs-6 ls-2">Description</h6>
                                        <p class="mb-1 fs-8">{description}</p>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <h6 class="text-uppercase fs-6 ls-2">Duration</h6>
                                        <p class="mb-1 fs-8">{stdate} - {endate}</p>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <h6 class="text-uppercase fs-6 ls-2">Category</h6>
                                        <p class="mb-1 fs-8">{category}</p>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <h6 class="text-uppercase fs-6 ls-2">Views per Day</h6>
                                        <p class="mb-1 fs-8">{vpd}</p>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <h6 class="text-uppercase fs-6 ls-2">Price</h6>
                                        <p class="mb-1 fs-8">{price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-start p-4 pt-2">
                            <button type="button" class="btn btn-danger">
                                Publish
                            </button>
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

             {/* update plan modal active ad*/}
             <div
                class="modal fade"
                id="ViewActiveAdModal"
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
                                        <h6 class="text-uppercase fs-6 ls-2">{title}</h6>
                                        <p class="mb-1 fs-8">{date}</p>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <img src={adimage} className="modal-image"/>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <h6 class="text-uppercase fs-6 ls-2">Description</h6>
                                        <p class="mb-1 fs-8">{description}</p>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <h6 class="text-uppercase fs-6 ls-2">Duration</h6>
                                        <p class="mb-1 fs-8">{stdate} - {endate}</p>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <h6 class="text-uppercase fs-6 ls-2">Category</h6>
                                        <p class="mb-1 fs-8">{category}</p>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <h6 class="text-uppercase fs-6 ls-2">Views per Day</h6>
                                        <p class="mb-1 fs-8">{vpd}</p>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <h6 class="text-uppercase fs-6 ls-2">Price</h6>
                                        <p class="mb-1 fs-8">{price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-start p-4 pt-2">
                            <button type="button" class="btn btn-danger">
                                Unpublish
                            </button>
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

            {/* update plan modal old ad */}
            <div
                class="modal fade"
                id="ViewOldAdnModal"
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
                                        <h6 class="text-uppercase fs-6 ls-2">{title}</h6>
                                        <p class="mb-1 fs-8">{date}</p>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <img src={adimage} className="modal-image"/>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <h6 class="text-uppercase fs-6 ls-2">Description</h6>
                                        <p class="mb-1 fs-8">{description}</p>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <h6 class="text-uppercase fs-6 ls-2">Duration</h6>
                                        <p class="mb-1 fs-8">{stdate} - {endate}</p>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <h6 class="text-uppercase fs-6 ls-2">Category</h6>
                                        <p class="mb-1 fs-8">{category}</p>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <h6 class="text-uppercase fs-6 ls-2">Views per Day</h6>
                                        <p class="mb-1 fs-8">{vpd}</p>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <h6 class="text-uppercase fs-6 ls-2">Price</h6>
                                        <p class="mb-1 fs-8">{price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-start p-4 pt-2">
                            <button type="button" class="btn btn-danger">
                                Delete
                            </button>
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

export default AdvertismentReviewAdminPage;