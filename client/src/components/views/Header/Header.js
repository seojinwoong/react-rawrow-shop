import React from "react";
import "./Sections/Header.css";
import EventTopRolling from "./Sections/EventTopRolling";

function Header() {
  return (
    <div className="header-wrapper">
      {/* event-top-rolling */}
      <EventTopRolling />
      {/* // event-top-rolling */}

      {/* nav-bar */}
      <div className="nav-bar"></div>
      {/* // nav-bar */}
    </div>
  );
}

export default Header;
