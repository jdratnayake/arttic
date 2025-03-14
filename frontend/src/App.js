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
import CreatorAnalyticsCom from "./components/CreatorAnalyticsCom/CreatorAnalyticsCom";
import FrogotPasswordUsernamePage from "./pages/FrogotPasswordUsernamePage/FrogotPasswordUsernamePage";
import FrogotPasswordResetPasswordPage from "./pages/FrogotPasswordResetPasswordPage/FrogotPasswordResetPasswordPage";
import ForgotPasswordOTP from "./pages/ForgotPasswordOTP/ForgotPasswordOTP";
import EmailVerificationOTP from "./pages/EmailVerificationOTP/EmailVerificationOTP";
import ReportUserPage from "./pages/ReportUserPage/ReportUserPage";
import ReportPostPage from "./pages/ReportPostPage/ReportPostPage";
import ReportAdvertismentPage from "./pages/ReportAdvertismentPage/ReportAdvertismentPage";
import ReportCommentPage from "./pages/ReportCommentPage/ReportCommentPage";
import Settings from "./components/Settings/Settings";
import AccountManagementAdmin0Page from "./pages/AccountManageAdmin0Page/AccountManageAdmin0Page";
import DashboardAdmin0Page from "./pages/DashboardAdmin0Page/DashboardAdmin0Page";
import SystemTransactionDetailsPage from "./pages/SystemTransactionDetailsPage/SystemTransactionDetailsPage";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ReportUserAdmin1Page from "./pages/ReportUserAdmin1Page/ReportUserAdmin1Page";
import AdvertismentPage from "./pages/AdvertisementPage/AdvertisementPage";
import Feed from "./components/Feed/Feed";
import Test from "./pages/Test/Test";
import AdvertismentTablePage from "./pages/AdvertismentTablePage/AdvertismentTablePage";
import AdvertismentReviewAdminPage from "./pages/AdvertismentReviewAdminPage/AdvertismentReviewAdminPage";
import SubscribedCreatorsPage from "./pages/SubscribedCreatorsPage/SubscribedCreatorsPage";
import ExternalSignUpPasswordPage from "./pages/ExternalSignUpPasswordPage/ExternalSignUpPasswordPage";
import ChatCreatorPage from "./pages/ChatCreatorPage/ChatCreatorPage";
import FollowerProfile from "./pages/FollowerProfile/FollowerProfile";
import Favourite from "./components/Favourite/Favourite";
import ViewUserProfile from "./pages/ViewUserProfile/ViewUserProfile";
import ViewUserList from "./pages/VIewUserList/ViewUserList";
import SearchCreatorList from "./pages/SearchCreatorList/SearchCreatorList";
import ReportUserRecoveryPage from "./pages/ReportUserRecoveryPage/ReportUserRecoveryPage";
import ReportAdmin0Page from "./pages/ReportAdmin0Page/ReportAdmin0Page";
import SearchCreators from "./pages/SearchCreators/SearchCreators";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/searchcreators" element={<SearchCreators />}></Route>
        <Route
          path="/feed"
          element={<CreatorTemplate children={<Feed />} sideNavBarIndex="0" />}
        ></Route>
        <Route
          path="/favourite"
          element={
            <CreatorTemplate children={<Favourite />} sideNavBarIndex="0" />
          }
        ></Route>
        <Route
          path="/subscribedcreatorspage"
          element={
            <CreatorTemplate
              children={<SubscribedCreatorsPage />}
              sideNavBarIndex="1"
            />
          }
        ></Route>
        <Route
          path="/ViewUserList/:type"
          element={
            <CreatorTemplate children={<ViewUserList />} sideNavBarIndex="1" />
          }
        ></Route>
        <Route
          path="/searchcreatorlist"
          element={
            <CreatorTemplate
              children={<SearchCreatorList />}
              sideNavBarIndex="1"
            />
          }
        ></Route>
        <Route
          path="/settings"
          element={
            <CreatorTemplate children={<Settings />} sideNavBarIndex="5" />
          }
        ></Route>
        <Route path="/signupoption" element={<SignUpOptionPage />}></Route>
        <Route path="/signup/:userType" element={<SignUpPage />}></Route>
        <Route path="/walletconnect" element={<WalletConnectPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/creatorprofile/" element={<CreatorProfilePage />}></Route>
        <Route
          path="/viewuserprofile/:id"
          element={<ViewUserProfile />}
        ></Route>
        <Route
          path="/followerprofile/"
          element={<FollowerProfile />}
        ></Route>
        <Route
          path="/advertisment"
          element={
            <CreatorTemplate
              children={<AdvertismentTablePage />}
              sideNavBarIndex="6"
            />
          }
        ></Route>
        <Route
          path="/advertisment/form"
          element={<CreatorTemplate children={<AdvertismentPage />} />}
        ></Route>
        <Route
          path="/creator/analytics"
          element={
            <CreatorTemplate
              children={<CreatorAnalyticsCom />}
              sideNavBarIndex="4"
            />
          }
        ></Route>
        <Route
          path="/creator/chat"
          element={
            <CreatorTemplate
              children={<ChatCreatorPage />}
              sideNavBarIndex="3"
            />
          }
        ></Route>
        <Route
          path="/frogotpassword/username"
          element={<FrogotPasswordUsernamePage />}
        ></Route>
        <Route
          path="/frogotpassword/otp"
          element={<ForgotPasswordOTP />}
        ></Route>
        <Route
          path="/emailverificationotp"
          element={<EmailVerificationOTP />}
        ></Route>
        <Route
          path="/frogotpassword/passwordreset"
          element={<FrogotPasswordResetPasswordPage />}
        ></Route>
        <Route
          path="/admin0/dashboard"
          element={<Admin0Template children={<DashboardAdmin0Page />} />}
        ></Route>
        <Route
          path="/admin0/transactions"
          element={
            <Admin0Template
              children={<SystemTransactionDetailsPage />}
              sideNavBarIndex="4"
            />
          }
        ></Route>
        <Route
          path="/admin0/reviewadvertisment"
          element={
            <Admin0Template
              children={<AdvertismentReviewAdminPage />}
              sideNavBarIndex="3"
            />
          }
        ></Route>

        {/* This is not using now */}
        <Route
          path="/admin0/userdetails"
          element={
            <Admin0Template
              children={<UserDetailsPage />}
              sideNavBarIndex="1"
            />
          }
        ></Route>
        <Route
          path="/admin0/accountmanage"
          element={
            <Admin0Template
              children={<AccountManagementAdmin0Page />}
              sideNavBarIndex="1"
            />
          }
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route
          path="/admin1/reportUser"
          element={
            <Admin0Template
              children={<ReportUserAdmin1Page />}
              sideNavBarIndex="2"
            />
          }
        ></Route>
        <Route
          path="/admin1/reportUser/:id"
          element={
            <Admin0Template children={<ReportUserPage />} sideNavBarIndex="2" />
          }
        ></Route>
        <Route
          path="/admin1/reportUserRecovery/:id"
          element={
            <Admin0Template
              children={<ReportUserRecoveryPage />}
              sideNavBarIndex="1"
            />
          }
        ></Route>
        <Route
          path="/admin0/admin1manage/:id"
          element={
            <Admin0Template
              children={<ReportAdmin0Page />}
              sideNavBarIndex="1"
            />
          }
        ></Route>
        <Route
          path="/admin1/reportPost/:id"
          element={
            <Admin0Template children={<ReportPostPage />} sideNavBarIndex="2" />
          }
        ></Route>
        <Route
          path="/admin1/reportComment/:id"
          element={
            <Admin0Template
              children={<ReportCommentPage />}
              sideNavBarIndex="2"
            />
          }
        ></Route>
        <Route
          path="/admin1/reportAdvertisment/:id"
          element={
            <Admin0Template
              children={<ReportAdvertismentPage />}
              sideNavBarIndex="2"
            />
          }
        ></Route>
        <Route
          path="/test"
          element={<CreatorTemplate children={<Test />} />}
        ></Route>
        <Route
          path="/ExternalSignUpPasswordPage"
          element={<ExternalSignUpPasswordPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
