import "../SettingsBasicPage/settings.css";
import './SettingsPurchasePage.css'

function SettingsPurchasePage() {
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPurchasePage