import React from "react";
import NavBar from "../Pages/NavBar/NavBar";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/Footer/Footer";

const Root = () => {
  return (
    <div className="lato-font">
      <div className="max-w-6xl mx-auto px-2">
        <NavBar></NavBar>
        <Home></Home>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
