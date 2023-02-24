import React from "react";
import { useState } from "react";
import CreatePost from "../../components/CreatePost";
import { auth } from "../../firebase";
import "./Feed.css";

function Feed() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <div className=".landing_container">
      <CreatePost isAuth={isAuth} />
    </div>
  );
}

export default Feed;
