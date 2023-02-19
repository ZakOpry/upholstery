import React from "react";
import "../../styles/TopBannerStyles.css";

export default function NavBarButtons(props) {
  return (
    <div className="buttonDiv">
      <p className="buttonText">{props.name}</p>
    </div>
  );
}
