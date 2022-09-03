import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import axios from "axios";

import { API_URL } from "../../constants/globalConstants";

import "./SystemTransactionDetailsPage.css";
import "react-datepicker/dist/react-datepicker.css";

import SummaryCard from "../../components/SummaryCard/SummaryCard";

function SystemTransactionDetailsPage() {
  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const removeTime = (date = new Date()) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  const [startDate, setStartDate] = useState(removeTime(new Date()));
  const [endDate, setEndDate] = useState(removeTime(new Date()));

  const [transactionList, setTransactionList] = useState([]);
  const [displayTransactionList, setDisplayTransactionList] = useState([]);
  const [total, setTotal] = useState(0);
  const [subscription, setSubscription] = useState(0);
  const [advertisement, setAdvertisement] = useState(0);

  const getData = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/admindashboard/gettransactiondetails/", config)
      .then((response) => {
        setTotal(response.data.total);
        setSubscription(response.data.subscriptionRevenue);
        setAdvertisement(response.data.advertisementRevenue);
        setDisplayTransactionList(response.data.transactionList);
        setTransactionList(response.data.transactionList);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const filterTransactions = () => {
    // console.log(startDate);
    // console.log(endDate);
    // console.log(typeof startDate);
    // console.log(typeof endDate);
    let newTotal = 0;
    let newSubscription = 0;
    let newAdvertisement = 0;

    const newList = transactionList.filter((data) => {
      if (
        new Date(data.transactionDate).getTime() >= startDate.getTime() &&
        new Date(data.transactionDate).getTime() <= endDate.getTime()
      ) {
        if (data.transactionType === 1) {
          newAdvertisement += parseInt(data.amount);
        } else {
          newSubscription += parseInt(data.amount);
        }

        return true;
      } else {
        return false;
      }
    });

    setDisplayTransactionList(newList);
    setTotal(newTotal);
    setAdvertisement(newAdvertisement);
    setSubscription(newSubscription);
  };

  return (
    <span className="systemTransactionDetailsPage">
      <div class="card-body admin-page-title date-card">
        <div class="row">
          <h4>Transactions</h4>
        </div>
      </div>

      <div class="card-body date-card">
        <div class="row">
          <div class="col">
            <SummaryCard
              cardHeading="Total"
              numberValue={"$" + total.toLocaleString()}
            />
          </div>
          <div class="col">
            <SummaryCard
              cardHeading="Subscription"
              numberValue={"$" + subscription.toLocaleString()}
            />
          </div>
          <div class="col">
            <SummaryCard
              cardHeading="Advertisement"
              numberValue={"$" + advertisement.toLocaleString()}
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
            <button
              type="button"
              class="btn btn-primary"
              onClick={filterTransactions}
            >
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
                <th>Type</th>

                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {displayTransactionList.map((data, i) => (
                <tr key={data.transactionId}>
                  <td className="idStyle">{i + 1}</td>
                  <td>{new Date(data.transactionDate).toLocaleDateString()}</td>
                  <td>
                    {data.transactionType === 1
                      ? "Advertisment"
                      : "Subscription"}
                  </td>
                  <td class="amount">{"$" + data.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </span>
  );
}

export default SystemTransactionDetailsPage;
