import React from 'react';
import '../Assets/css/homepage.css';
import NavBar from './navbar.js';
import '../Assets/css/navbar.css';
import m1 from '../Assets/images/m1.jpg';
import m2 from '../Assets/images/m2.jpg';
import m3 from '../Assets/images/m3.jpg';
import m4 from '../Assets/images/m4.jpg';
import principal from '../Assets/images/Principal.jpg';
import t1 from '../Assets/images/Meera Yadav.jpg';
import t2 from '../Assets/images/Avinesh Kumar.jpg';
import t3 from '../Assets/images/Ram Khelawan.jpg';



function HomePage() {
    return (
        <div>
          <NavBar/> 

          <div className="info">
          <div className="udise">Udise Code-09250906402</div>
          <div className="school-name">श्री भगत बाबा तेजगिरि उ0मा0 विद्यालय बेहटाचाँद, लखनऊ रोड, हरदोई</div>
          </div>

          <div className="gallery">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={m1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={m2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={m3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={m4} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
          </div>

          <div className="message">
            <div className="principal-message">
            <img src={principal} class="principal" alt="..."/>
            
            <div className="message-container">
              <div className="text"> 
              <h4> -: संदेश:-</h4>
<h5>श्री भगत बाबा तेजगिरि उ0मा0 विद्यालय बेहटाचाँद, 
लखनऊ रोड, हरदोई में मुख्य मार्ग पर स्थापित है। 
विद्यालय में सुयोग्य शिक्षकों द्वारा शिक्षा प्रदान की जाती है। 
विद्यालय मंे पर्याप्त हवादार कमरे निर्मित है तथा सी0सी0 टी0वी0 से आच्छादित है। 
विद्यालय का रिजल्ट 100% प्रतिवर्ष आता है। 
कमजोर बच्चों के लिए 1 घण्टे का समय अलग से निर्धारित है। 
विद्यालय में कुल 5 शिक्षकों का स्टाफ है। 
शिक्षकों द्वारा को देशांटन, खेलकूद प्रतियोगिता एवं सेमिनार आदि का आयोजन कराया जाता है। 
विद्यालय में शुद्ध जल, खेलकूद, प्रार्थना स्थल, विद्युत पंखे आदि की व्यवस्था है।</h5></div>
              <div className="signature"><span>( विनोद कुमार यादव )</span>
						                         <span>प्रधानाचार्य</span>
						                              <span>एम0ए0बी0एड0</span>
					                                 <span>मो0नं0-6392727696</span>
                                           </div>
            </div>
            </div>
          </div>
          <div className="staff">
            <span>अध्यापकगण</span>
            <div className="teachers">
              <div className="images">
            <img src={t2} class="t" alt="..."/>

            <img src={t1} class="t" alt="..."/>

            <img src={t3} class="t" alt="..."/>
            </div>
            <div className="names">
<span>अविनेश कुमार
</span>
<span>मीरा यादव
</span>
<span>रामखेलावन
</span>
            </div>
            </div>
          </div>
        </div>
    );
}

export default HomePage;