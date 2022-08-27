import "./CreatorAnalyticsBasic.css";
import "react-datepicker/dist/react-datepicker.css";

import Chart from "react-apexcharts"
import AnalyticsCard from "../../components/AnalyticsCard/AnalyticsCard";

function CreatorAnalyticsBasic() {

    const lineChartValues1 = {
        options: {
            chart: { id: "basic-bar", },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                title: {
                    text: "Time",
                    style: { fontFamily: "Poppins", },
                },
            },
            yaxis: {
                title: {
                    text: "Count",
                    style: { fontFamily: "Poppins", },
                },
            },
            title: {
                text: "Total Followers",
                align: "left",
                style: { fontFamily: "Poppins", },
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
            chart: { id: "basic-bar", },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                title: {
                    text: "Time",
                    style: { fontFamily: "Poppins", },
                },
            },
            yaxis: {
                title: {
                    text: "Count",
                    style: { fontFamily: "Poppins", },
                },
            },
            title: {
                text: "Total Unfollowers",
                align: "left",
                style: { fontFamily: "Poppins", },
            },
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
        ],
    };

    const lineChartValues3 = {
        options: {
            chart: { id: "basic-bar", },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                title: {
                    text: "Time",
                    style: { fontFamily: "Poppins", },
                },
            },
            yaxis: {
                title: {
                    text: "Count",
                    style: { fontFamily: "Poppins", },
                },
            },
            title: {
                text: "Total Premium Users",
                align: "left",
                style: { fontFamily: "Poppins", },
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
        series: [5, 11],
        chartOptions: {
            labels: [
                "Follower - Base",
                "Follower - Premium",
            ],
            title: {
                text: "Follower Diversity",
                align: "left",
                style: { fontFamily: "Poppins", },
            },
        },
    };

    return (
        <span className="CreatorAnalytics">

            <div class="row mb-8">
                <div class="col">
                    {/* card */}

                    {/* card body */}

                    <div class="mb-6">
                        <h5 class="mb-1"></h5>
                    </div>

                    {/* Analytics Cards */}
                    <div class="row ">
                        <div class="col-4 mb-6">
                            <AnalyticsCard
                                cardHeading="Total Followers"
                                iconName="bi bi-people-fill"
                            />
                        </div>
                        <div class="col-4 mb-6">
                            <AnalyticsCard
                                cardHeading="Total Unfollowers"
                                iconName="bi bi-person-x-fill"
                            />
                        </div>
                        <div class="col-4 mb-6">
                            <AnalyticsCard
                                cardHeading="Total Premium Users"
                                iconName="bi bi-person-plus-fill"
                            />
                        </div>
                    </div>
                    <br />

                    {/* Analytics Charts */}
                    <div class="row mb-8">
                        <div class="col lineChartStyle title card-align">
                            <div class="card card-second">
                                <Chart
                                    title="helloo"
                                    options={lineChartValues1.options}
                                    series={lineChartValues1.series}
                                    type="line"
                                    className="lineChartVerticleStyle"
                                />
                            </div>
                        </div>
                        <div class="col lineChartStyle title  card-align">
                            <div class="card card-second">
                                <Chart
                                    options={lineChartValues2.options}
                                    series={lineChartValues2.series}
                                    type="line"
                                    className="lineChartVerticleStyle"
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Analytics Charts */}
                    <div class="row mb-8">
                        <div class="col lineChartStyle title card-align">
                            <div class="card card-second">
                                <Chart
                                    options={lineChartValues3.options}
                                    series={lineChartValues3.series}
                                    type="line"
                                    className="lineChartVerticleStyle"
                                />
                            </div>
                        </div>
                        <div class="col lineChartStyle title card-align">
                            <div class="card">
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

export default CreatorAnalyticsBasic;