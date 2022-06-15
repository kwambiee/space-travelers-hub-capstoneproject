import React from "react";
import logo from "../images/planet.png";

export default function Logo() {
  return (
    <div className='logo'>
      <img src={logo} width={50} height={50} alt='planet-logo' />
      <h1>Space Traveler&apos;s Hub</h1>
    </div>
  );
}
