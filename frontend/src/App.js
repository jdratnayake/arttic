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
import FrogetPasswordPage1 from "./pages/FrogetPasswordPage/FrogetPasswordPage1";
import FrogetPasswordPage2 from "./pages/FrogetPasswordPage/FrogetPasswordPage2";


function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<SignInPage />}></Route>
        <Route path="/signupfollower" element={<SignUpFollowerPage />}></Route>
        <Route path="/signupcreator" element={<SignUpCreatorPage />}></Route>
        <Route path="/signupcreator2" element={<SignUpCreatorPage2 />}></Route>
        <Route path="/signupoption" element={<SignUpOptionPage />}></Route>
        <Route path="/feed" element={<FeedPage />}></Route>
        <Route path="/frogetpassword1" element={<FrogetPasswordPage1 />}></Route>
        <Route path="/frogetpassword2" element={<FrogetPasswordPage2 />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
