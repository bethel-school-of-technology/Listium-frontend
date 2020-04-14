import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/theme.css';

 
const Login = () => {
    return (
       <div className="layout">
          <div className="authContainer">
            <h1>Login to your account</h1>
            <input placeholder="Email" type="email"/>
            <input placeholder="Password" type="password"/>
            <button>Login</button>
            <Link className="textButton" to='/signup'>Don't have an account?</Link>
          </div>
       </div>
    );
}
 
export default Login;