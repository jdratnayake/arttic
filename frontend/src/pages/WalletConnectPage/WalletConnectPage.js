import { useState } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";

import { CLIENT_URL } from "../../constants/globalConstants";

import "./WalletConnectPage.css";
import logo from "../../images/logo.png";

function WalletConnectPage() {
  const [data, setData] = useState({
    connectButtonName: "Connect MetaMask",
    metaMaskAddress: "",
  });

  //We create a new MetaMask onboarding object to use in our app
  const onboarding = new MetaMaskOnboarding({ CLIENT_URL });

  const connectWallet = () => {
    // console.log("Hi");

    // check whether the MetaMask is installed or not
    // If it isn't installed we ask the user to click to install it
    // check the ethereum binding on the window object to see if it's installed
    if (!Boolean(window.ethereum && window.ethereum.isMetaMask)) {
      setData({
        ...data,
        connectButtonName: "Install MetaMask",
      });

      if (window.confirm("Click OK to install MetaMask!")) {
        onboarding.startOnboarding();
      }
    } else {
      setData({
        ...data,
        connectButtonName: "Connect MetaMask",
      });

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) =>
          setData({
            metaMaskAddress: res[0],
            connectButtonName: "MetaMask Connected",
          })
        )
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <>
      <span class="SignUpCreatorPage2">
        <div class="d-flex justify-content-center">
          <div class="col-4">
            <div class="card card-update">
              <div class="card-body">
                <div class="d-grid gap-2 col-12 mx-auto text-center arttic-logo">
                  <a href="#">
                    <img src={logo} width="200" height="45" />
                  </a>
                </div>
                <h4 class="title text-center theme">Connect Wallet</h4>

                <div class="col-12">
                  <label for="exampleFormControlInput1" class="form-label">
                    OpenSea Username
                  </label>
                  <input
                    type="text"
                    class="form-control fcup"
                    id="name"
                    placeholder=""
                    required
                  />
                </div>

                <div class="col-12">
                  <br />
                  <button
                    onClick={connectWallet}
                    type="submit"
                    class="btn wallet col-12 btnlog"
                  >
                    {data.connectButtonName}
                  </button>
                </div>

                <div class="col-12">
                  <br />
                  <button type="submit" class="btn btn-primary col-12 btnlog">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    </>
  );
}

export default WalletConnectPage;
