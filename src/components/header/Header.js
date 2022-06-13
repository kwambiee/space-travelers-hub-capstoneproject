import React from 'react';
import HeaderLinks from './HeaderLinks';
import Logo from './Logo';
import './header.css';

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <HeaderLinks />
    </div>
  );
}
