import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Overview.css';
import Menu from '../Menu';
import Footers from '../Footers';

function Overview() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ตรวจสอบ JWT Token
  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    checkToken();

    // ตรวจสอบการเปลี่ยนแปลงของ localStorage
    window.addEventListener('storage', checkToken);

    return () => {
      window.removeEventListener('storage', checkToken);
    };
  }, []);

  // ฟังก์ชัน Logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // ลบ Token
    setIsLoggedIn(false); // เปลี่ยนสถานะ
    window.location.reload(); // รีเฟรชหน้า
  };

  return (
    <div>
      <div className='bgoverview'>
        {!isLoggedIn ? (
          <>
          
            <Link to="/Register">
              <button className='register-buttonnn'>Register</button>
            </Link>
            <Link to="/Login">
              <button className='logins-button'>Login</button>
            </Link>
            
          </>
        ) : (
          <>
          <button className='logins-button' onClick={handleLogout}>
            Logout
          </button>
          <Link to="/profile">
          <button className='register-buttonnn'>Profile</button>
          </Link>
          </>
        )}
      <Menu />

        <div className='logohotel'>

            <img className='logo' src={`${process.env.PUBLIC_URL}/image/logoo.png`} alt="logo" />

            <h1>CyberVista</h1>
            <h1>Hotel</h1>
            <p>Thailand</p>
        </div>

        <div className='midlogo'>
            <img className='logo' src={`${process.env.PUBLIC_URL}/image/logoo.png`} alt="logo" />
            <p>Let her go to the mountain,</p>
            <p>then we’ll escape to the sound of the waves at the sea.</p>
        </div>
    </div>

    <div className='text-inpired'>
        <div className='text-inpired-1'>
          <p>Inspired by the vibrant energy of Thailand and its breathtaking </p>
          <p>landscapes, CyberVista Hotel is </p>
          <p>thoughtfully designed to enhance wellness and inspire joy.</p>
        </div>

        <div className='text-inpired-2'>
          <h1>“OFTEN I THINK OF </h1>
          <h1>THE THRIVING CITY ... </h1>
          <h1>EMBRACED BY CULTURE AND NATURE”</h1>
        </div>

        <div className='text-inpired-3'>
          <h2>— Inspired by the spirit of</h2>
          <h2> exploration and creativity.</h2>
        </div>
    </div>

    <div className='ViewAuailavility'>

    </div>

    <div className='defined'>

    <div className='left-defined'>
        <img className='logo' src={`${process.env.PUBLIC_URL}/image/hotelroom.jpg`} alt="img" />
    </div>

    <div className='right-defined'>
      <div>
        <div className='right-definedpp'>
          <p>DEFINED</p>
          <p>BY YOUR</p>
          <p>DESIRES</p>
        </div>
        

        <div className='right-definedp'>
          <p>
            At CyberVista Hotel, we believe that every guest is unique, and we strive to create a personalized experience that caters to your individual needs and desires. From the moment you arrive, our dedicated team is committed to ensuring that your stay is nothing short of exceptional, with warm hospitality and intuitive service that anticipates your every need.
          </p>
          <p>
            Our thoughtfully designed guestrooms and suites offer a peaceful retreat from the hustle and bustle of daily life, with modern amenities and elegant furnishings to ensure a restful night’s sleep. Whether you’re traveling for business or pleasure, our hotel provides the perfect setting for relaxation and rejuvenation.
          </p>
          
        </div>
       



      <Link to="/Booknow"><button className='button-Booknow'>Book Now</button></Link>   

      </div>

      </div>  
    </div>

    <div className='hotelCyberVista'>
        <div className='left-hotelCyberVista'>
          <div>
            <h2>HOTEL</h2>
            <h1>CYBERVISTA</h1>
          </div>
          <div style={{width:'80%'}}>
            <p >CyberVista Hotel feels both elevated and familiar, with refined guestrooms
            and suites, a wealth of thoughtful amenities, and enhancements crafted to
            make your experience unforgettable. </p>
          </div>

          <div >
            <Link to="/Hotel"><button className='multi-border-button' >SUITES</button></Link>   
            <Link to="/Hotel"><button className='multi-border-button'>STANDARD ROOM</button></Link>   
            <Link to="/Hotel"><button className='multi-border-button'>GRAND STANDARD ROOM</button></Link>   
          </div>
          
          
        </div>
        
        <div className='right-hotelCyberVista'>
          <img className='logo' src={`${process.env.PUBLIC_URL}/image/hotelroom1.jpeg`} alt="imghotelroom1" />
        </div>
        
    </div>

    {/* <div className='bang'></div> */}

    <div className='CafeandClubs'>

      <div className='left-CafeandClubs'>

        <div>
          <img className='logo' src={`${process.env.PUBLIC_URL}/image/logoo.png`} alt="logo" />
          <h1>XDD</h1>
          <h1>Café</h1>
          <h6>at CyberVista Hotel</h6> 
        </div>

        <p>Indulge in a culinary journey at XDD Café, where the vibrant flavors of Thailand come to life. Our menu features a variety of local and international dishes.
        </p>

        <Link to="/cafe"><button className='multi-border-button' style={{height: '50%'}}>EXPLORE XDD CAFÉ</button></Link>   

        
      </div>

      <div className='right-CafeandClubs'>

        <div>
          <img className='logo' src={`${process.env.PUBLIC_URL}/image/logoo.png`} alt="logo" />
          <h1 style={{marginBottom:'88px'}}>Fight of Clubs</h1>
          <h6 style={{fontSize:'16px'}}>at CyberVista Hotel </h6>
        </div>

        <p>Our Fight of Clubs is a unique fitness experience that combines high-intensity interval training with the energy of a nightclub. Join us for a heart-pumping workout set to the beat.
        </p>

        <Link to="/Club"><button className='multi-border-button' style={{height: '50%'}}>DISCOVER FIGHT OF CLUBS</button></Link>   

        
      </div>
    </div>

    <div className='bang'></div>

    <div className='xdd'>
    <div className='left-xdd'>
      <div>
        <h1>XDD</h1>
        <h6>A RAT SPA</h6>
      <div style={{width: '80%',margin:'30px'}}>
      <p>
        A FOCUS ON MINDFULNESS AND WELLNESS  
      </p>
      <p>
        Our meditation room features one of our favorite offerings in the spa, our Meditation Loungers. This technology has been used to treat PTSD and addiction and has recently been making its way into the spa world. The loungers remove distractions and allow you to melt into a meditation practice quickly and easily, leading to unprecedented levels of relaxation. When you're short on time but in need of a reset, a 20-minute session in the meditation room is the perfect solution.
      </p>
      </div>
      <Link to="/spa"><button className='xdd-border-button'>BEGIN YOUR JOURNEY</button></Link>   
      <Link to="/Booknow"><button className='xdd-border-button'>BOOK NOW</button></Link>   
      <Link to="/contact-us"><button className='xdd-border-button'>COUTACT US</button></Link>   
      
      </div>

      </div>  

      <div className='right-xdd'>
        <img className='logo' src={`${process.env.PUBLIC_URL}/image/sparoom.jpeg`} alt="img" />
    </div>

    </div>

    <div className='swimmingpool'>

    <div className='left-swimmingpool'>
        <img className='logo' src={`${process.env.PUBLIC_URL}/image/hotelpool.jpg`} alt="img" />
    </div>

    <div className='right-swimmingpool'>
      <div>
        <h1>Swimming Pool </h1>
        <h6>at The CyberVista Hotel</h6>
      <div style={{marginTop:'20px'}}>
      <p>Dive into relaxation at our stunning outdoor swimming pool, where tranquility meets luxury. Surrounded by lush landscaping, our pool area offers a serene escape from the hustle and bustle of daily life. Whether you want to take a refreshing dip, soak up the sun on our comfortable loungers, or enjoy a leisurely swim, our pool caters to your every need.</p>
      <p>For those seeking a more invigorating experience, join our water aerobics classes or simply unwind with a good book by the water's edge. As evening falls, the pool transforms into a beautiful ambiance with softly lit surroundings, making it the perfect spot for a nightcap or an intimate gathering.</p>
      <p>For those seeking a more invigorating experience, join our water aerobics classes or simply unwind with a good book by the water's edge. As evening falls, the pool transforms into a beautiful ambiance with softly lit surroundings, making it the perfect spot for a nightcap or an intimate gathering.</p>
      </div>
      </div>

      </div>  

    </div>

<div className='fitness'>

  <div className='left-fitness'>
      <img className='logo' src={`${process.env.PUBLIC_URL}/image/hotelgym.jpg`} alt="img" />
  </div>

  <div className='right-fitness'>
      <div>
        <p>Fitness Center </p>
        <h6>at The CyberVista Hotel</h6>
      </div>   

      <div className='right-fitnesss'>
        <p>
          Elevate your wellness journey at our state-of-the-art fitness center, designed to cater to all your fitness needs. Whether you're a seasoned athlete or just starting out, our facility offers a range of equipment to help you stay active and energized during your stay.     
        </p>
        <p>
          Work out on our advanced cardio machines, including treadmills, elliptical trainers, and stationary bikes, all equipped with personal screens for your entertainment. For strength training enthusiasts, we provide a variety of free weights, resistance machines, and functional training areas to ensure a well-rounded workout.
        </p>
        <p>
          Our fitness center is open 24/7, allowing you to exercise at your convenience, whether you prefer an early morning workout or a late-night sweat session. Additionally, we offer guided fitness classes and personal training sessions to help you reach your goals.
        </p>
        
      </div>
    </div>  
</div>

    <div className='bang'></div>

    <Footers/>

    </div>

  )
}

export default Overview
