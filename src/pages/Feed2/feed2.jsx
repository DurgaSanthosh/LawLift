import React from 'react'
import "./feed2.css"
import { FiArrowLeftCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom'

function Connect() {
  return (
    <div className='feed2_bg'>
             <Link to='/userhome'><h1 className='feed2_leftbtn'><FiArrowLeftCircle/> </h1> </Link>
    </div>
  )
}

export default Connect