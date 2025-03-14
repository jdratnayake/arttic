import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Chart from "react-apexcharts";

import AnalyticsCard from "../../components/AnalyticsCard/AnalyticsCard";
import { API_URL, ADVERTISMENT_PIC_URL } from "../../constants/globalConstants";

import "./CreatorAnalyticsAdvertisments.css";

function CreatorAnalyticsAdvertisments() {
  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const [newAccountsCount, setNewAccountsCount] = useState(0);
  const [newAccountsPercentage, setNewAccountsPercentage] = useState(0);
  const [timeValues, setTimeValues] = useState([]);
  const [userCountValues, setUserCountValues] = useState([]);
  const [advertismentList, setAdvertismentList] = useState([]);

  // Model chart values
  const [postTime, setPostTime] = useState([]);
  const [postCount, setPostCount] = useState([]);

  const handleClick = async (postId) => {
    const config = {
      headers: {
        authorization: accessToken,
        postId,
      },
    };

    await axios
      .get(API_URL + "/creatoranalytics/getsinglepostanalytics/", config)
      .then((response) => {
        setPostTime(response.data.timeList);
        setPostCount(response.data.postCountList);
      });
  };

  const lineChartValuesReach = {
    options: {
      chart: { id: "basic-bar" },
      xaxis: {
        categories: postTime,
        title: {
          text: "Time",
          style: { fontFamily: "Poppins" },
        },
      },
      yaxis: {
        title: {
          text: "Count",
          style: { fontFamily: "Poppins" },
        },
      },
      title: {
        text: "No Of Views",
        align: "left",
        style: { fontFamily: "Poppins" },
      },
    },
    series: [
      {
        name: "series-1",
        data: postCount,
      },
    ],
  };

  const lineChartValues = {
    options: {
      chart: { id: "basic-bar" },
      xaxis: {
        categories: timeValues,
        title: {
          text: "Time",
          style: { fontFamily: "Poppins" },
        },
      },
      yaxis: {
        title: {
          text: "Count",
          style: { fontFamily: "Poppins" },
        },
      },
      title: {
        text: "No of Advertisments",
        align: "left",
        style: { fontFamily: "Poppins" },
      },
    },
    series: [
      {
        name: "series-1",
        data: userCountValues,
      },
    ],
  };

  const getData = async () => {
    const config = {
      headers: {
        authorization: accessToken,
        userid: userId,
      },
    };

    await axios
      .get(API_URL + "/creatoranalytics/getadvertismentanalytics/", config)
      .then((response) => {
        setNewAccountsCount(response.data.newAdvertisementDetails[0]);
        setNewAccountsPercentage(response.data.newAdvertisementDetails[1]);
        setTimeValues(response.data.timeList);
        setUserCountValues(response.data.AdvertisementCountList);
      });

    await axios
      .get(API_URL + "/creatoranalytics/getadvertismentlist/", config)
      .then((response) => {
        setAdvertismentList(response.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <span className="CreatorAnalytics">
      <div class="row mb-8">
        <div class="col">
          {/* card */}
          {/* card body */}
          {/* <div class="card-header p-4 bg-white">
                        <h4 class="mb-0">Advertisment Analysis</h4>
                    </div> */}

          <br />

          {/* Analytics Cards */}
          <div class="row d-flex analytics-card-chart">
            <div class="col-4 mb-6">
              <AnalyticsCard
                cardHeading="No of Advertisments"
                iconName="bi bi-badge-ad-fill"
                count={newAccountsCount}
                percentage={newAccountsPercentage}
              />
            </div>
            <div class="col-6 mb-6">
              <div class="card card-second">
                <Chart
                  title="helloo"
                  options={lineChartValues.options}
                  series={lineChartValues.series}
                  type="line"
                  className="lineChartVerticleStyle"
                />
              </div>
            </div>
          </div>

          <div class="row mx-3 pt-4 pb-4">
            <div className="tableSection">
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {advertismentList.map((data, i) => (
                    <tr key={data.advertisementId}>
                      <td className="idStyle">{i + 1}</td>
                      <td>
                        {" "}
                        {new Date(data.createdDate).toLocaleDateString()}
                      </td>
                      <td>
                        <img
                          src={ADVERTISMENT_PIC_URL + "/" + data.contentLink}
                        />
                      </td>
                      <td>
                        <p className="userComplaintDescription">
                          {data.description}
                        </p>
                      </td>
                      <td>
                        <a
                          onClick={() => handleClick(data.advertisementId)}
                          href="#"
                          class="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#AdModal"
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

      {/* update plan modal */}
      <div
        class="modal fade"
        id="AdModal"
        tabindex="-1"
        aria-labelledby="planModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header p-3">
              <div>
                <h4 class="mb-0" id="planModalLabel">
                  Reach
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
              <div className="row">
                <Chart
                  title="helloo"
                  options={lineChartValuesReach.options}
                  series={lineChartValuesReach.series}
                  type="line"
                  className="lineChartVerticleStyle"
                />
              </div>
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

export default CreatorAnalyticsAdvertisments;
