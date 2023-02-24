import React from "react";
import { useState } from "react";
import CreatePost from "../../components/CreatePost";
import { auth } from "../../firebase";

function Feed() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <div>
      <CreatePost isAuth={isAuth} />
    </div>
  );
}

export default Feed;
