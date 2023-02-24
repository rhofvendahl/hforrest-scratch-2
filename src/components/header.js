import React from "react";
import { Link } from 'react-router-dom';
import '../css/header.css';
// import { SiInstagram } from "react-icons/si";

function Header() {

  return (
    <div className="header">
      <h1 className="nameHeader">HForrest</h1>
      <p className="headerLink"><Link to="/">Sculpture</Link></p>
      <p className="headerLink"><Link to="About">About</Link></p>
      <p className="headerLink"><Link to="Video">Videos</Link></p>
      <p className="headerLink"><Link to="Contact">Contact</Link></p>
    </div>
  );
}

export default Header;
