import React from 'react'
import Chat from '../../components/Chat';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom'

function Consult() {
  return (
    <div className='consult'>
      <Link to='/userhome'><h1 className='consult_leftbtn'><FiArrowLeftCircle/> </h1> </Link>
        <Chat/>
    </div>
  );
};

export default Consult

