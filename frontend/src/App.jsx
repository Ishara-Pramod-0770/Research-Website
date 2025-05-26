import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import AboutUs from "./Pages/AboutUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import Domain from "./Pages/Domain";


const App = () => {

  return (
    <div>
     <Home />
    </div>
  );
};

export default App;
