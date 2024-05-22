import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/Earn.css'; // Import CSS for styling

function Earn() {
    return (
      <div className="Earn">
        <h1>Welcome to Ignite Rewards ™</h1>
        <div className="actions">
          <Link to="/SignIn" className="button login">Log In</Link>
          <Link to="/SignUp" className="button signup">Sign Up</Link>
        </div>
      </div>
    );
  }

export default Earn;
