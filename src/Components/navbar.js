import React from 'react';
import { useState, useEffect } from "react";
import '../Assets/css/navbar.css';
import {Link} from 'react-router-dom';

function NavBar() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 60) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }

    useEffect(() => {
        changeBackground()
       
        window.addEventListener("scroll", changeBackground)
      })
    return (
        <div>
            <div className={(navbar ? "navbar-active" : "navbar")}>
            <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
    bhagatbabatejgirihshardoi    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <Link to="/"><a>होम</a></Link>
    <Link to="/about"><a>हमारे बारे में</a></Link>
    <Link to="/gallery"><a>गैलरी</a></Link>
    <Link to="contact"><a>सम्पर्क सूत्र</a></Link>
    
  </div>
</div>
            </div>
            
        </div>
    );
}

export default NavBar;