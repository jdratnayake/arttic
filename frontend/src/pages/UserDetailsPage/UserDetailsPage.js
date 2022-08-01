import "./UserDetailsPage.css";

import NavBar from "../../components/NavBar/NavBar";
import SideNavBarAdmin0 from "../../components/SideNavBarAdmin0/SideNavBarAdmin0";
import SummaryCard from "../../components/SummaryCard/SummaryCard";

function UserDetailsPage() {
  return (
    <span className="userDetailsPage">
      <NavBar />
      <div className="wrapperAdmin">
        <SideNavBarAdmin0 />

        <div id="contentAdmin">
          <div class="card-body admin-page-title date-card">
            <div class="row">
              <h4>Users</h4>
            </div>
          </div>

          <div class="card-body date-card">
            <div class="row">
              <div class="col">
                <SummaryCard cardHeading="Admin" numberValue="10, 000" />
              </div>
              <div class="col">
                <SummaryCard cardHeading="Creator" numberValue="100, 000" />
              </div>
              <div class="col">
                <SummaryCard cardHeading="Follower" numberValue="1, 000, 000" />
              </div>
            </div>
          </div>

          <div class="card-body admin-page-title date-card">
            <div class="row">
              <div class="col">
                <button type="button" class="btn btn-primary">
                  Add New Admin
                </button>
              </div>
            </div>

            <div class="row">
              <div class="col">Search</div>
            </div>
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
                      <th>Status</th>
                      <th></th>
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
                      <td>
                        <span class="status status-pending">Blocked</span>
                      </td>
                      <td class="amount">
                        <button type="button" class="btn btn-secondary">
                          View
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td className="idStyle">2</td>
                      <td>
                        <img src="https://drive.google.com/uc?export=view&id=1f4xC0G0UeGqQxrjbKt12C0gP3RGkA8y3" />
                      </td>
                      <td>pradeepratnayake@gmail.com</td>
                      <td>Admin</td>
                      <td>
                        <span class="status status-paid">Active</span>
                      </td>
                      <td class="amount">
                        <button type="button" class="btn btn-secondary">
                          View
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td className="idStyle">3</td>
                      <td>
                        <img src="https://drive.google.com/uc?export=view&id=1KOZ9Yt9tc5qgiYjTdu9D-pnURTlRj_NU" />
                      </td>
                      <td>dulitharatnayake@gmail.com</td>
                      <td>Follower</td>
                      <td>
                        <span class="status status-paid">Active</span>
                      </td>
                      <td class="amount">
                        <button type="button" class="btn btn-secondary">
                          View
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default UserDetailsPage;
