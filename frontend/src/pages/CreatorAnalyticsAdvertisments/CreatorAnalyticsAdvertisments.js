import "./CreatorAnalyticsAdvertisments.css";

import {
    BrowserRouter as Router,
    Route,
    Link,
    useParams,
} from "react-router-dom";
import { useState } from "react";

import Chart from "react-apexcharts"
import AnalyticsCard from "../../components/AnalyticsCard/AnalyticsCard";

function CreatorAnalyticsAdvertisments() {

    const [complain, setComplain] = useState("");
    const [username, setUsername] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");

    const handleClick = (obj) => {
        setComplain(
            "You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"
        );
        setUsername("Tony stark");
        setDate("07/30/2022");
        setCategory("Violence");
        console.log(obj);
    };

    const lineChartValuesReach = {
        options: {
            chart: { id: "basic-bar", },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6, 7, 8],
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
                text: "No Of Views",
                align: "left",
                style: { fontFamily: "Poppins", },
            },
        },
        series: [
            {
                name: "series-1",
                data: [40, 42, 45, 50, 55, 60, 70, 91],
            },
        ],
    };

    const lineChartValues = {
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
                text: "No of Advertisments",
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
                                    <tr>
                                        <td className="idStyle">1</td>
                                        <td>2008/11/28</td>
                                        <td>
                                            <img src="https://drive.google.com/uc?export=view&id=1IFgWbb4Pgt3jNVIuQezHHpSl6sseO0Zk" />
                                        </td>
                                        <td>
                                            <p className="userComplaintDescription">
                                                It is hidden by default, until the collapse plugin
                                                adds the appropriate classes that we use to style
                                                each element.
                                            </p>
                                        </td>
                                        <td>
                                            <a
                                                onClick={() =>
                                                    handleClick({ id: 1, type: "Advertisment" })
                                                }
                                                href="#"
                                                class="btn btn-secondary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#AdModal"
                                            >
                                                View
                                            </a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="idStyle">2</td>
                                        <td>2008/11/29</td>
                                        <td>
                                            <img src="https://drive.google.com/uc?export=view&id=1IFgWbb4Pgt3jNVIuQezHHpSl6sseO0Zk" />
                                        </td>
                                        <td>It is hidden by default, until the collapse plugin
                                            adds the appropriate classes that we use to style</td>
                                        <td>
                                            <a
                                                onClick={() =>
                                                    handleClick({ id: 2, type: "Advertisment" })
                                                }
                                                href="#"
                                                class="btn btn-secondary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#AdModal"
                                            >
                                                View
                                            </a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="idStyle">3</td>
                                        <td>2008/11/30</td>
                                        <td>
                                            <img src="https://drive.google.com/uc?export=view&id=1IFgWbb4Pgt3jNVIuQezHHpSl6sseO0Zk" />
                                        </td>
                                        <td>It is hidden by default, until the collapse plugin
                                            adds the appropriate classes that we use to style</td>
                                        <td>
                                            <a
                                                onClick={() =>
                                                    handleClick({ id: 7, type: "Advertisment" })
                                                }
                                                href="#"
                                                class="btn btn-secondary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#AdModal"
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