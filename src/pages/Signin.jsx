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
      navigate('/userhome');
    }
  }, [user,navigate]);
  

   return (

    <div>
      <section id='home'>
      <div className='landing_container'>
            <div className='landing_title'>LawLift</div>
            <div className='landing_tagline'>Speak Free!</div>
            <div>
              <button onClick={handleGoogleSignIn} className='landing_loginbtn' >Get Started</button>
            </div>
            
      </div>
      </section>
      <section id='about'>

      </section>

    </div>



  );
   };
//   return (
    
//     <div>
//       <h1 className='landing_container'>LawLift</h1>
//       <div className='landing_loginbtn'>
//         <GoogleButton onClick={handleGoogleSignIn} />
//       </div>
//     </div>
//   );
// };

export default Signin;