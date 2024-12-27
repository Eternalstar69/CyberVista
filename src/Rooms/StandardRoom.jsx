import React from 'react';
import HotelRooms from '../HotelRooms';

const StandardRoom = () => {
    const rooms = [
        {
          image: '/image/standard1.jpg', // URL รูปภาพห้อง
          title: 'STANDARD ROOM',
          details: 'Sleeps 2  /  587 sq ft',
          description:
            'Thoughtfully designed for relaxation and indulgence, the Grand Standard Room is perfect for unwinding after a day of exploration and discovery.',
            description2: '/SR',
          onBookRoom: () => alert('Booking  Standard Room'),
        },
        {
          image: '/image/standard+1.jpg', // URL รูปภาพห้อง
          title: 'STANDARD ROOM +',
          details: 'Sleeps 2  /  500 sq ft',
          description:
            'A perfect reflection of this charming and historic city, the warm  Standard Room +',
            description2: '/SRWD',
            onBookRoom: () => alert('Booking'),
        },
      ];
    return (
        <div>
        <HotelRooms
      title="Your Respite in the City"
      subtitle="standard room"
      rooms={rooms}
    />
        
        </div>
    );
};

export default StandardRoom;