import React from 'react';
import SlideMenu from '../Menu2';
import Footers from '../Footers';
import EachHotelRooms from '../EachHotelRooms';
import Slider from '../Slider';
const XDDSUITES = () => {
    const images = [
        'image/xdd1.jpg', // ใส่ path รูปภาพของคุณใน public directory
        'image/xdd2.jpg',
    ]
    return (
        <div style={{backgroundColor: '#f8f3e6'}}>
           <SlideMenu />
           <EachHotelRooms
      type="Suite"
      title="XDD Suite"
      details="Sleeps 2 / 587 sq ft"
      description="Thoughtfully designed for relaxation and indulgence, the XDD Suite is perfect for unwinding after a day of exploration and discovery."
      extendedDescription="The XDD Suite is a spacious, comfortable room with a king-sized bed, a sitting area, and a private bathroom with a shower. The room is located on the third floor of the hotel and offers a view of the surrounding area. The room is equipped with a flat-screen TV, a mini-fridge, a coffee maker, and a hairdryer. The room is perfect for couples or solo travelers who want to enjoy a relaxing stay in a beautiful setting. The room is pet-friendly and offers a comfortable and welcoming atmosphere."
      linkTo="/Booknow" // URL ของหน้าที่ต้องการนำทางไป
    />
    <Slider images={images} />
            <Footers />
        </div>
    );
};

export default XDDSUITES;