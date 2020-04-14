import React from 'react';
import '../styles/theme.css';
 
const Profile = () => {
    return (
       <div className="layout">
          <div className="profileContainer">
            <h1>Welcome to your profile!</h1>
            <button>Log out</button>
          </div>
       </div>
    );
}
 
export default Profile;