import React from "react";
import "./app.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pagedaccueil from "./pagedaccueil";
import PageConnexion from "./pageConnexion ";
import PageContacter from "./pageContacter ";
import Pagecreer from "./pagecreer ";
import Pageprofile from "./pageprofile";
import Navbar from "./navbar";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pagedaccueil />} />
        <Route path="/pageconnexion" element={<PageConnexion />} />
        <Route path="/pagecontacter" element={<PageContacter />} />
        <Route path="/pagecreer" element={<Pagecreer />} />
        <Route path="/pageprofile" element={<Pageprofile />} />
      </Routes>
      <ToastContainer position="top-right" />
    </Router>
  );
};

export default App;
