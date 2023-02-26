import React, { useState } from "react";
import "../../styles/MobileNavBarStyles.css";
import { AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";
import  AnchorLink from "react-anchor-link-smooth-scroll";
import Cover from "../../photos/logo3.png";

export default function MobileNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen)

  return (
    <>
      <div className="mainMobileNavBarDiv">
      <img className="logo" src={Cover} alt="MC's Upholstery"></img>
        <div className="menuDiv" onClick={() => setMenuOpen(!menuOpen)}>
          <IconContext.Provider value={{ className: "menuIcon" }}>
            <AiOutlineMenu />
          </IconContext.Provider>
        </div>
      </div>

      {menuOpen ? (
        <div className="dropDown">
          <AnchorLink
            onClick={() => setMenuOpen(!menuOpen)}
            className="link"
            href="#about"
            spy={true}
            smooth={true}
            duration={500}
            
          >
            <div className="navBarButton" >
              <h3>About</h3>
            </div>
            </AnchorLink>
          <AnchorLink
            onClick={() => setMenuOpen(!menuOpen)}
            className="link"
            href="#photos"
            spy={true}
            smooth={true}
            duration={500}
            
          >
            <div className="navBarButton" >
              <h3>Photos</h3>
            </div>
          </AnchorLink>
          <AnchorLink
            onClick={() => setMenuOpen(!menuOpen)}
            className="link"
            href="#contact"
            spy={true}
            smooth={true}
            duration={500}
            
          >
            <div className="navBarButton" >
              <h3>Contact</h3>
            </div>
          </AnchorLink>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}