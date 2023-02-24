import React, { useState } from "react";
import "./ContactUs.css";
import { Link } from 'react-router-dom';

function Contactus() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="contact">
      <div>
        <h1>Contact Us</h1>
      </div>
      <div className="contact-us">
        <div className="contact-inputs">
          <label>
            Your Name
            <input type="text" />
          </label>
          <label>
            Mobile Number
            <input type="text" />
          </label>
          <label>
            Your Email
            <input type="text" />
          </label>
          <label>
            Your Message
            <input type="text" className="message" />
          </label>
          <center>
            <Link to='/'>
            <button
              className="send-button"
              onClick={handleClick}
              style={{
                backgroundColor: active
                  ? "rgb(22, 158, 54)"
                  : "rgb(18, 60, 158)",
              }}
            >
              Send
            </button>
            </Link>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Contactus;