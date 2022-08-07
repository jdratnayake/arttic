import "./settings.css";
import t from "../../images/users/pic1.png";

function SettingsBasicPage() {
  return (
    <div className="settingsPage">
      <div class="row mb-8">
        <div class="col">
          {/* card */}
          <div class="card">
            {/* card body */}
            <div class="card-body">
              <div class=" mb-6">
                <h4 class="mb-1">General Settings</h4>
              </div>
              <div class="row align-items-center mb-8">
                <div class="col-md-3 mb-3 mb-md-0">
                  <h5 class="mb-0">Avatar</h5>
                </div>
                <div class="col-md-9">
                  <div class="d-flex align-items-center">
                    <div class="me-3">
                      <img
                        src={t}
                        class="rounded-circle avatar avatar-lg"
                        alt=""
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        class="btn btn-outline-white
                            me-1"
                      >
                        Change
                      </button>
                      <button type="submit" class="btn btn-outline-white">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* col */}
              <div class="row mb-8">
                <div class="col-md-3 mb-3 mb-md-0">
                  {/* heading */}
                  <h5 class="mb-0">Cover photo</h5>
                </div>
                <div class="col-md-9">
                  {/* dropzone input */}
                  <div>
                    <form action="#" class="dropzone mb-3 border-dashed dz-clickable">
                      <div class="dz-default dz-message">
                        {/*<input class="dz-button" name="file" type="file" multiple />*/}
                        <button className="dz-button" type="button">Drop files here to upload </button>
                      </div>
                    </form>
                    <button type="submit" class="btn btn-outline-white">
                      Change
                    </button>
                  </div>
                </div>
              </div>
              <div>
                {/* border */}
                <div class="mb-6">
                  <h4 class="mb-1">Basic information</h4>
                </div>
                <form>
                  {/* row */}

                  <div class="mb-3 row">
                    <label
                      for="fullName"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Full name
                    </label>
                    <div class="col-sm-4 mb-3 mb-lg-0">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First name"
                        id="fullName"
                        required
                      />
                    </div>
                    <div class="col-sm-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last name"
                        id="lastName"
                        required
                      />
                    </div>
                  </div>

                  {/* row */}
                  <div class="mb-3 row">
                    <label
                      for="email"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Email
                    </label>
                    <div class="col-md-8 col-12">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        id="email"
                        required
                      />
                    </div>
                  </div>
                  {/* row */}
                  <div class="mb-3 row">
                    <label
                      for="phone"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Phone <span class="text-muted">(Optional)</span>
                    </label>
                    <div class="col-md-8 col-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Phone"
                        id="phone"
                      />
                    </div>
                  </div>
                  {/* row */}
                  <div class="mb-3 row">
                    <label
                      for="location"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Location
                    </label>

                    <div class="col-md-8 col-12">
                      <select class="form-select" id="location">
                        <option selected>Select Country</option>
                        <option value="1">India</option>
                        <option value="2">UK</option>
                        <option value="3">USA</option>
                      </select>
                    </div>
                  </div>
                  {/* row */}
                  <div class="mb-3 row">
                    <label
                      for="addressLine"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Address line 1
                    </label>

                    <div class="col-md-8 col-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="placeholder"
                        id="addressLine"
                      />
                    </div>
                  </div>
                  {/* row */}
                  <div class="mb-3 row">
                    <label
                      for="addressLineTwo"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Address line 2
                    </label>
                    <div class="col-md-8 col-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="placeholder"
                        id="addressLineTwo"
                      />
                    </div>
                  </div>
                  {/* row */}
                  <div class="row align-items-center">
                    <label
                      for="zipcode"
                      class="col-sm-4 col-form-label form-label"
                    >
                      Zip code <i data-feather="info" class="me-2 icon-xs"></i>
                    </label>

                    <div class="col-md-8 col-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="placeholder"
                        id="zipcode"
                      />
                    </div>
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
      <div class="row mb-8">
        <div class="col-md-12 col-12">
          {/* card */}
          <div class="card" id="edit">
            {/* card body */}
            <div class="card-body">
              <div class="mb-6">
                <h4 class="mb-1">Email</h4>
              </div>
              <form>
                {/* row */}
                <div class="mb-3 row">
                  {/* label */}
                  <label
                    for="newEmailAddress"
                    class="col-sm-4 col-form-label form-label"
                  >
                    New email
                  </label>
                  <div class="col-md-8 col-12">
                    {/* input */}
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter your email address"
                      id="newEmailAddress"
                      required
                    />
                  </div>
                  {/* button */}
                  <div class="offset-md-4 col-md-8 col-12 mt-3">
                    <button type="submit" class="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>

              <div class="mb-6 mt-6">
                <h4 class="mb-1">Change your password</h4>
              </div>
              <form>
                {/* row */}
                <div class="mb-3 row">
                  <label
                    for="currentPassword"
                    class="col-sm-4 col-form-label form-label"
                  >
                    Current password
                  </label>

                  <div class="col-md-8 col-12">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Enter Current password"
                      id="currentPassword"
                      required
                    />
                  </div>
                </div>
                {/* row */}
                <div class="mb-3 row">
                  <label
                    for="currentNewPassword"
                    class="col-sm-4 col-form-label form-label"
                  >
                    New password
                  </label>

                  <div class="col-md-8 col-12">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Enter New password"
                      id="currentNewPassword"
                      required
                    />
                  </div>
                </div>
                {/* row */}
                <div class="row align-items-center">
                  <label
                    for="confirmNewpassword"
                    class="col-sm-4 col-form-label form-label"
                  >
                    Confirm new password
                  </label>
                  <div class="col-md-8 col-12 mb-2 mb-lg-0">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Confirm new password"
                      id="confirmNewpassword"
                      required
                    />
                  </div>
                  {/* list */}
                  <div class="offset-md-4 col-md-8 col-12 mt-4">
                    <h6 class="mb-1">Password requirements:</h6>
                    <p>Ensure that these requirements are met:</p>
                    <ul>
                      <li> Minimum 8 characters long the more, the better</li>
                      <li>At least one lowercase character</li>
                      <li>At least one uppercase character</li>
                      <li>
                        At least one number, symbol, or whitespace character
                      </li>
                    </ul>
                    <button type="submit" class="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-8">
        <div class="col">
          {/* card */}

          <div class="card">
            {/* card body */}
            <div class="card-body">
              <div class="mb-6">
                <h4 class="mb-1">Notification for email</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          {/*  card  */}

          <div class="card mb-6">
            {/*  card body  */}
            <div class="card-body">
              <div class="mb-6">
                <h4 class="mb-1">Danger Zone </h4>
              </div>
              <div>
                {/*  text  */}
                <p>
                  Delete any and all content you have, such as articles,
                  comments, your reading list or chat messages. Allow your
                  username to become available to anyone.
                </p>
                <a href="#" class="btn btn-danger">
                  Delete Account
                </a>
                <p class="small mb-0 mt-3">
                  Feel free to contact with any{" "}
                  <a href="#">arttic@gmail.com</a> questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsBasicPage;
