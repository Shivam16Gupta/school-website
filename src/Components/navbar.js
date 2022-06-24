import React from 'react';
import '../Assets/css/navbar.css';
import {Link} from 'react-router-dom';

function NavBar() {
    
      
    return (
        <div>
            <div className= "navbar">
              <div className="brand">bhagatbabatejgirihshardoi</div>
              <div className="nav-links">
                <Link to="/" style={{ textDecoration: 'none',color:'black' }}>होम</Link>
                <span><Link to="/about" style={{ textDecoration: 'none',color:'black' }}>हमारे बारे में</Link></span>
                <span><Link to="/gallery" style={{ textDecoration: 'none',color:'black' }}>गैलरी</Link></span>
                <span><Link to="/contact" style={{ textDecoration: 'none',color:'black' }}>सम्पर्क सूत्र</Link></span>
              </div>
            </div>
            
        </div>
    );
}

export default NavBar;