import React from "react";
import { useState } from "react";
import CreatePost from "../../components/CreatePost";
import "./Feed.css";
import { FiArrowLeftCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom'

function Feed() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <div className=".feed_container">
      <Link to='/userhome'><h1 className='feed_leftbtn'><FiArrowLeftCircle/> </h1> </Link>
      <CreatePost isAuth={isAuth} />
    </div>
  );
}

export default Feed;
