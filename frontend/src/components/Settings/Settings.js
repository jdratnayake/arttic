import React from "react";
import { useState } from "react";

import "./Settings.css";
import Basic from "../../pages/SettingsBasicPage/SettingsBasicPage";
import Billing from "../../pages/SettingsBillingPage/SettingsBillingPage";
import Sub from "../../pages/SettingsSubscriptionPage/SettingsSubscriptionPage";
import Purchase from "../../pages/SettingsPurchasePage/SettingsPurchasePage";
import Page from "../../pages/PageSettings/PageSettings";
import BlockedFollower from "../../pages/SettingsBlockedFollowerPage/SettingsBlockedFollowerPage";

function Settings() {
  return (
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
            Basic
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
            Subscription & Loyalty
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
            Billing Info
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link settings-nav-link"
            id="purchase-tab"
            data-bs-toggle="tab"
            data-bs-target="#purchase-tab-pane"
            type="button"
            role="tab"
            aria-controls="purchase-tab-pane"
            aria-selected="false"
          >
            Purchase History
          </button>
        </li>
        {/* <li class="nav-item" role="presentation">
          <button
            class="nav-link settings-nav-link"
            id="page-tab"
            data-bs-toggle="tab"
            data-bs-target="#page-tab-pane"
            type="button"
            role="tab"
            aria-controls="page-tab-pane"
            aria-selected="false"
          >
            Page
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link settings-nav-link"
            id="blockedfollower-tab"
            data-bs-toggle="tab"
            data-bs-target="#blockedfollower-tab-pane"
            type="button"
            role="tab"
            aria-controls="blockedfollower-tab-pane"
            aria-selected="false"
          >
            Blocked Followers
          </button>
        </li> */}
      </ul>
      <div class="tab-content mb-5" id="myTabContent">
        <div
          class="tab-pane settingBody fade show p-2 active"
          id="basic-tab-pane"
          role="tabpanel"
          aria-labelledby="basic-tab"
          tabindex="0"
        >
          <Basic />
        </div>
        <div
          class="tab-pane settingBody fade p-2 "
          id="sub-tab-pane"
          role="tabpanel"
          aria-labelledby="sub-tab"
          tabindex="0"
        >
          <Sub />
        </div>
        <div
          class="tab-pane settingBody fade p-2 "
          id="bill-tab-pane"
          role="tabpanel"
          aria-labelledby="bill-tab"
          tabindex="0"
        >
          <Billing />
        </div>
        <div
          class="tab-pane settingBody fade p-2 "
          id="purchase-tab-pane"
          role="tabpanel"
          aria-labelledby="purchase-tab"
          tabindex="0"
        >
          <Purchase />
        </div>
        {/* <div
          class="tab-pane settingBody fade p-2 "
          id="page-tab-pane"
          role="tabpanel"
          aria-labelledby="page-tab"
          tabindex="0"
        >
          <Page />
        </div>
        <div
          class="tab-pane settingBody fade p-2 "
          id="blockedfollower-tab-pane"
          role="tabpanel"
          aria-labelledby="blockedfollower-tab"
          tabindex="0"
        >
          <BlockedFollower />
        </div> */}
      </div>
    </div>
  );
}

export default Settings;
