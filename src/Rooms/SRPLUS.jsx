import React from 'react';
import SlideMenu from '../Menu2';
import Footers from '../Footers';
import EachHotelRooms from '../EachHotelRooms';
import Slider from '../Slider';
const SRPLUS = () => {
    const images = [
        '/image/standard+1.jpg', // ใส่ path รูปภาพของคุณใน public directory
        '/image/standard+2.jpg',
        
      ];
    return (
        <div style={{backgroundColor: '#f8f3e6'}}>
           <SlideMenu />
           <EachHotelRooms
      type="STANDARD ROOM"
      title="Standard Room +"
      details="Sleeps 2  /  587 sq ft"
      description="A perfect reflection of this charming and historic city, the warm  Standard Room + is a spacious, comfortable room with a king-sized bed, a sitting area, and a private bathroom with a shower. The room is located on the third floor of the hotel and offers a view of the surrounding area.

"
      
linkTo="/Booknow" // URL ของหน้าที่ต้องการนำทางไป
    />
    <Slider images={images} />
            <Footers />
        </div>
    );
};

export default SRPLUS;