import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { API_URL } from "../../constants/globalConstants";

import "../SettingsBasicPage/settings.css";
import "./SettingsPurchasePage.css";

function SettingsPurchasePage() {
  const [purchaseData, setPurchaseData] = useState([]);

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const getPurchaseData = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/settings/getPurchaseHistory/" + userId, config)
      .then((response) => {
        setPurchaseData(response.data);
      });
  };

  useEffect(() => {
    getPurchaseData();
  }, []);

  return (
    <div className="settingsPage">
      {/* row  --> */}
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col-12">
              {/* card  --> */}
              <div class="card">
                {/* card header  --> */}
                <div class="card-header p-4 bg-white">
                  <h4 class="mb-0">Purchase history</h4>
                </div>
                <div className="card-body">
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
                          {purchaseData.map((data) => (
                            <tr key={data.transactionId}>
                              <td className="idStyle">{data.transactionId}</td>
                              <td>{data.transactionDate}</td>
                              <td>
                                {data.transactionType === 1
                                  ? "Advertisement"
                                  : "Premium Package Subscription"}
                              </td>

                              <td class="amount">
                                {"$" + data.amount + ".00"}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPurchasePage;
