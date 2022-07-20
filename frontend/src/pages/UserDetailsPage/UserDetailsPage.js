import "./UserDetailsPage.css";

import NavBar from "../../components/NavBar/NavBar";
import SideNavBarAdmin0 from "../../components/SideNavBarAdmin0/SideNavBarAdmin0";

function UserDetailsPage() {
  return (
    <span className="userDetailsPage">
      <NavBar />
      <div className="wrapper">
        <SideNavBarAdmin0 />
        <div id="content">
          <div class="row">
            <h4 class="card-title float-left mt-2">User Details</h4>
          </div>

          <div class="row">
            <div class="col">
              <div
                class="btn-group-style"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" class="btn btn-primary">
                  Admin
                </button>
                <button type="button" class="btn btn-primary">
                  Creator
                </button>
                <button type="button" class="btn btn-primary">
                  Follower
                </button>
              </div>
            </div>

            <div class="col">Search</div>
          </div>

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
    </span>
  );
}

export default UserDetailsPage;
