import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HeaderLinks() {
  return (
    <div className="links">
      <NavLink to="/" className={(link) => (link.isActive ? 'active-link' : 'link')}>
        Rockets
      </NavLink>
      <NavLink to="/missions" className={(link) => (link.isActive ? 'active-link' : 'link')}>
        Missions
      </NavLink>
      <NavLink to="/profile" className={(link) => (link.isActive ? 'active-link' : 'link')}>
        Profile
      </NavLink>
    </div>
  );
}
