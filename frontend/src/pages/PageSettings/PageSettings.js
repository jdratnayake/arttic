import { Formik, Form, Field, ErrorMessage } from "formik";

import "../SettingsBasicPage/settings.css";

function PageSettings() {
  return (
    <div className="settingsPage">
      <div class="row">
        <div class="col">
          {/* card */}
          <div class="card">
            <div class=" mb-6">
              {/* card header  --> */}
              <div class="card-header p-4 bg-white">
                <h4 class="mb-0">Blocked FollowersPage Settings</h4>
              </div>
              {/* card body */}
              <div class="card-body">
                <form>
                  {/* row */}

                  <label
                    for="followerVisibility"
                    class="col-sm-4 col-form-label form-label"
                  >
                    Follower Visibility
                  </label>
                  <div class="custom-control custom-switch">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="followerVisibility"
                      checked
                    />
                    <label
                      class="custom-control-label"
                      for="followerVisibility"
                    >
                      Toggle this switch element
                    </label>
                  </div>
                  {/* add toggle button */}
                  <div class="col-md-8 col-12">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="placeholder"
                      id="addressLineTwo"
                    />
                  </div>
                  {/* row */}
                  <div class="row align-items-center">
                    <div class="offset-md-4 col-md-8 mt-4">
                      <button type="submit" class="btn btn-primary">
                        {" "}
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSettings;
