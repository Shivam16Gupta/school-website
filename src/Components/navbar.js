import React from 'react';
import { useState, useEffect } from "react"
import '../Assets/css/navbar.css';

function NavBar() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 20) {
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
            <div className={navbar ? "navbar-active" : "navbar"}>
                <div className="elements">
                    <div className="brand">bhagatbabatejgirihshardoi</div>
                    <div className="navs">
                        <span>होम</span>
                        <span>हमारे बारे में</span>
                        <span>गैलरी</span>
                        <span>सम्पर्क सूत्र</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default NavBar;