import { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import axios from "axios";

import "./DashboardAdmin0Page.css";
import "react-datepicker/dist/react-datepicker.css";

import AnalyticsCard from "../../components/AnalyticsCard/AnalyticsCard";
import { API_URL } from "../../constants/globalConstants";

function DashboardAdmin0Page() {
  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  // Chart values
  const [timeValues, setTimeValues] = useState([]);
  const [userCountValues, setUserCountValues] = useState([]);
  const [revenueValue, setRevenueValue] = useState([]);
  const [userDiversity, setUserDiversity] = useState([]);
  const [newAccountsCount, setNewAccountsCount] = useState(0);
  const [newAccountsPercentage, setNewAccountsPercentage] = useState(0);
  const [newAdvertisementsCount, setNewAdvertisementsCount] = useState(0);
  const [newAdvertisementsPercentage, setNewAdvertisementsPercentage] =
    useState(0);
  const [newSubscriptionCount, setNewSubscriptionCount] = useState(0);
  const [newSubscriptionPercentage, setSubscriptionPercentage] = useState(0);
  const [newUserComplaintsCount, setNewUserComplaintsCount] = useState(0);
  const [newUserComplaintsPercentage, setNewUserComplaintsPercentage] =
    useState(0);

  const lineChartValues = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: timeValues,
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
        text: "Active Users",
        align: "left",
        style: {
          fontFamily: "Poppins",
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: userCountValues,
      },
    ],
  };

  const barChartValues = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: timeValues,
        title: {
          text: "Time",
          style: {
            fontFamily: "Poppins",
          },
        },
      },
      yaxis: {
        title: {
          text: "Cash($)",
          style: {
            fontFamily: "Poppins",
          },
        },
      },
      title: {
        text: "Revenue",
        align: "left",
        style: {
          fontFamily: "Poppins",
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: revenueValue,
      },
    ],
  };

  const pieChartValues = {
    series: userDiversity,
    chartOptions: {
      labels: ["Creator ", "Follower"],
      title: {
        text: "User Diversity",
        align: "left",
        style: {
          fontFamily: "Poppins",
        },
      },
    },
  };

  const getDashboardDetails = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios.get(API_URL + "/admindashboard", config).then((response) => {
      // console.log(response);
      setTimeValues(response.data.timeList);
      setUserCountValues(response.data.userCountList);
      setRevenueValue(response.data.revenueList);
      setUserDiversity(response.data.userDiversity);
      setNewAccountsCount(response.data.newUserAccountDetails[0]);
      setNewAccountsPercentage(response.data.newUserAccountDetails[1]);
      setNewAdvertisementsCount(response.data.newAdvertisementDetails[0]);
      setNewAdvertisementsPercentage(response.data.newAdvertisementDetails[1]);
      setNewUserComplaintsCount(response.data.newUserComplaintsDetails[0]);
      setNewUserComplaintsPercentage(response.data.newUserComplaintsDetails[1]);
      setNewSubscriptionCount(response.data.newSubscriptionDetails[0]);
      setSubscriptionPercentage(response.data.newSubscriptionDetails[1]);
    });
  };

  useEffect(() => {
    getDashboardDetails();
  }, []);

  return (
    <span className="dashboardAdmin0Page">
      <div class="card-body admin-page-title">
        <div class="row">
          <h4>Dashboard</h4>
        </div>
      </div>

      <div class="row analyticsCardRow card-body">
        <div class="col title">
          <div class="row cardRow">
            <div class="col cardCol">
              <AnalyticsCard
                cardHeading="New Accounts"
                iconName="bi bi-person-plus-fill"
                count={newAccountsCount}
                percentage={newAccountsPercentage}
              />
            </div>
            <div class="col cardCol">
              <AnalyticsCard
                cardHeading="User Complaints"
                iconName="bi bi-clipboard-x-fill"
                count={newUserComplaintsCount}
                percentage={newUserComplaintsPercentage}
              />
            </div>
          </div>
          <div class="row">
            <div class="col cardCol">
              <AnalyticsCard
                cardHeading="Subscription"
                iconName="bi bi-person-check-fill"
                count={newSubscriptionCount}
                percentage={newSubscriptionPercentage}
              />
            </div>
            <div class="col cardCol">
              <AnalyticsCard
                cardHeading="Advertisements"
                iconName="bi bi-badge-ad-fill"
                count={newAdvertisementsCount}
                percentage={newAdvertisementsPercentage}
              />
            </div>
          </div>
        </div>
        <div class="col lineChartStyle title">
          <div class="card-body admin-page-title">
            <Chart
              options={lineChartValues.options}
              series={lineChartValues.series}
              type="line"
              className="lineChartVerticleStyle"
            />
          </div>
        </div>
      </div>
      <div class="row second-row">
        <div class="col lineChartStyle title">
          <div class="card-body admin-page-title">
            <Chart
              options={barChartValues.options}
              series={barChartValues.series}
              type="bar"
              className="lineChartVerticleStyle"
            />
          </div>
        </div>
        <div class="col lineChartStyle title">
          <div class="card-body admin-page-title">
            <Chart
              options={pieChartValues.chartOptions}
              series={pieChartValues.series}
              type="pie"
              className="lineChartVerticleStyle"
            />
          </div>
        </div>
      </div>
    </span>
  );
}

export default DashboardAdmin0Page;
