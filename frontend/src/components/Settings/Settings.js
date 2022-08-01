import React from "react";
import { useState } from "react";

import "./Settings.css";
import Basic from '../../pages/SettingsBasicPage/SettingsBasicPage';
import Billing from '../../pages/SettingsBillingPage/SettingsBillingPage';
import Sub from '../../pages/SettingsSubscriptionPage/SettingsSubscriptionPage';
import Purchase from '../../pages/SettingsPurchasePage/SettingsPurchasePage';

function Settings() {
  return (
    <div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link settings-nav-link active" id="basic-tab" data-bs-toggle="tab" data-bs-target="#basic-tab-pane" type="button" role="tab" aria-controls="basic-tab-pane" aria-selected="true">basic</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link settings-nav-link" id="sub-tab" data-bs-toggle="tab" data-bs-target="#sub-tab-pane" type="button" role="tab" aria-controls="sub-tab-pane" aria-selected="false">Subscription and Loyalty</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link settings-nav-link" id="bill-tab" data-bs-toggle="tab" data-bs-target="#bill-tab-pane" type="button" role="tab" aria-controls="bill-tab-pane" aria-selected="false">Billing Details</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link settings-nav-link" id="purchase-tab" data-bs-toggle="tab" data-bs-target="#purchase-tab-pane" type="button" role="tab" aria-controls="purchase-tab-pane" aria-selected="false">Purchase History</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane settingBody fade show p-2 active" id="basic-tab-pane" role="tabpanel" aria-labelledby="basic-tab" tabindex="0">
          <Basic />
        </div>
        <div class="tab-pane settingBody fade show p-2 active" id="sub-tab-pane" role="tabpanel" aria-labelledby="sub-tab" tabindex="0">
          <Sub />
        </div>
        <div class="tab-pane settingBody fade show p-2 active" id="bill-tab-pane" role="tabpanel" aria-labelledby="bill-tab" tabindex="0">
          <Billing />
        </div>
        <div class="tab-pane settingBody fade show p-2 active" id="purchase-tab-pane" role="tabpanel" aria-labelledby="purchase-tab" tabindex="0">
          <Purchase />
        </div>
      </div>
    </div>
  );
}

export default Settings;
