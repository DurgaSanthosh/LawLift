import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import {  useAuth } from '../context/AuthContext';
import {  useNavigate } from 'react-router-dom';
import "./Signin.css";

const Signin = () => {
  const { googleSignIn, user } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      console.log(user)
      navigate('/signout');
    }
  }, [user,navigate]);

  return (
    <div>
      <h1 className='landing_container'>LawLift</h1>
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default Signin;