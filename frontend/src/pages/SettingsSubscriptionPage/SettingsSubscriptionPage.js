import React from "react";

import "../FeedPage/settings.css";

function SettingsSubscriptionPage() {
  return (
    <div className="settingsPage">
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col-12 mb-6">
              {/* card  --> */}
              <div class="card">
                {/* card header  --> */}
                <div class="card-header p-4 bg-white">
                  <h4 class="mb-0">ARTTIC Loyalty Levels</h4>
                </div>
                {/* card body  --> */}
                <div class="card-body">
                  {/* row  --> */}
                  <div class="row">
                    <div class="col-12">
                      <div class="mb-2">
                        {/* content  --> */}
                        <p class="text-muted mb-0">
                          The ARTTIC Loyality program is a four-tier system
                          ,comprising Base, Silver,Gold ,and Platinnumm levels.
                          which extends benefits depending on the amount of
                          ARTTIC Tokens you hold across your Portfoliio Balance.
                        </p>
                        <div className="row mt-3">
                          <div className="col-4 loyalty-col-1">
                            <span
                              class="d-block mb-3 text-dark fw-bold"
                            >
                              0%
                            </span>
                          </div>
                          <div className="col-2 loyalty-col">
                            <div className="star">
                              <i className="bi bi-star-fill"></i>
                            </div>
                            <span
                              class="d-block mb-3 text-dark fw-bold"
                            >Base</span>
                          </div>
                          <div className="col-2 loyalty-col"><div className="star">
                              <i className="bi bi-star-fill"></i>
                            </div>
                            <span
                              class="d-block mb-3 text-dark fw-bold"
                            >Silver</span>
                          </div>
                          <div className="col-2 loyalty-col">
                            <div className="star">
                              <i className="bi bi-star-fill"></i>
                            </div>
                            <span
                              class="d-block mb-3 text-dark fw-bold"
                            >Gold</span>
                            </div>
                          <div className="col-2 loyalty-col"><div className="star">
                              <i className="bi bi-star-fill"></i>
                            </div>
                            <span
                              class="d-block mb-3 text-dark fw-bold"
                            >Platinum</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsSubscriptionPage;
