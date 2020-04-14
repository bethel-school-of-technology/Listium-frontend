import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import '../styles/theme.css';

 
const Signup = () => {
    return (
       <div className="layout">
          <div className="authContainer">
            <h1>Create your Listium account!</h1>
            <input placeholder="First Name" type="text" />
            <input placeholder="Last Name" type="text" />
            <input placeholder="Email" type="email" />
            <input placeholder="Password" type="password" />
            <button>Create Your Account</button>
            <Link className="textButton" to='/login'>Already have an account?</Link>
          </div>
       </div>
    );
}
 
export default Signup;