import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "swiper/css/bundle";

import FeedPage from "./pages/FeedPage/FeedPage";
import HomePage from "./pages/HomePage/HomePage";
import SignUpCreatorPage from "./pages/SignUpCreatorPage/SignUpCreatorPage";
import SignUpCreatorPage2 from "./pages/SignUpCreatorPage/SignUpCreatorPage2";
import SignUpFollowerPage from "./pages/SignUpFollowerPage/SignUpFollowerPage";
import SignUpOptionPage from "./pages/SignUpOptionPage/SignUpOptionPage";
import SignInPage from "./pages/SIgnInPage/SignInPage";
import ReportUserPage from "./pages/ReportUserPage/ReportUserPage"
import Settings from "./components/Settings/Settings";
import DashboardAdmin0Page from "./pages/DashboardAdmin0Page/DashboardAdmin0Page";
import TransactionAdmin0Page from "./pages/TransactionAdmin0Page/TransactionAdmin0Page";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/feed" element={<FeedPage />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/report" element={<ReportUserPage />}></Route>
        <Route path="/login" element={<SignInPage />}></Route>
        <Route path="/signupfollower" element={<SignUpFollowerPage />}></Route>
        <Route path="/signupcreator" element={<SignUpCreatorPage />}></Route>
        <Route path="/signupcreator2" element={<SignUpCreatorPage2 />}></Route>
        <Route path="/signupoption" element={<SignUpOptionPage />}></Route>
        <Route path="/feed" element={<FeedPage />}></Route>
        <Route
          path="/admin0/dashboard"
          element={<DashboardAdmin0Page />}
        ></Route>
        <Route
          path="/admin0/transactions"
          element={<TransactionAdmin0Page />}
        ></Route>
        <Route path="/admin0/userdetails" element={<UserDetailsPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
