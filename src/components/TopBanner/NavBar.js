import React from "react";
import NavBarButtons from "./NavBarButtons";
import "../../styles/TopBannerStyles.css";

export default function NavBar() {
  return (
    <div className="mainNavBar">
      <NavBarButtons name="About"></NavBarButtons>
      <NavBarButtons name="Photos"></NavBarButtons>
      <NavBarButtons name="Contact"></NavBarButtons>
    </div>
  );
}
