import React from 'react';
import HotelRooms from '../HotelRooms';

const GRANDSTANDARDROOM = () => {
    const rooms = [
        {
          image: '/image/grandstandard1.jpg', // URL รูปภาพห้อง
          title: 'Grand Standard Room',
          details: 'Sleeps 2 / 587 sq ft',
          description:
            'Thoughtfully designed for relaxation and indulgence, the Grand Standard Room is perfect for unwinding after a day of exploration and discovery.',
            description2: '/GSR',
          onBookRoom: () => alert('Booking Grand Standard Room'),
        },
        {
          image: '/image/grandstandard+1.jpg', // URL รูปภาพห้อง
          title: 'Grand Standard Room +',
          details: 'Sleeps 2 / 500 sq ft',
          description:
            'A perfect reflection of this charming and historic city, the warm Grand Standard Room +',
            description2: '/GSRWB',
          onBookRoom: () => alert('Booking Grand Standard Room '),
        },
      ];
    return (
        <div>
        <HotelRooms
      title="Your Respite in the City"
      subtitle="Grand Standard Room"
      rooms={rooms}
    />
        
        </div>
    );
};

export default GRANDSTANDARDROOM;