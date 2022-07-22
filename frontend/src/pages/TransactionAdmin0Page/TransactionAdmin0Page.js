import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "./TransactionAdmin0Page.css";
import "react-datepicker/dist/react-datepicker.css";

import NavBar from "../../components/NavBar/NavBar";
import SideNavBarAdmin0 from "../../components/SideNavBarAdmin0/SideNavBarAdmin0";
import SummaryCard from "../../components/SummaryCard/SummaryCard";

function TransactionAdmin0Page() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <span className="transactionAdmin0Page">
      <NavBar />
      <div className="wrapperAdmin">
        <SideNavBarAdmin0 />

        <div id="contentAdmin">
          <div class="card-body admin-page-title date-card">
            <div class="row">
              <h4>Transactions</h4>
            </div>
          </div>

          <div class="card-body date-card">
            <div class="row">
              <div class="col">
                <SummaryCard cardHeading="Total" numberValue="$ 300, 000" />
              </div>
              <div class="col">
                <SummaryCard
                  cardHeading="Subscription"
                  numberValue="$ 100, 000"
                />
              </div>
              <div class="col">
                <SummaryCard
                  cardHeading="Avertisement"
                  numberValue="$ 200, 000"
                />
              </div>
            </div>
          </div>

          <div class="card-body admin-page-title date-card">
            <div class="row">
              <div class="col calander-card-col">
                <div class="calander-card">
                  <label for="basic-url" class="form-label">
                    Start Date:
                  </label>
                  <div class="input-group mb-3">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="date-picker-date"
                    />
                  </div>
                </div>

                <div class="calander-card">
                  <label for="basic-url" class="form-label">
                    End Date:
                  </label>
                  <div class="input-group mb-3">
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      className="date-picker-date"
                    />
                  </div>
                </div>
              </div>

              <div class="col column-container">
                <button type="button" class="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div class="row">
            <div className="tableSection">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>User</th>
                    <th>Type</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="idStyle">INV__1001</td>
                    <td>2008/11/28</td>
                    <td>Janitha Ratnayake</td>
                    <td>Advertisment</td>
                    <td class="amount">$520.18</td>
                  </tr>

                  <tr>
                    <td className="idStyle">INV__1002</td>
                    <td>2008/11/29</td>
                    <td>Pradeep Ratnayake</td>
                    <td>Premium</td>
                    <td class="amount">$520.18</td>
                  </tr>

                  <tr>
                    <td className="idStyle">INV__1003</td>
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
    </span>
  );
}

export default TransactionAdmin0Page;
