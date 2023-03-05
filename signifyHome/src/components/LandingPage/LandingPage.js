import React from 'react';
import sfProDisplay from './style.css';
import logo from './Assets/Logo.png';
import group15 from './Assets/Group 15.png';
import img1 from './Assets/1.png';
import img2 from './Assets/2.png';
import img3 from './Assets/3.png';
// import ana from './Signify/ana.png';
// import haris from './Signify/haris.png';
// import asad from './Signify/asad.png';
// import vik from './Signify/vik.png';

function LandingPage() {
  return (
    <>
      <main>
        <section id="hero">
          <div className="columns">
            <div className="column">
              <h1 style={{marginLeft: '80px', marginTop:'90px', maxHeight:'200px', maxWidth:'500px'}}>
                The bridge between <span style={{color: '#E29A0A'}}>sign language</span> and the world
              </h1>
              <p style={{marginBottom: '10%', maxWidth: '500px', fontSize: '1.2rem', marginTop: '7%'}}>
                <i>Signify</i> is a revolutionary camera vision-based app designed to help bridge the communication gap between the deaf community and hearing individuals.
              </p>
              <a href="#demo" className="cta" style={{background: 'radial-gradient(306% 4024.8% at 143.46% -72%, #E7A310 0%, #C88705 55.6%, #E7A310 100%)', borderRadius: '6px'}}>
                View the Platform
              </a>
            </div>
            <div className="column" style={{textAlign: 'right'}}>
              <img src={group15} alt="Group 15" style={{width: '100%', height: '100%', maxWidth: '580px', bottom: 0, top: 0, right: 0}} />
            </div>
          </div>
        </section>

        <section id="impact">
          <h2>Our Features</h2>
          <div className="impact" style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto'}}>
            <div className="column" style={{flex: '30%', textAlign: 'center'}}>
              <img src={img1} alt="Feature 1" style={{width: '75%'}} />
            </div>
            <div className="column" style={{flex: '30%', textAlign: 'center'}}>
              <img src={img2} alt="Feature 2" style={{width: '75%'}} />
            </div>
            <div className="column" style={{flex: '30%', textAlign: 'center'}}>
              <img src={img3} alt="Feature 3" style={{width: '75%'}} />
            </div>
          </div>
        </section>
        </main>
    </>
  );
}

export default LandingPage;

