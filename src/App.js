import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Packages from "./components/Packages/Packages";
import Subpackage from "./components/Subpackage/Subpackage";
import About from "./components/About/About";
import TestiMonials from "./components/TestiMonials/TestiMonials"




function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Main />
      <Packages />
      <Subpackage />/
      <TestiMonials />
      <Footer />
    </div>
  );
}

export default App;
