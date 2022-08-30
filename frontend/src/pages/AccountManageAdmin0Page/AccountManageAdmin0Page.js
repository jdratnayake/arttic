import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import $ from "jquery";

import { API_URL, PROFILE_PIC_URL } from "../../constants/globalConstants";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
import AuthenticationField from "../../components/AuthenticationField/AuthenticationField";
import {
  initialRegistrationValues,
  registrationValidation,
} from "./Validation";

import "./AccountManageAdmin0Page.css";
import "react-datepicker/dist/react-datepicker.css";

function AccountManageAdmin0Page() {
  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const [admin0List, setAdmin0List] = useState([]);
  const [displayAdmin0List, setDisplayAdmin0List] = useState([]);
  const [blockedUsersList, setBlockedUsersList] = useState([]);
  const [displayBlockedUsersList, setDisplayBlockedUsersList] = useState([]);
  const [adminCount, setAdminCount] = useState(0);
  const [creatorCount, setCreatorCount] = useState(0);
  const [followerCount, setFollowerCount] = useState(0);

  const getDetails = async () => {
    console.log("admin0");
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios.get(API_URL + "/accountmanagement", config).then((response) => {
      setAdminCount(response.data.adminCount);
      setCreatorCount(response.data.creatorCount);
      setFollowerCount(response.data.followerCount);
      setDisplayAdmin0List(response.data.admin1);
      setDisplayBlockedUsersList(response.data.blockedUsers);

      setAdmin0List(response.data.admin1);
      setBlockedUsersList(response.data.blockedUsers);
    });
  };

  useEffect(() => {
    getDetails();
  }, []);

  const registerAdmin = async (data, { resetForm }) => {
    const inputData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    console.log(inputData);

    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .post(API_URL + "/accountmanagement/registeradmin/", inputData, config)
      .then((response) => {
        setAdmin0List((current) => [response.data, ...current]);
      });

    $("#btn-close-form").click();
    resetForm();
  };

  const filterAdmin0 = (e) => {
    const searchValue = e.target.value;

    const newList = admin0List.filter((data) => {
      return (
        data.name.includes(searchValue) || data.email.includes(searchValue)
      );
    });

    setDisplayAdmin0List(newList);
  };

  const filterBlockedUsers = (e) => {
    const searchValue = e.target.value;

    const newList = blockedUsersList.filter((data) => {
      return (
        data.name.includes(searchValue) || data.email.includes(searchValue)
      );
    });

    setDisplayBlockedUsersList(newList);
  };

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
                <SummaryCard
                  cardHeading="Admin"
                  numberValue={adminCount.toLocaleString()}
                />
              </div>
              <div class="col">
                <SummaryCard
                  cardHeading="Creator"
                  numberValue={creatorCount.toLocaleString()}
                />
              </div>
              <div class="col">
                <SummaryCard
                  cardHeading="Follower"
                  numberValue={followerCount.toLocaleString()}
                />
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
                <button
                  type="button"
                  class="btn btn-primary margin-right-5"
                  onClick={() => {
                    setDisplayBlockedUsersList(blockedUsersList);
                  }}
                >
                  All
                </button>
                <button
                  type="button"
                  class="btn btn-primary margin-right-5"
                  onClick={() => {
                    const newList = blockedUsersList.filter((data) => {
                      return data.type === 3;
                    });

                    setDisplayBlockedUsersList(newList);
                  }}
                >
                  Creators
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    const newList = blockedUsersList.filter((data) => {
                      return data.type === 4;
                    });

                    setDisplayBlockedUsersList(newList);
                  }}
                >
                  Followers
                </button>
              </div>
            </div>

            <div class="row pt-2">
              <div class="col">
                <div class="search">
                  <button className="searchButton" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                  <input
                    className="searchTerm"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                    onChange={filterBlockedUsers}
                  />
                </div>
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
                    {displayBlockedUsersList.map((data) => (
                      <tr>
                        <td className="idStyle">1</td>
                        <td>
                          <img src={PROFILE_PIC_URL + data.profilePhoto} />
                        </td>
                        <td>{data.email}</td>
                        <td>{data.type === 3 ? "Creator" : "Follower"}</td>
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
                    ))}
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
                <div class="search">
                  <button className="searchButton" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                  <input
                    className="searchTerm"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                    onChange={filterAdmin0}
                  />
                </div>
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
                      <th>Joined</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayAdmin0List.map((data, i) => (
                      <tr key={data.userId}>
                        <td className="idStyle">{i + 1}</td>
                        <td>
                          <img src={PROFILE_PIC_URL + data.profilePhoto} />
                        </td>
                        <td>{data.email}</td>
                        <td>
                          {" "}
                          {new Date(data.joinedDate).toLocaleDateString()}
                        </td>
                        <td>
                          {data.blockedStatus ? (
                            <span class="status status-pending">Blocked</span>
                          ) : (
                            <td>
                              <span class="status status-paid">Active</span>
                            </td>
                          )}
                        </td>
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
                    ))}
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
                  Add New Admin
                </h4>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="btn-close-form"
              ></button>
            </div>
            <div class="modal-body p-4">
              <Formik
                initialValues={initialRegistrationValues}
                validationSchema={registrationValidation}
                onSubmit={registerAdmin}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <AuthenticationField
                      label="Name"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter Name"
                    />

                    <AuthenticationField
                      label="Email"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                    />

                    <AuthenticationField
                      label="Password"
                      type="text"
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                    />

                    <div class="col-12">
                      <button
                        type="submit"
                        class="btn btn-primary d-grid"
                        disabled={isSubmitting}
                      >
                        Save Address
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default AccountManageAdmin0Page;
