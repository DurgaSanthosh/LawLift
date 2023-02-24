import React from 'react';
import './Navbar.css';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
        <ul>
        <li></li>
        <li></li>
        <li></li>
        
        <Link to='/' ><li> Home</li></Link>
        <Link to='/about'><li> About Us</li></Link>
        <Link to='/contactus'><li> Contact Us</li> </Link>
    </ul>
   </div>
  );
}

export default Navbar;