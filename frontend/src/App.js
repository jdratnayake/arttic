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

function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/feed" element={<FeedPage />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/report" element={<ReportUserPage />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
