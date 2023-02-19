import React from "react";
import "../../styles/TopBannerStyles.css";
import Cover from "../../photos/logo3.png";
import NavBar from "./NavBar";

export default function TopBanner() {
  return (
    <div className="mainTopBannerDiv">
      <div className="logoDiv">
        <img className="logo" src={Cover} alt="MC's Upholstery"></img>
      </div>
      <NavBar></NavBar>
    </div>
  );
}
