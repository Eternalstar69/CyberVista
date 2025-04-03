# Hotel Reservation Web Application

## Description
Designed and developed a hotel reservation web application as part of a collaborative group project using **React** (frontend), **Node.js** (backend), **MySQL** (database), and **XAMPP server** for local deployment.

### Key Features:
- **Hotel Booking System**: Users can search and book hotels with a user-friendly interface and real-time availability.
- **Advanced Search Filters**: Enables users to filter hotel listings by price, amenities, and ratings.
- **Email Confirmation System**: Automatically sends booking confirmation emails to users upon successful reservation.

### Technologies Used:
- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, MySQL
- **Database**: MySQL
- **Deployment**: XAMPP server for local deployment

## Installation

### Prerequisites:
- **Node.js** (latest stable version)
- **MySQL** database (set up locally or use a cloud service)
- **XAMPP** server (for local deployment of MySQL)

### Steps to Install Locally:

1. **Clone the repository**:
   git clone https://github.com/your-username/your-repository.git
2. **Install Dependencies**:
   - Navigate to the project folder:
     cd your-repository
   - Install the necessary dependencies (for both frontend and backend):
     npm install

3. **Set Up MySQL Database**:
   - Make sure MySQL is running using **XAMPP** or your preferred MySQL server.
   - Import the database schema from the project folder (usually located in a folder like `backend/database`).
   - Configure the database connection settings in the backend (e.g., `database.js` or similar file).

4. **Start the Backend (Node.js + MySQL)**:
   - Start the backend server:
     node server.js
5. **Start the Frontend (React)**:
   - In a new terminal, run the frontend React app:
     npm run client

### Notes:
- The backend will run on its default port (usually **http://localhost:5000**).
- If you encounter CORS issues, ensure that **CORS middleware** is configured in the backend, or set up the `proxy` in your React `package.json` file to forward API requests to the backend.

## Usage
- Visit **http://localhost:3000** to interact with the web application.
- Users can search, book hotels, and receive confirmation emails.
