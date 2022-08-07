import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import "swiper/css/bundle";

// templates
import Admin0Template from "./templates/Admin0Template/Admin0Template";
import CreatorTemplate from "./templates/CreatorTemplate/CreatorTemplate";

// pages
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignUpOptionPage from "./pages/SignUpOptionPage/SignUpOptionPage";
import LogInPage from "./pages/LoginPage/LogInPage";
import WalletConnectPage from "./pages/WalletConnectPage/WalletConnectPage";
import CreatorProfilePage from "./pages/CreatorProfilePage/CreatorProfilePage";
import FrogetPasswordPage1 from "./pages/FrogetPasswordPage/FrogetPasswordPage1";
import FrogetPasswordPage2 from "./pages/FrogetPasswordPage/FrogetPasswordPage2";
import ReportUserPage from "./pages/ReportUserPage/ReportUserPage";
import ReportPostPage from "./pages/ReportPostPage/ReportPostPage";
import ReportAdvertismentPage from "./pages/ReportAdvertismentPage/ReportAdvertismentPage";
import ReportCommentPage from "./pages/ReportCommentPage/ReportCommentPage";
import Settings from "./components/Settings/Settings";
import AccountManagementAdmin0Page from './pages/AccountManageAdmin0Page/AccountManageAdmin0Page';
import DashboardAdmin0Page from "./pages/DashboardAdmin0Page/DashboardAdmin0Page";
import SystemTransactionDetailsPage from "./pages/SystemTransactionDetailsPage/SystemTransactionDetailsPage";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ReportUserAdmin1Page from "./pages/ReportUserAdmin1Page/ReportUserAdmin1Page";
import AdvertismentPage from "./pages/AdvertisementPage/AdvertisementPage";
import Feed from "./components/Feed/Feed";
import Test from "./pages/Test/Test";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/feed"
          element={<CreatorTemplate children={<Feed />} />}
        ></Route>
        <Route
          path="/settings"
          element={<CreatorTemplate children={<Settings />} />}
        ></Route>
        <Route path="/signupoption" element={<SignUpOptionPage />}></Route>
        <Route path="/signup/:userType" element={<SignUpPage />}></Route>
        <Route path="/walletconnect" element={<WalletConnectPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/creatorprofile" element={<CreatorProfilePage />}></Route>
        <Route
          path="/advertisment"
          element={<CreatorTemplate children={<AdvertismentPage />} />}
        ></Route>
        <Route
          path="/frogetpassword1"
          element={<FrogetPasswordPage1 />}
        ></Route>
        <Route
          path="/frogetpassword2"
          element={<FrogetPasswordPage2 />}
        ></Route>
        <Route
          path="/admin0/dashboard"
          element={<Admin0Template children={<DashboardAdmin0Page />} />}
        ></Route>
        <Route
          path="/admin0/transactions"
          element={
            <Admin0Template children={<SystemTransactionDetailsPage />} />
          }
        ></Route>
        <Route
          path="/admin0/userdetails"
          element={<Admin0Template children={<UserDetailsPage />} />}
        ></Route>
         <Route
          path="/admin0/accountmanage"
          element={<Admin0Template children={<AccountManagementAdmin0Page />} />}
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route
          path="/admin1/reportUser"
          element={<Admin0Template children={<ReportUserAdmin1Page />} />}
        ></Route>
        <Route
          path="/admin1/reportUser/:id"
          element={<Admin0Template children={<ReportUserPage />} />}
        ></Route>
        <Route
          path="/admin1/reportPost/:id"
          element={<Admin0Template children={<ReportPostPage />} />}
        ></Route>
        <Route
          path="/admin1/reportComment/:id"
          element={<Admin0Template children={<ReportCommentPage />} />}
        ></Route>
        <Route
          path="/admin1/reportAdvertisment/:id"
          element={<Admin0Template children={<ReportAdvertismentPage />} />}
        ></Route>
        <Route
          path="/test"
          element={<Admin0Template children={<Test />} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
