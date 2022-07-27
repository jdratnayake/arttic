import { useState, useEffect } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";

import { CLIENT_URL } from "../../constants/globalConstants";

import "./WalletConnectPage.css";
import logo from "../../images/logo.png";

function WalletConnectPage() {
  const [data, setData] = useState({
    username: "",
    metaMaskAddress: "",
    connectButtonName: "Connect MetaMask",
  });

  const [usernameError, setUsernameError] = useState("");

  const [metaMaskAddressError, setMetaMaskAddressError] = useState("");

  //We create a new MetaMask onboarding object to use in our app
  const onboarding = new MetaMaskOnboarding({ CLIENT_URL });

  const validateData = () => {
    if (data.username === "") {
      console.log(123);
      setUsernameError("Username is Required");
    } else {
      setUsernameError("");
    }

    if (data.metaMaskAddress === "") {
      setMetaMaskAddressError("Connect the Wallet");
    } else {
      setMetaMaskAddressError("");
    }
  };

  const submitData = (event) => {
    event.preventDefault();

    validateData();

    console.log(data.username);
    console.log(data.metaMaskAddress);
  };

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
            ...data,
            metaMaskAddress: res[0],
            connectButtonName: "MetaMask Connected",
          })
        )
        .catch((err) => {
          console.error(err);
        });
    }
  };

  useEffect(() => {
    if (data.metaMaskAddress !== "") {
      validateData();
    }
  }, [data]);

  return (
    <>
      <span class="SignUpCreatorPage2">
        <div class="d-flex justify-content-center">
          <div class="col-4">
            <form onSubmit={submitData}>
              <div class="card card-update">
                <div class="card-body">
                  <div class="d-grid gap-2 col-12 mx-auto text-center arttic-logo">
                    <a href="#">
                      <img src={logo} width="200" height="45" />
                    </a>
                  </div>
                  <h4 class="title text-center theme">Connect Wallet</h4>

                  <div class="col-12">
                    <label for="username" class="form-label">
                      OpenSea Username
                    </label>
                    <input
                      type="text"
                      class="form-control fcup"
                      id="username"
                      placeholder="Enter OpenSea Username"
                      onChange={(event) => {
                        setData({ ...data, username: event.target.value });
                        validateData();
                      }}
                    />
                    <div>{usernameError}</div>
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
                    <div>{metaMaskAddressError}</div>
                  </div>

                  <div class="col-12">
                    <br />
                    <button type="submit" class="btn btn-primary col-12 btnlog">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </span>
    </>
  );
}

export default WalletConnectPage;
