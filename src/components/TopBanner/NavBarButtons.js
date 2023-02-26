import React from "react";
import "../../styles/TopBannerStyles.css";
import { Link } from "react-scroll";

export default function NavBarButtons(props) {
  return (
      <div className="buttonDiv">
        <Link className="buttonText" activeClass="active" to={props.to} spy="true" smooth="true">{props.name}</Link>
      </div>
  );
}

