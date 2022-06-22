import React from 'react';
import NavBar from './navbar.js';
import bg from '../Assets/images/gbg.jpg';
import '../Assets/css/gallery.css';
import m4 from '../Assets/images/m4.jpg';
import g2 from '../Assets/images/g2.jpg';
import g3 from '../Assets/images/g3.jpg';
import m3 from '../Assets/images/m3.jpg';
import g5 from '../Assets/images/g5.jpg';


const Gallery = () => {
    return (
        <div>
            <NavBar/>

            <img src={bg} className="gallerybg" alt="..."/>
            <h1 className="heading-gallery">गैलरी</h1>

            <div className="galleryImg">
            <img src={m4} className="g1" alt="..."/>
            <img src={g2} className="g" alt="..."/>
            <img src={g3} className="g" alt="..."/>
            <img src={m3} className="g" alt="..."/>
            <img src={g5} className="g" alt="..."/>

            </div>

        </div>
    );
};

export default Gallery;