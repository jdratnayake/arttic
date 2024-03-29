import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import MetaMaskOnboarding from "@metamask/onboarding";
import axios from "axios";

import { API_URL, CLIENT_URL } from "../../constants/globalConstants";
import { getAccessToken } from "../../constants/globalFunctions";
import AuthenticationFooter from "../../components/AuthenticationFooter/AuthenticationFooter";
import "./WalletConnectPage.css";
import logo from "../../images/logo.png";

function WalletConnectPage() {
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userInfo);
  const { userId } = userInfo.user;

  const [data, setData] = useState({
    username: "",
    metaMaskAddress: "",
    connectButtonName: "Connect MetaMask",
  });

  const [usernameError, setUsernameError] = useState("");

  const [metaMaskAddressError, setMetaMaskAddressError] = useState("");

  const validateData = () => {
    let output = true;

    if (data.username === "") {
      setUsernameError("Username is Required");
      output = false;
    } else {
      setUsernameError("");
    }

    if (data.metaMaskAddress === "") {
      setMetaMaskAddressError("Connect the Wallet");
      output = false;
    } else {
      setMetaMaskAddressError("");
    }

    return output;
  };

  const submitData = async (event) => {
    event.preventDefault();

    if (!validateData()) {
      return 0;
    }

    const accessToken = getAccessToken();

    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    const inputData = {
      userId: userId,
      openSeaUsername: data.username,
      walletAddress: data.metaMaskAddress,
    };

    await axios
      .post(API_URL + "/auth/creatorverify", inputData, config)
      .then((response) => {
        if (response.data.error) {
          setUsernameError(response.data.error.username);
          setMetaMaskAddressError(response.data.error.walletAddress);
        }

        if (response.data.statusCode === 1 || response.data.statusCode === 2) {
          navigate("/feed");
        }

        // if there is a error then put a popup message
      });
  };

  // useEffect(() => {
  //   if (!firstRender) {
  //     validateData();
  //   }

  //   setFirstRender(false);
  //   // console.log("Hi");
  //   // if (data.metaMaskAddress !== "") {
  //   // }
  // }, [data]);

  // METAMASK - START
  //We create a new MetaMask onboarding object to use in our app
  const onboarding = new MetaMaskOnboarding({ CLIENT_URL });

  const connectWallet = async () => {
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

      await window.ethereum
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
  // METAMASK - END

  return (
    <>
      <span class="WalletConnectPage">
        <div class="d-flex justify-content-center wallet-card">
          <div class="col-4">
            <span class="alert alert-danger" role="alert">
              Metamask wallet and Opensea username didn't match
            </span>
            <form onSubmit={submitData}>
              <div class="card card-update">
                <div class="card-body">
                  <div class="d-grid gap-2 col-12 mx-auto text-center arttic-logo">
                    <Link to="/">
                      <img src={logo} width="200" height="45" />
                    </Link>
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
                      }}
                    />
                    <div>{usernameError}</div>
                  </div>

                  <div class="col-12">
                    <br />
                    <button
                      onClick={connectWallet}
                      type="button"
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
        <AuthenticationFooter />
      </span>
    </>
  );
}

export default WalletConnectPage;
