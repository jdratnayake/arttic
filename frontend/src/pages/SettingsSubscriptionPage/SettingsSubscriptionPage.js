import React from "react";

import "../FeedPage/settings.css";
import "./SettingsSubscriptionPage.css";

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
                        <div className="row mt-3 subscriptionContainer">
                          <div className="col-xl-4 col-md-12 col-sm-12 text-center pt-2 loyalty-col-1">
                            <span
                              class="d-block mb-3 text-dark fw-bold"
                            >
                              <h4 className="subscription-0">0%</h4>
                              <p className="purchase-p">of your portfolio in ARTTIC Tokens</p>
                            </span>
                          </div>
                          <div className="col-xl-2 col-md-12 col-sm-12 pt-2 loyalty-col">
                            <div className="star basicStar">
                              <i className="bi bi-star-fill"></i>
                            </div>
                            <span
                              class="d-block pt-2 mb-3 text-dark fw-bold"
                            ><h4>Base</h4>
                            <p className="purchase-p">Upto 1% ARTTIC in portfolio</p><button className="btn btn-secondary">Current</button></span>
                          </div>
                          <div className="col-xl-2 col-md-12 col-sm-12 pt-2 loyalty-col">
                            <div className="star silverStar">
                                <i className="bi bi-star-fill"></i>
                              </div>
                              <span
                                class="d-block pt-2 mb-3 text-dark fw-bold"
                              ><h4>Silver</h4>
                              <p className="purchase-p">1%-5% ARTTIC in portfolio</p><button className="btn subBtn">Upgrade</button></span>
                            </div>
                          <div className="col-xl-2 col-md-12 col-sm-12 pt-2 loyalty-col">
                            <div className="star goldStar">
                              <i className="bi bi-star-fill"></i>
                            </div>
                            <span
                              class="d-block pt-2 mb-3 text-dark fw-bold"
                            ><h4>Gold</h4>
                            <p className="purchase-p">5%-10% ARTTIC in portfolio</p><button className="btn subBtn">Upgrade</button></span>
                            </div>
                          <div className="col-xl-2 col-md-12 col-sm-12 pt-2 loyalty-col">
                            <div className="star platinumStar">
                              <i className="bi bi-star-fill"></i>
                            </div>
                            <span
                              class="d-block pt-2 mb-3 text-dark fw-bold"
                            ><h4>Platinum</h4>
                            <p className="purchase-p">5%-10% ARTTIC in portfolio</p><button className="btn subBtn">Upgrade</button></span></div>
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
