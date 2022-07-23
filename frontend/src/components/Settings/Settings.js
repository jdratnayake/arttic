import React from "react";
import { useState } from "react";

import "./Settings.css";
import Basic from '../../pages/SettingsBasicPage/SettingsBasicPage';
import Billing from '../../pages/SettingsBillingPage/SettingsBillingPage';
import Sub from '../../pages/SettingsSubscriptionPage/SettingsSubscriptionPage';
import Purchase from '../../pages/SettingsPurchasePage/SettingsPurchasePage';

function Settings() {
  const [component, setComponent] = useState("Basic");

  const handleClick = (component) => {
    switch (component) {
      case "Basic":
        setComponent("Basic");
        break;
      case "Sub":
        setComponent("Sub");
        break;
      case "Billing":
        setComponent("Billing");
        break;
      case "Purchase":
        setComponent("Purchase");
        break;
    }
  };

  return (
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a
            class="nav-link active settings-nav-link"
            aria-current="page"
            onClick={() => handleClick("Basic")}
          >
            Basic
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link settings-nav-link"
            onClick={() => handleClick("Sub")}
          >
            Subscription and Loyalty
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link settings-nav-link"
            onClick={() => handleClick("Billing")}
          >
            Billing Details
          </a>
        </li>
        <li class="nav-item" onClick={() => handleClick("Purchase")}>
          <a class="nav-link settings-nav-link">Purchase History</a>
        </li>
      </ul>

      <div className="container p-2 settingBody">
        {component === "Basic" && <Basic />}
        {component === "Sub" && <Sub />}
        {component === "Billing" && <Billing />}
        {component === "Purchase" && <Purchase />}
      </div>
    </div>
  );
}

// function Basic() {
//   return (
//     <>
//       <div class="accordion" id="accordionPanelsStayOpenExample">
//         <div class="accordion-item">
//           <h2 class="accordion-header" id="panelsStayOpen-headingOne">
//             <button
//               class="accordion-button settings-accordian-btn"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#panelsStayOpen-collapseOne"
//               aria-expanded="true"
//               aria-controls="panelsStayOpen-collapseOne"
//             >
//               <i className="bi bi-person-circle settings-accordian-i"></i>Manage
//               Account
//             </button>
//           </h2>
//           <div
//             id="panelsStayOpen-collapseOne"
//             class="accordion-collapse collapse show"
//             aria-labelledby="panelsStayOpen-headingOne"
//           >
//             <div class="accordion-body">
//               <a className="btn btn-main-primary settings-btn">
//                 Change Profile
//               </a>
//             </div>
//           </div>
//         </div>
//         <div class="accordion-item">
//           <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
//             <button
//               class="accordion-button settings-accordian-btn"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#panelsStayOpen-collapseTwo"
//               aria-expanded="true"
//               aria-controls="panelsStayOpen-collapseTwo"
//             >
//               <i class="bi bi-shield-lock-fill settings-accordian-i"></i>
//               Passwords
//             </button>
//           </h2>
//           <div
//             id="panelsStayOpen-collapseTwo"
//             class="accordion-collapse collapse show"
//             aria-labelledby="panelsStayOpen-headingTwo"
//           >
//             <div class="accordion-body">
//               Password should contain 8 characters.
//               <br />
//               <a className="btn btn-main-primary settings-btn">
//                 Change Password
//               </a>
//             </div>
//           </div>
//         </div>
//         <div class="accordion-item">
//           <h2 class="accordion-header" id="panelsStayOpen-headingThree">
//             <button
//               class="accordion-button collapsed settings-accordian-btn"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#panelsStayOpen-collapseThree"
//               aria-expanded="false"
//               aria-controls="panelsStayOpen-collapseThree"
//             >
//               <i class="bi bi-person-badge-fill settings-accordian-i"></i>
//               profile Preferences
//             </button>
//           </h2>
//           <div
//             id="panelsStayOpen-collapseThree"
//             class="accordion-collapse collapse"
//             aria-labelledby="panelsStayOpen-headingThree"
//           >
//             <div class="accordion-body">
//               <strong>This is the third item's accordion body.</strong> It is
//               hidden by default, until the collapse plugin adds the appropriate
//               classes that we use to style each element. These classes control
//               the overall appearance, as well as the showing and hiding via CSS
//               transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="settings-actions mt-5">
//         <a className="btn btn-main-primary settings-btn">Cancel</a>
//         <a className="btn btn-main-primary settings-btn">Save</a>
//       </div>
//     </>
//   );
// }

// function Sub() {
//   return (
//     <>
//       <div class="accordion" id="accordionPanelsStayOpenExample">
//         <div class="accordion-item">
//           <h2 class="accordion-header" id="panelsStayOpen-headingOne">
//             <button
//               class="accordion-button settings-accordian-btn"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#panelsStayOpen-collapseOne"
//               aria-expanded="true"
//               aria-controls="panelsStayOpen-collapseOne"
//             >
//               <i className="bi bi-person-circle settings-accordian-i"></i>Manage
//               Account
//             </button>
//           </h2>
//           <div
//             id="panelsStayOpen-collapseOne"
//             class="accordion-collapse collapse show"
//             aria-labelledby="panelsStayOpen-headingOne"
//           >
//             <div class="accordion-body">
//               <a className="btn btn-main-primary settings-btn">
//                 Change Profile
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// function Billing() {
//   return (
//     <>
//       <div class="accordion" id="accordionPanelsStayOpenExample">
//         <div class="accordion-item">
//           <h2 class="accordion-header" id="panelsStayOpen-headingOne">
//             <button
//               class="accordion-button settings-accordian-btn"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#panelsStayOpen-collapseOne"
//               aria-expanded="true"
//               aria-controls="panelsStayOpen-collapseOne"
//             >
//               <i class="bi bi-credit-card-2-back-fill settings-accordian-i"></i>Billing
//             </button>
//           </h2>
//           <div
//             id="panelsStayOpen-collapseOne"
//             class="accordion-collapse collapse show"
//             aria-labelledby="panelsStayOpen-headingOne"
//           >
//             <div class="accordion-body">
//               <a className="btn btn-main-primary settings-btn">
//                 Change Profile
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// function Purchase() {
//   return (
//     <>
//       <div class="accordion" id="accordionPanelsStayOpenExample">
//         <div class="accordion-item">
//           <h2 class="accordion-header" id="panelsStayOpen-headingOne">
//             <button
//               class="accordion-button settings-accordian-btn"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#panelsStayOpen-collapseOne"
//               aria-expanded="true"
//               aria-controls="panelsStayOpen-collapseOne"
//             >
//               <i class="bi bi-credit-card-2-back-fill settings-accordian-i"></i>Purchase
//             </button>
//           </h2>
//           <div
//             id="panelsStayOpen-collapseOne"
//             class="accordion-collapse collapse show"
//             aria-labelledby="panelsStayOpen-headingOne"
//           >
//             <div class="accordion-body">
//               <a className="btn btn-main-primary settings-btn">
//                 Change Profile
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default Settings;
