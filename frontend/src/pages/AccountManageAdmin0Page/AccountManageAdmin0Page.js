import { Link } from "react-router-dom";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import "react-datepicker/dist/react-datepicker.css";

import SummaryCard from "../../components/SummaryCard/SummaryCard";

import "./AccountManageAdmin0Page.css";

function AccountManageAdmin0Page() {
  const lineChartValues1 = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        title: {
          text: "Time",
          style: {
            fontFamily: "Poppins",
          },
        },
      },
      yaxis: {
        title: {
          text: "Count",
          style: {
            fontFamily: "Poppins",
          },
        },
      },
      title: {
        text: "Creator Growth",
        align: "left",
        style: {
          fontFamily: "Poppins",
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };
  const lineChartValues2 = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        title: {
          text: "Time",
          style: {
            fontFamily: "Poppins",
          },
        },
      },
      yaxis: {
        title: {
          text: "Count",
          style: {
            fontFamily: "Poppins",
          },
        },
      },
      title: {
        text: "Follower Growth",
        align: "left",
        style: {
          fontFamily: "Poppins",
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };
  return (
    <span className="AccountManageAdmin0Page">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link settings-nav-link active"
            id="overview-tab"
            data-bs-toggle="tab"
            data-bs-target="#overview-tab-pane"
            type="button"
            role="tab"
            aria-controls="overview-tab-pane"
            aria-selected="true"
          >
            Overview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link settings-nav-link"
            id="blocked-tab"
            data-bs-toggle="tab"
            data-bs-target="#blocked-tab-pane"
            type="button"
            role="tab"
            aria-controls="blocked-tab-pane"
            aria-selected="true"
          >
            Blocked users
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link settings-nav-link"
            id="admin-1-tab"
            data-bs-toggle="tab"
            data-bs-target="#admin-1-tab-pane"
            type="button"
            role="tab"
            aria-controls="admin-1-tab-pane"
            aria-selected="true"
          >
            Admin 1
          </button>
        </li>
      </ul>
      <div class="tab-content mb-5" id="AccountManage">
        <div
          class="tab-pane complain-tab fade show active p-4"
          id="overview-tab-pane"
          role="tabpanel"
          aria-labelledby="overview-tab"
          tabindex="0"
        >
          <div class="card-body date-card">
            <div class="row">
              <div class="col">
                <SummaryCard cardHeading="Admin" numberValue="10, 000" />
              </div>
              <div class="col">
                <SummaryCard cardHeading="Creator" numberValue="100, 000" />
              </div>
              <div class="col">
                <SummaryCard cardHeading="Follower" numberValue="1, 000, 000" />
              </div>
            </div>
            <div class="row pt-3">
              <div class="col-6 lineChartStyle title">
                <div class="card-body">
                  <Chart
                    options={lineChartValues1.options}
                    series={lineChartValues1.series}
                    type="line"
                    className="lineChartVerticleStyle"
                  />
                </div>
              </div>
              <div class="col-6 lineChartStyle title">
                <div class="card-body">
                  <Chart
                    options={lineChartValues2.options}
                    series={lineChartValues2.series}
                    type="line"
                    className="lineChartVerticleStyle"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane complain-tab fade"
          id="blocked-tab-pane"
          role="tabpanel"
          aria-labelledby="blocked-tab"
          tabindex="0"
        >
          <div class="card-body mx-3 pt-4 pb-4">
            <div class="row">
              <div class="col">
                <button type="button" class="btn btn-primary margin-right-5">
                  All
                </button>
                <button type="button" class="btn btn-primary margin-right-5">
                  Creators
                </button>
                <button type="button" class="btn btn-primary">
                  Followers
                </button>
              </div>
            </div>

            <div class="row pt-2">
              <div class="col">
                <form className="search-form" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                  <button className="btn btn-secondary" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class="card-body mx-3 pt-4 pb-4">
            <div class="row">
              <div className="tableSection">
                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Image</th>
                      <th>Email</th>
                      <th>Type</th>
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
                      <td class="amount">
                        <Link
                          className="btn btn-secondary"
                          to={"/admin1/reportUser/" + 100}
                          target="_blank"
                        >
                          {" "}
                          View{" "}
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="idStyle">2</td>
                      <td>
                        <img src="https://drive.google.com/uc?export=view&id=1f4xC0G0UeGqQxrjbKt12C0gP3RGkA8y3" />
                      </td>
                      <td>pradeepratnayake@gmail.com</td>
                      <td>Creator</td>

                      <td class="amount">
                        <Link
                          className="btn btn-secondary"
                          to={"/admin1/reportUser/" + 105}
                          target="_blank"
                        >
                          {" "}
                          View{" "}
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <td className="idStyle">3</td>
                      <td>
                        <img src="https://drive.google.com/uc?export=view&id=1KOZ9Yt9tc5qgiYjTdu9D-pnURTlRj_NU" />
                      </td>
                      <td>dulitharatnayake@gmail.com</td>
                      <td>Follower</td>
                      <td class="amount">
                        <Link
                          className="btn btn-secondary"
                          to={"/admin1/reportUser/" + 10}
                          target="_blank"
                        >
                          {" "}
                          View{" "}
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane complain-tab fade"
          id="admin-1-tab-pane"
          role="tabpanel"
          aria-labelledby="admin-1-tab"
          tabindex="0"
        >
          <div class="card-body mx-3 pt-4 pb-4">
            <div class="row">
              <div class="col">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#addewAdminModal"
                >
                  Add New Admin
                </button>
              </div>
            </div>

            <div class="row pt-2">
              <div class="col">
                <form className="search-form" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                  <button className="btn btn-secondary" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class="card-body  mx-3 pt-4 pb-4">
            <div class="row">
              <div className="tableSection">
                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Image</th>
                      <th>Email</th>
                      <th>Joined Date</th>
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
                      <td> 2022/01/01 03:35 PM</td>
                      <td class="amount">
                        <Link
                          className="btn btn-secondary"
                          to={"/admin1/reportUser/" + 100}
                          target="_blank"
                        >
                          {" "}
                          View{" "}
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="idStyle">2</td>
                      <td>
                        <img src="https://drive.google.com/uc?export=view&id=1f4xC0G0UeGqQxrjbKt12C0gP3RGkA8y3" />
                      </td>
                      <td>pradeepratnayake@gmail.com</td>
                      <td> 2022/01/01 03:35 PM</td>

                      <td class="amount">
                        <Link
                          className="btn btn-secondary"
                          to={"/admin1/reportUser/" + 105}
                          target="_blank"
                        >
                          {" "}
                          View{" "}
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <td className="idStyle">3</td>
                      <td>
                        <img src="https://drive.google.com/uc?export=view&id=1KOZ9Yt9tc5qgiYjTdu9D-pnURTlRj_NU" />
                      </td>
                      <td>dulitharatnayake@gmail.com</td>
                      <td> 2022/01/01 03:35 PM</td>
                      <td class="amount">
                        <Link
                          className="btn btn-secondary"
                          to={"/admin1/reportUser/" + 10}
                          target="_blank"
                        >
                          {" "}
                          View{" "}
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*modal */}
      <div
        class="modal fade"
        id="addewAdminModal"
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
                    <p class="mb-1 fs-8">sdfsdfsfd</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Date </h6>
                    <p class="mb-1 fs-8">sdsdf</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Category </h6>
                    <p class="mb-1 fs-8">sdfsdf</p>
                  </div>
                  <div class="col-12 mb-3">
                    <h6 class="text-uppercase fs-6 ls-2">Description</h6>
                    <p class="mb-1 fs-8">sdfsdfs</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-start p-4 pt-2">
              <button type="button" class="btn btn-danger">
                Add
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

export default AccountManageAdmin0Page;
