import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages";
import SigninPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/" element={<SigninPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
