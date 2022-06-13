import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderLinks() {
  return (
    <div className='links'>
      <NavLink to='/' className='link'>
        Rockets
      </NavLink>
      <NavLink to='/missions' className='link'>
        Missions
      </NavLink>
      <NavLink to='/profile' className='link'>
        Profile
      </NavLink>
    </div>
  );
}
