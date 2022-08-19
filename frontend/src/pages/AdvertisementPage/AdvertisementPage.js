import DatePicker from "react-datepicker";
import React, { useState } from "react";
import {
    useNavigate,
} from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import "./AdvertisementPage.css";
import "react-datepicker/dist/react-datepicker.css";


function AdvertismentPage() {

    const navigate = useNavigate();

    const [cDate, setStartDate] = useState(new Date());

    const userInfo = useSelector((state) => state.userInfo);
    const { userId, accessToken } = userInfo.user;

    const newAdd = async => {
        const config = {
            headers: {
                "content-type": "multipart/form-data",
                authorization: accessToken,
                userid: userId,
                uploadfiletype: "3",
            }
        };
        const inputData = new FormData();
    };

    const imgHandler = (e) => {
        const fileImage = document.querySelector('.input-preview__src');
        const filePreview = document.querySelector('.input-preview');

        fileImage.onchange = function () {
            const reader = new FileReader();

            reader.onload = function (e) {
                // get loaded data and render thumbnail.
                filePreview.style.backgroundImage = "url(" + e.target.result + ")";
                filePreview.classList.add("has-image");
            };

            // read the image file as a data URL.
            reader.readAsDataURL(this.files[0]);
        };

    }

    return (
        <span className="AdvertismentPage">

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
                                        <form onSubmit={newAdd}>
                                            {/* row */}
                                            <div class="mb-3 row">
                                                <label for="category" class="col-sm-4 col-form-label form-label">
                                                    Category
                                                </label>

                                                <div class="col-md-8 col-12">
                                                    <select class="form-select" id="category" required>
                                                        <option>Select Category</option>
                                                        <option value="1">India</option>
                                                        <option value="2">UK</option>
                                                        <option value="3">USA</option>
                                                    </select>
                                                    <br />
                                                </div>
                                            </div>

                                            {/* row */}
                                            <div class="mb-3 row">
                                                <label for="addImg" class="col-sm-4 col-form-label form-label">
                                                    Image
                                                </label>
                                                <div class="col-md-8 col-12">
                                                    <input type="file" class="form-control input-preview__src" name="addImg"
                                                        onClick={imgHandler} required
                                                    />
                                                </div>

                                                <div class="offset-md-4 col-md-8 mt-4">
                                                    <div className="input-preview"></div>
                                                    <br />
                                                </div>
                                            </div>

                                            {/* row */}
                                            <div class="mb-3 row">
                                                <label for="email" class="col-sm-4 col-form-label form-label">
                                                    Description
                                                </label>
                                                <div class="col-md-8 col-12">
                                                    <textarea class="form-control"
                                                        placeholder="Add a small description about your add..."
                                                        id="description" rows={5} required
                                                    />
                                                </div>
                                            </div>

                                            {/* row */}
                                            <div class="mb-3 row">
                                                <label for="fullName" class="col-sm-4 col-form-label form-label">
                                                    Duration
                                                </label>
                                                <div class="col-sm-4 mb-3 mb-lg-0">
                                                    <label for="enDate">
                                                        Start Date:
                                                    </label>
                                                    <div class="input-group mb-3">
                                                        <DatePicker
                                                            selected={cDate}
                                                            onChange={(date) => setStartDate(date)}
                                                            className="date-picker-date"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <label for="basic-url">
                                                        End Date:
                                                    </label>
                                                    <div class="input-group mb-3">
                                                        <DatePicker
                                                            selected={cDate}
                                                            onChange={(date) => setStartDate(date)}
                                                            className="date-picker-date"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* row */}
                                            <div class="mb-3 row">
                                                <label for="phone" class="col-sm-4 col-form-label form-label">
                                                    Views per Day
                                                </label>
                                                <div class="col-md-8 col-12">
                                                    <input type="number" class="form-control" placeholder="Views per Day "
                                                        id="vpd" min="0"
                                                    />
                                                </div>
                                            </div>

                                            {/* row */}
                                            <div class="mb-3 row">
                                                <label for="price" class="col-sm-4 col-form-label form-label">
                                                    Price
                                                </label>
                                                <div class="col-md-8 col-12">
                                                    <input type="text" class="form-control" placeholder="$25"
                                                        id="price" readOnly
                                                    />
                                                </div>
                                            </div>

                                            {/* row */}
                                            <div class="mb-3 row">
                                                <div class="col-md-6 mt-4">
                                                    <button type="submit" class="btn btn-secondary"
                                                        onClick={() => {
                                                            navigate("/Advertisment");
                                                        }}
                                                    >

                                                        Back
                                                    </button>
                                                </div>
                                                <div class="col-md-6 mt-4 d-flex justify-content-end">
                                                    <button type="submit" class="btn btn-primary">
                                                        {" "}
                                                        Submit
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
            </div>

        </span>



    )

}





export default AdvertismentPage;