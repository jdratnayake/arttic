import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Switch from "react-switch";

import "../SettingsBasicPage/settings.css";

function PageSettings() {
  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };
  const [checked_1, setChecked_1] = useState(false);
  const handleChange_1 = nextChecked => {
    setChecked_1(nextChecked);
  };

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
                    class="switch-lable  d-flex align-items-center justify-content-between col-sm-4 col-form-label form-label"
                  >
                    Follower Visibility
                    {/* add toggle button */}
                    <Switch
                      onChange={handleChange}
                      checked={checked}
                      className="react-switch"
                      onColor="#86d3ff"
                      onHandleColor="#2693e6"
                      handleDiameter={20}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                      height={15}
                      width={45}
                      id="material-switch-1"
                    />
                  </label>
                  <label
                    for="followerVisibility-1"
                    class="switch-lable d-flex align-items-center justify-content-between col-sm-4 col-form-label form-label"
                  >
                    Follower Visibility
                    {/* add toggle button */}
                    <Switch
                      onChange={handleChange_1}
                      checked={checked_1}
                      className="react-switch"
                      onColor="#86d3ff"
                      onHandleColor="#2693e6"
                      handleDiameter={20}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                      height={15}
                      width={45}
                      id="material-switch"
                    />
                  </label>
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
