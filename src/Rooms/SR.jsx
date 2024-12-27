import React from 'react';
import SlideMenu from '../Menu2';
import Footers from '../Footers';
import EachHotelRooms from '../EachHotelRooms';
import Slider from '../Slider';
const SR = () => {
    const images = [
        '/image/standard1.jpg', // ใส่ path รูปภาพของคุณใน public directory
        '/image/standard2.jpg',
        
      ];
    return (
        <div style={{backgroundColor: '#f8f3e6'}}>
           <SlideMenu />
           <EachHotelRooms
      type="STANDARD ROOM"
      title="Standard Room"
      details="Sleeps 2  /  587 sq ft"
    
    description="Thoughtfully designed for relaxation and indulgence, the Grand Standard Room is perfect for unwinding after a day of exploration and discovery. Featuring modern amenities and elegant decor, this room offers a serene escape from the hustle and bustle. Enjoy a restful night's sleep on a plush bed, and take advantage of the spacious bathroom with luxurious toiletries. Whether you're here for business or leisure, the Grand Standard Room provides a comfortable and stylish retreat."


      
linkTo="/Booknow" // URL ของหน้าที่ต้องการนำทางไป
    />
    <Slider images={images} />
            <Footers />
        </div>
    );
};

export default SR;