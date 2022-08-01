import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

import "./DashboardAdmin0Page.css";
import "react-datepicker/dist/react-datepicker.css";

import NavBar from "../../components/NavBar/NavBar";
import SideNavBarAdmin0 from "../../components/SideNavBarAdmin0/SideNavBarAdmin0";
import AnalyticsCard from "../../components/AnalyticsCard/AnalyticsCard";

function DashboardAdmin0Page() {
  const lineChartValues = {
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
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  const barChartValues = {
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
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  const pieChartValues = {
    series: [5, 11, 2, 82],
    chartOptions: {
      labels: [
        "Creator - Base",
        "Creator - Silver",
        "Creator - Gold",
        "Creator - Platinum",
        "Follower",
      ],
      title: {
        text: "User Diversity",
        align: "left",
        style: {
          fontFamily: "Poppins",
        },
      },
    },
  };

  return (
    <span className="dashboardAdmin0Page">
      <NavBar />
      <div className="wrapperAdmin">
        <SideNavBarAdmin0 />

        <div id="contentAdmin">
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
                  />
                </div>
                <div class="col cardCol">
                  <AnalyticsCard
                    cardHeading="Advertisements"
                    iconName="bi bi-badge-ad-fill"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col cardCol">
                  <AnalyticsCard
                    cardHeading="Del. Accounts"
                    iconName="bi bi-person-x-fill"
                  />
                </div>
                <div class="col cardCol">
                  <AnalyticsCard
                    cardHeading="Complaints"
                    iconName="bi bi-clipboard-x-fill"
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
          <div class="row">
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
        </div>
      </div>
    </span>
  );
}

export default DashboardAdmin0Page;
