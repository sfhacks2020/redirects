import React from "react";
import "./App.css";

// import LandingPage_temp from "./screens/LandingPage/index";
import LandingSection from "./screens/LandingSection";
import AboutSection from "./screens/AboutSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <LandingSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;