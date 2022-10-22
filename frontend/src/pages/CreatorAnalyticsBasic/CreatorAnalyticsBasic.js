import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Chart from "react-apexcharts";

import AnalyticsCard from "../../components/AnalyticsCard/AnalyticsCard";
import { API_URL } from "../../constants/globalConstants";

import "./CreatorAnalyticsBasic.css";
import "react-datepicker/dist/react-datepicker.css";

function CreatorAnalyticsBasic() {
  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const [newAccountsCount, setNewAccountsCount] = useState(0);
  const [newAccountsPercentage, setNewAccountsPercentage] = useState(0);
  const [timeValues, setTimeValues] = useState([]);
  const [userCountValues, setUserCountValues] = useState([]);

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
        text: "No of Followers",
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
      .get(API_URL + "/creatoranalytics/getfolloweranalytics/", config)
      .then((response) => {
        setNewAccountsCount(response.data.newFollowersDetails[0]);
        setNewAccountsPercentage(response.data.newFollowersDetails[1]);
        setTimeValues(response.data.timeList);
        setUserCountValues(response.data.followerCountList);
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
          <h4 class="mb-0">Post Analysis</h4>
      </div> */}

          <br />

          {/* Analytics Cards */}
          <div class="row d-flex analytics-card-chart">
            <div class="col-4 mb-6">
              <AnalyticsCard
                cardHeading="No of Followers"
                iconName="bi bi-people-fill"
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
        </div>
      </div>
    </span>
  );
}

export default CreatorAnalyticsBasic;
