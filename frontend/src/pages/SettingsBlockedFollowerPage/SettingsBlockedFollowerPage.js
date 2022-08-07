import "../SettingsBasicPage/settings.css";
import "./SettingsBlockedFollowerPage.css";

function SettingsBlockedFollowerPage() {
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
                  <h4 class="mb-0">Blocked Followers</h4>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div className="tableSection">
                      <table>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="idStyle">1</td>
                            <td>
                              <img src="https://drive.google.com/uc?export=view&id=1IFgWbb4Pgt3jNVIuQezHHpSl6sseO0Zk" />
                            </td>
                            <td>janitharatnayake@gmail.com</td>
                            <td>Creator</td>
                          </tr>

                          <tr>
                            <td className="idStyle">2</td>
                            <td>
                              <img src="https://drive.google.com/uc?export=view&id=1f4xC0G0UeGqQxrjbKt12C0gP3RGkA8y3" />
                            </td>
                            <td>pradeepratnayake@gmail.com</td>
                            <td>Admin</td>
                          </tr>

                          <tr>
                            <td className="idStyle">3</td>
                            <td>
                              <img src="https://drive.google.com/uc?export=view&id=1KOZ9Yt9tc5qgiYjTdu9D-pnURTlRj_NU" />
                            </td>
                            <td>dulitharatnayake@gmail.com</td>
                            <td>Follower</td>
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
  );
}

export default SettingsBlockedFollowerPage;
