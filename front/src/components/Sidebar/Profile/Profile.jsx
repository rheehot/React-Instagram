import React from 'react';
import './Profile.scss';

const Profile = () => {
  return (
    <div className="profile">
      <img className="profile__photo" src="https://react-instagram.s3.ap-northeast-2.amazonaws.com/profile.jpg" alt=""/>
      <div className="profile__intro">
        <h3>baeharam</h3>
        <p>Coding is my life</p>
      </div>
    </div>
  );
};

export default Profile;