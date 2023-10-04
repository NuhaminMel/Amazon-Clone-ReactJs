import React from "react";
import "./Nav.css";
import {Link} from 'react-router-dom'


function Nav() {
  return (
    <Link className="navLink">
        <div className="nav">
        
              <ul className="liWrapper">
                <div className="all">
                  <span>☰</span>
                  <li>All</li>
                </div>
        
                <li> Medical Care</li>
                <li> Works with Alexa</li>
                <li>Best Sellers</li>
                <li>Amazon Basics</li>
                <li>Prime</li>
                <li>Help Center</li>
                <li>New Release</li>
                <li>Today's Deals</li>
                <li>New Amazon devices from $49.99</li>
              </ul>
        
        </div>
        
    </Link>
  );
}

export default Nav;
