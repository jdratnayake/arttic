import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "swiper/css/bundle";

import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
