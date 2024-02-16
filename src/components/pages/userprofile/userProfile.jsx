import React, { useState } from 'react';
import "./userProfile.css";

const UserProfile = () => {
  // State variables for user data
  const [fullName, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [designation, setDesignation] = useState('Software Engineer');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [photo, setPhoto] = useState(null);
  const [photoName, setPhotoName] = useState('user-icon.jpg');
  const [accessLevel, setAccessLevel] = useState('User');

  // Function to handle profile update
  const handleUpdateProfile = () => {
    // Perform update logic here (e.g., send data to server)
    console.log('Profile updated successfully!');
  };

  // Function to handle photo upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPhotoName(file.name);
    }
  };

  return (
    <div className="container">
    <form className="form-container">
      <h1 className="heading-profile">User Profile</h1>
    <div className="profile-image-container">
        <img
        src={photo ? URL.createObjectURL(photo) : 'https://via.placeholder.com/150'}
        alt="User Photo"
        className="profile-image"
        style={{ width: '150px', height: '150px' }}
    />
    </div>
        <div>Current Photo: {photoName}</div>
        <input type="file" accept="image/*" onChange={handlePhotoChange} />
        <input
          type="text"
          className="input-field"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          className="input-field"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input-field"
          placeholder="Change Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="input-field"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
         <div>
            <label>Access Level:</label>
            <input
                type="text"
                value={accessLevel}
                onChange={(e) => setAccessLevel(e.target.value)}
                readOnly // Adding the readOnly attribute
        />
        </div>
        <button className="update-button" onClick={handleUpdateProfile}>Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;