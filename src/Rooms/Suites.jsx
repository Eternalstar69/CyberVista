import React from 'react';
import HotelRooms from '../HotelRooms';


const Suites = () => {


    const rooms = [
        {
          image: '/image/xdd1.jpg', // URL รูปภาพห้อง
          title: 'XDD SUITE',
          details: 'Sleeps 2  /  587 sq ft',
          description:
            'Thoughtfully designed for relaxation and indulgence, the XDD Suite is perfect for unwinding after a day of exploration and discovery.',
          
          description2: '/XDDSUITES',
          onBookRoom: () => alert('Booking '),
        },
        {
          image: '/image/xbb1.jpg', // URL รูปภาพห้อง
          title: 'XBB SUITE',
          details: 'Sleeps 2  /  500 sq ft',
          description:
            'A perfect reflection of this charming and historic city, the warm XBB Suite',
          description2: '/XBB',
          onBookRoom: () => alert('Booking '),
        },
      ];
    return (
        <div>
        <HotelRooms
      title="Your Respite in the City"
      subtitle="SUITES"
      rooms={rooms}
    />
        
        </div>
    );
};

export default Suites;