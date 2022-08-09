import React from "react";

import "./CreatorAnalyticsCom.css";

import CreatorAnalyticsBasic from "../../pages/CreatorAnalyticsBasic/CreatorAnalyticsBasic";
import CreatorAnalyticsPosts from "../../pages/CreatorAnalyticsPosts/CreatorAnalyticsPosts";
import CreatorAnalyticsAdvertisments from "../../pages/CreatorAnalyticsAdvertisments/CreatorAnalyticsAdvertisments";

function CreatorAnalyticsCom() {
    return (
        <>
            <div>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link settings-nav-link active"
                            id="basic-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#basic-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="basic-tab-pane"
                            aria-selected="true"
                        >
                            Followers
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link settings-nav-link"
                            id="sub-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#sub-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="sub-tab-pane"
                            aria-selected="false"
                        >
                            Posts
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link settings-nav-link"
                            id="bill-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#bill-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="bill-tab-pane"
                            aria-selected="false"
                        >
                            Advertisments
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div
                        class="tab-pane settingBody fade show p-2 active"
                        id="basic-tab-pane"
                        role="tabpanel"
                        aria-labelledby="basic-tab"
                        tabindex="0"
                    >
                        <CreatorAnalyticsBasic />
                    </div>
                    <div
                        class="tab-pane settingBody fade p-2 "
                        id="sub-tab-pane"
                        role="tabpanel"
                        aria-labelledby="sub-tab"
                        tabindex="0"
                    >
                        <CreatorAnalyticsPosts />
                    </div>
                    <div
                        class="tab-pane settingBody fade p-2 "
                        id="bill-tab-pane"
                        role="tabpanel"
                        aria-labelledby="bill-tab"
                        tabindex="0"
                    >
                        <CreatorAnalyticsAdvertisments />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreatorAnalyticsCom;