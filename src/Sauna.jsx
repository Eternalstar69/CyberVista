import React from 'react';
import HeroSection from './HeroSection';
import LeftPicNoButton  from './LeftPicNoButton';
import Footers   from './Footers';
const Sauna = () => {
    return (
        <div>
             <HeroSection
        title="XDD"
        subtitle="A RAT SPA"
        mainText="FOR THE EMPOWERED"
        mainText2="AND THE RESTED"
        description="Our sauna is a place of serenity for you to relax and rejuvenate. We offer a variety of treatments and services to help you feel your best. Our sauna is a place of serenity for you to relax and rejuvenate. We offer a variety of treatments and services to help you feel your best.
"
      />
       <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100vh',
        backgroundColor: '#f8f3e6',
      }}
    >
      {/* Text Section */}
      <div
        style={{
          flex: 1,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', // Centers the entire block horizontally
        }}
      >
        {/* Infrared Sauna Benefits */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <div style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textAlign: 'left',
            }}>
          <h3>BENEFITS OF </h3>
            <h3>INFRARED SAUNA</h3>
          
          </div>
         
          <ul
            style={{
              listStyleType: 'none',
              padding: 0,
              margin: 0,
              lineHeight: '1.8',
              fontSize: '16px',
              textAlign: 'left', // Aligns text inside the list to the left
            }}
          >
            <li>Boosts circulation</li>
            <li>Soothes sore muscles</li>
            <li>Eases joint pain and stiffness</li>
            <li>Promotes better sleep</li>
            <li>Lowers stress levels</li>
            <li>Boosts immunity</li>
            <li>Aids in detoxification</li>
            <li>Provides pain relief</li>
          </ul>
        </div>

        {/* Cold Shower Benefits */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <div style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textAlign: 'left',
            }}>
          <h3>BENEFITS OF THE</h3>
            <h3>COLD SHOWER</h3>
          
          </div>
          <ul
            style={{
              listStyleType: 'none',
              padding: 0,
              margin: 0,
              lineHeight: '1.8',
              fontSize: '16px',
              textAlign: 'left', // Aligns text inside the list to the left
            }}
          >
            <li>Reduces inflammation</li>
            <li>Improves circulation</li>
            <li>Lowers stress levels</li>
            <li>Provides pain relief</li>
            <li>Eases sore muscles</li>
            <li>Eases fatigue</li>
            <li>Gives you glowing hair and skin</li>
          </ul>
        </div>
      </div>

      {/* Colored Section */}
      <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' ,
      flex: 1,
    }}>
      <img 
        Src="/image/spa31.jpg"
        alt="pic" 
        style={{ 
          width: '100%', 
          height: '100%', 
          borderRadius: '2px' 
        }} 
      />
    </div>
    </div>
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#f8f3e6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontSize: '36px',
          fontWeight: 'bold',
          margin: '0 0 1rem',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        Sauna Menu
      </h1>
      <hr
        style={{
          width: '80%',
          border: 'none',
          borderTop: '1px solid #000',
          marginBottom: '2rem',
        }}
      />
      {/* Subtitle */}
      <h2
        style={{
          fontSize: '20px',
          fontWeight: '500',
          margin: '0 0 2rem',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        Private Infrared Sauna Suite
      </h2>
      {/* Menu Options */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {/* Option 1 */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              margin: '0',
            }}
          >
            45 MINUTES <span style={{ color: '#c50' }}>$65</span>
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#555' }}>
            hot – cold – shower
          </p>
        </div>
        {/* Option 2 */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              margin: '0',
            }}
          >
            60 MINUTES <span style={{ color: '#c50' }}>$75</span>
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#555' }}>
            hot – cold – rest – shower
          </p>
        </div>
        {/* Option 3 */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              margin: '0',
            }}
          >
            90 MINUTES <span style={{ color: '#c50' }}>$110</span>
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#555' }}>
            hot – cold – rest – repeat – shower
          </p>
        </div>
        {/* Option 4 */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              margin: '0',
            }}
          >
            120 MINUTES <span style={{ color: '#c50' }}>$150</span>
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#555' }}>
            hot – cold – rest – repeat as desired – shower
          </p>
        </div>
      </div>
    </div>
    <LeftPicNoButton
            title="SAUNA DETAILS:"
            title2="WHAT’S INCLUDED"
            description="Our private infrared sauna suites are a great way to experience the time-tested ritual of hot + cold + rest + repeat with a range of health benefits. Each session includes a private suite with a shower, towels, and a robe. We recommend bringing a swimsuit to wear during your session.   "
            

            imgSrc="/image/spa32.jpg"
        />
        <Footers />
        </div>
    );
};

export default Sauna;