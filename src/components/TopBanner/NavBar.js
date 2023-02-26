import React from "react";
import NavBarButtons from "./NavBarButtons";
import "../../styles/TopBannerStyles.css";


export default function NavBar() {
  return (
    <div className="mainNavBar">
      <NavBarButtons name="About" to="home"> </NavBarButtons>
      <NavBarButtons name="Photos" to="photos"></NavBarButtons>
      <NavBarButtons name="Contact" to="contact"></NavBarButtons>
    </div>
  );
}
