import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";

import {
  ADVERTISMENT_DAY_PRICE,
  API_URL,
  PICTURE_FILE_SIZE,
  SUPPORTED_PICTURE_FORMATS,
} from "../../constants/globalConstants";
import {
  initialAdvertismentValues,
  advertismentValidation,
  removeTime,
  getDifferenceInDays,
} from "./Validation";

import "./AdvertisementPage.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

function AdvertismentPage() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const tomorrowPlus = new Date();
  tomorrowPlus.setDate(tomorrowPlus.getDate() + 2);

  const userInfo = useSelector((state) => state.userInfo);
  const { userId, accessToken } = userInfo.user;

  const navigate = useNavigate();

  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(removeTime(tomorrow));
  const [endDate, setEndDate] = useState(removeTime(tomorrowPlus));
  const [discountRate, setDiscountRate] = useState(1);
  const [price, setPrice] = useState((10).toFixed(2));

  const [errorPicture, setErrorPicture] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [startDateError, setStartDateError] = useState("");
  const [rangeDateError, setRangeDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const [firstRender, setFirstRender] = useState(true);
  const [firstRenderForPicture, setFirstRenderForPicture] = useState(true);

  // Validation - START
  const descriptionValidation = () => {
    if (description) {
      setErrorDescription("");
    } else {
      setErrorDescription("Description is required");
      return false;
    }

    return true;
  };

  const dateValidation1 = (date1, type = 1) => {
    const date2 = removeTime(new Date());
    // console.log(date1.getTime());
    // console.log(date2.getTime());
    dateValidation2(startDate, endDate);

    if (date1.getTime() > date2.getTime()) {
      console.log("True");
      if (type == 1) {
        setStartDateError("");
      } else if (type === 2) {
        setEndDateError("");
      }
    } else {
      console.log("False");
      setPrice((0).toFixed(2));
      if (type == 1) {
        setStartDateError("Invalid Start Date");
      } else if (type === 2) {
        setEndDateError("Invalid End Date");
      }
      return false;
    }
    return true;
  };

  const dateValidation2 = (date1, date2) => {
    const duration = getDifferenceInDays(startDate, endDate);

    if (duration <= 0) {
      setPrice((0).toFixed(2));
      setRangeDateError("Invalid date range");
      setStartDateError("");
      setEndDateError("");
      return false;
    } else {
      setRangeDateError("");
    }
    return true;
  };

  const pictureValidation = () => {
    console.log("Hi");
    // console.log(picture.size);
    // console.log(PICTURE_FILE_SIZE);
    if (picture) {
      if (picture.size <= PICTURE_FILE_SIZE) {
        setErrorPicture("");
      } else {
        setErrorPicture("File too large");
        return false;
      }

      if (SUPPORTED_PICTURE_FORMATS.includes(picture.type)) {
        setErrorPicture("");
      } else {
        setErrorPicture("Unsupported format");
        return false;
      }
    } else {
      setErrorPicture("File is required");
      return false;
    }

    return true;
  };
  // Validation - END

  const imgHandler = (e) => {
    const fileImage = document.querySelector(".input-preview__src");
    const filePreview = document.querySelector(".input-preview");

    fileImage.onchange = function () {
      const reader = new FileReader();

      reader.onload = function (e) {
        // get loaded data and render thumbnail.
        filePreview.style.backgroundImage = "url(" + e.target.result + ")";
        filePreview.classList.add("has-image");
      };

      // read the image file as a data URL.
      reader.readAsDataURL(this.files[0]);

      setPicture(this.files[0]);
      console.log(this.files[0]);
    };
  };

  const getData = async () => {
    const token = {
      headers: {
        authorization: accessToken,
        userid: userId,
      },
    };

    await axios
      .get(API_URL + "/advertisment/getadvertismentdiscountrate/", token)
      .then((res) => {
        console.log(res.data);
        setDiscountRate(res.data.discountRate);
        setPrice((10 * res.data.discountRate).toFixed(2));
        // const newList = advertismentTable.filter((data) => {
        //   return data.advertisementId !== advertismentId;
        // });
        // setAdvertismentTable(newList);
      });
  };

  useEffect(() => {
    dateValidation1(endDate, 2);

    const duration = getDifferenceInDays(startDate, endDate);

    if (duration > 0) {
      const priceNew = (
        duration *
        ADVERTISMENT_DAY_PRICE *
        discountRate
      ).toFixed(2);
      setPrice(priceNew);
    } else {
      setPrice((0).toFixed(2));
      setRangeDateError("Invalid date range");
      setStartDateError("");
      setEndDateError("");
    }
  }, [startDate, endDate]);

  useEffect(() => {
    dateValidation1(startDate, 1);
  }, [startDate]);

  useEffect(() => {
    if (!firstRender) {
      descriptionValidation();
    }
    setFirstRender(false);
  }, [description]);

  useEffect(() => {
    if (!firstRenderForPicture) {
      pictureValidation();
    }
    setFirstRenderForPicture(false);
  }, [picture]);

  useEffect(() => {
    getData();
  }, []);

  const registerAdvertisment = async (data) => {
    if (pictureValidation()) {
      if (descriptionValidation()) {
        if (dateValidation2()) {
          if (dateValidation1(startDate, 1)) {
            if (dateValidation1(endDate, 2)) {
              // console.log("janitha123");
              // console.log(data.category);
              // console.log(picture);
              // console.log(description);
              // console.log(startDate);
              // console.log(endDate);
              // console.log(price);
              const config = {
                headers: {
                  "content-type": "multipart/form-data",
                  authorization: accessToken,
                  userid: userId,
                  uploadfiletype: "5",
                },
              };

              const inputData = new FormData();
              console.log(startDate);
              inputData.append("file", picture);
              inputData.append("category", data.category);
              inputData.append("description", description);
              inputData.append("startDate", startDate);
              inputData.append("endDate", endDate);
              inputData.append("price", price);

              await axios
                .post(
                  API_URL + "/advertisment/newadvertisment/",
                  inputData,
                  config
                )
                .then((response) => {
                  // console.log(response);
                  toast.success(
                    "You Have Successfully Created the Advertisement",
                    {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );

                  const delayInMilliseconds = 3000;

                  setTimeout(function () {
                    navigate("/advertisment");
                  }, delayInMilliseconds);
                });
            }
          }
        }
      }
    }
  };

  return (
    <span className="AdvertismentPage">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="col-md-12 col-xs-12">
        <div className="settingsPage">
          <div class="row mb-8">
            <div class="col">
              {/* card */}
              <div class="card">
                {/* card body */}
                <div class="card-body">
                  <div class=" mb-6">
                    <h4 class="mb-1">Advertisment Form</h4>
                  </div>

                  <div>
                    <Formik
                      initialValues={initialAdvertismentValues}
                      validationSchema={advertismentValidation}
                      onSubmit={registerAdvertisment}
                    >
                      {({ isSubmitting }) => (
                        <Form>
                          <div class="mb-3 row">
                            <label
                              for="category"
                              class="col-sm-4 col-form-label form-label"
                            >
                              Category
                            </label>

                            <div class="col-md-8 col-12">
                              <Field
                                as="select"
                                name="category"
                                class="form-select"
                              >
                                <option value="0">Select Category</option>
                                <option value="1">Anime</option>
                                <option value="2">Artwork</option>
                                <option value="3">Music and Media</option>
                                <option value="4">Gaming</option>
                                <option value="5">Memes</option>
                              </Field>
                              <ErrorMessage
                                name="category"
                                component="div"
                                className="error-msg"
                              />

                              <br />
                            </div>
                          </div>

                          {/* row */}
                          <div class="mb-3 row">
                            <label
                              for="addImg"
                              class="col-sm-4 col-form-label form-label"
                            >
                              Image
                            </label>
                            <div class="col-md-8 col-12">
                              <Field
                                type="file"
                                class="form-control input-preview__src"
                                name="addImg"
                                onClick={imgHandler}
                              />
                            </div>

                            <div class="offset-md-4 col-md-8 mt-4">
                              <div className="input-preview"></div>
                              <div className="error-msg">{errorPicture}</div>
                              <br />
                            </div>
                          </div>

                          {/* row */}
                          <div class="mb-3 row">
                            <label
                              for="email"
                              class="col-sm-4 col-form-label form-label"
                            >
                              Description
                            </label>
                            <div class="col-md-8 col-12">
                              <textarea
                                class="form-control"
                                placeholder="Add a small description about your add..."
                                id="description"
                                rows={5}
                                onChange={(e) => setDescription(e.target.value)}
                              />
                              <div className="error-msg">
                                {errorDescription}
                              </div>
                            </div>
                          </div>

                          {/* row */}
                          <div class="mb-3 row">
                            <label
                              for="fullName"
                              class="col-sm-4 col-form-label form-label"
                            >
                              Duration
                            </label>
                            <div class="col-sm-4 mb-3 mb-lg-0">
                              <label for="enDate">Start Date:</label>
                              <div class="input-group mb-3">
                                <DatePicker
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                  className="date-picker-date"
                                />
                                <div className="error-msg">
                                  {startDateError}
                                </div>
                                <div className="error-msg">
                                  {rangeDateError}
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <label for="basic-url">End Date:</label>
                              <div class="input-group mb-3">
                                <DatePicker
                                  selected={endDate}
                                  onChange={(date) => setEndDate(date)}
                                  className="date-picker-date"
                                />
                                <div className="error-msg">{endDateError}</div>
                              </div>
                            </div>
                          </div>

                          {/* row */}
                          <div class="mb-3 row">
                            <label
                              for="price"
                              class="col-sm-4 col-form-label form-label"
                            >
                              Price
                            </label>
                            <div class="col-md-8 col-12">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="$25"
                                id="price"
                                value={"$" + price}
                                readOnly
                              />
                            </div>
                          </div>

                          <div class="mb-3 row">
                            <div class="col-md-6 mt-4">
                              <button
                                type="submit"
                                class="btn btn-secondary"
                                onClick={() => {
                                  navigate("/Advertisment");
                                }}
                              >
                                Back
                              </button>
                            </div>
                            <div class="col-md-6 mt-4 d-flex justify-content-end">
                              <button
                                type="submit"
                                class="btn btn-primary"
                                onClick={() => {
                                  descriptionValidation();
                                  dateValidation1(endDate, 2);
                                  dateValidation1(startDate, 1);
                                  dateValidation2();
                                  console.log("Hi Now");
                                  pictureValidation();
                                }}
                              >
                                {" "}
                                Submit
                              </button>
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default AdvertismentPage;
