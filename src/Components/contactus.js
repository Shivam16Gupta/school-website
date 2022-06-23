import React from 'react';
import NavBar from './navbar.js';
import bg from '../Assets/images/contactbg.jpg';
import '../Assets/css/contactus.css';
import pPic from '../Assets/images/Principal.jpg';
import aPic from '../Assets/images/bhagat baba.jpg';


const ContactUs = () => {
    return (
        <div>
            <NavBar/>

            <img src={bg} className="contactbg" alt="..."/>
            <h1 className="heading-contact">सम्पर्क सूत्र</h1>

            <div className="contact-content">
                <div className="arranger-contact">
                <img src={aPic} alt="..." className="arranger-pic" />
                <div className="content">
                <div className="name">
                <span>श्री भगत बाबा तेजगिरि</span>
                <span className="">प्रबंधक</span>
                </div>
                <div className="contact">
                    <span>ईमेल आई.डी.- bhagatbabatejgiri@gmail.com</span>
                    <span>मोबाइल नं0- 9450577124</span>
                </div>
                </div>
                </div>

                <div className="principal-contact">
                <img src={pPic} alt="..." className="principal-pic" />
                <div className="content">
                <div className="name">
                <span>श्री विनोद कुमार यादव</span>
                <span className="">प्रधानाचार्य</span>
                </div>
                <div className="contact">
                    <span>ईमेल आई.डी.- ssgbs1205@gmail.com</span>
                    <span>मोबाइल नं0- 6392727696</span>
                </div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;