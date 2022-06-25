import React from 'react';
import '../Assets/css/navbar.css';
import {Link} from 'react-router-dom';

function NavBar() {
    
      
    return (
        <div>
            <div className= "navbar">
              <div className="brand">bhagatbabatejgirihshardoi</div>
              <label for="toggle">&#9776;</label>
              <input type="checkbox" id="toggle" />
              <div className="nav-links">
                <Link to="/" style={{ textDecoration: 'none',color:'black',display:'block',margin:'10px' }}>होम</Link>
                <span><Link to="/about" style={{ textDecoration: 'none',color:'black',display:'block',margin:'10px' }}>हमारे बारे में</Link></span>
                <span><Link to="/gallery" style={{ textDecoration: 'none',color:'black',display:'block',margin:'10px' }}>गैलरी</Link></span>
                <span><Link to="/contact" style={{ textDecoration: 'none',color:'black',display:'block',margin:'10px' }}>सम्पर्क सूत्र</Link></span>
              </div>
            </div>
            
        </div>
    );
}

export default NavBar;