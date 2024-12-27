import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Booknow.css';
import Menu from '../Menu';

const Booknow = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [roomType, setRoomType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvailableRooms = async () => {
      try {
        const response = await fetch('http://localhost:3000/available-rooms');
        const data = await response.json();
        setRooms(data);
        setFilteredRooms(data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchAvailableRooms();
  }, []);

  const handleViewAvailability = (e) => {
    e.preventDefault();
    const filtered = roomType
      ? rooms.filter((room) => room.type.toLowerCase() === roomType.toLowerCase())
      : rooms;
    setFilteredRooms(filtered);
  };

  const handleBookRoom = (room) => {
    navigate('/reservation', {
      state: {
        room: {
          id: room.id,
          room_number: room.room_number,
          type: room.type,
          price_per_night: room.price_per_night,
        },
      },
    });
  };

  // ฟังก์ชันสำหรับเลือกภาพห้อง
  const getRoomImage = (type) => {
    const imageMap = {
      'Standard Room': '/image/standard1.jpg',
      'STANDARD ROOM +': '/image/standard+1.jpg',
      'Grand Standard Room': '/image/grandstandrad1.jpg',
      'Grand Standard Room +': '/image/grandstandard+1.jpg',
      'XDD SUITE': '/image/xdd1.jpg',
      'XBB SUITE': '/image/xbb1.jpg',

    };
    return imageMap[type] || '/image/standard1.jpg'; // ใช้ default image ถ้าไม่พบประเภท
  };

  return (
    <div className="booking-container" style={{ display: 'flex', flexDirection: 'column' }}>
      <Menu />
      <div>
        <h2 className="booking-header">Book a Room</h2>
        <form onSubmit={handleViewAvailability} className="booking-form">
          <select
            id="roomType"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required
          >
            <option value="">Select Room Type</option>
            <option value="Standard Room">Standard Room</option>
            <option value="STANDARD ROOM +">Standard Room +</option>
            <option value="Grand Standard Room +">Grand Standard Room +</option>
            <option value="Standard Room">Standard Room</option>
            <option value="XDD SUITE">Xdd Suite</option>
            <option value="XBB">Xbb Suite</option>
          </select>
          <button type="submit" className="booking-button">
            View Availability
          </button>
        </form>
      </div>
      <div className="form-group">
        <div className="room-grid">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <div key={room.room_number} className="room-block">
                <img
                  src={getRoomImage(room.type)}
                  alt={room.type}
                  className="room-image"
                />
                <div className="room-details">
                  <h3 className="room-title">{room.type}</h3>
                  <p className="room-capacity">
                    <span>👤 {room.capacity || '2 People'}</span> • <span>📏 {room.size || '30 m²'}</span>
                  </p>
                  <p className="room-description">
                    {room.description || 'A beautifully designed room with all modern amenities.'}
                  </p>
                  <div className="room-price">
                    <span>{room.price_per_night} bath</span>
                    <button
                      className="book-button"
                      onClick={() => handleBookRoom(room)}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No rooms available for the selected type.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booknow;
