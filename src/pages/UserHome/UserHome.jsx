import React from 'react'
import Bot from '../../assets/Bot.png'
import Connections from '../../assets/Connections.png'
import Feed from '../../assets/Feed.png'
import Commu from '../../assets/Comm.png'
import Event from '../../assets/Event.png'
import Profile from '../../assets/Profile.png'
import "./UserHome.css"
function UserHome() {
  return (
    <div className='userhome_main'>
        
        <div className='userhome_main_container'>
        
        <div className='cards Card1_main'>
             <div className='cardi Card1_main_icon'>
                 <img src={Bot} alt="icon" />
             </div>
            <div className='cardi Card1_main_text'>
                AI Legal Consultant
             </div>
         </div>
         <div className='cards Card2_main'>
             <div className='cardi Card2_main_icon'>
                 <img src={Connections} alt="icon" />
             </div>
            <div className='Card2_main_text'>
                Connections
             </div>
         </div>

         <div className='cards Card3_main'>
             <div className='cardi Card3_main_icon'>
                 <img src={Feed} alt="icon" />
             </div>
            <div className='Card3_main_text'>
                Feed
             </div>
         </div>

         <div className='cards Card4_main'>
             <div className='cardi Card4_main_icon'>
                 <img src={Commu} alt="icon" />
             </div>
            <div className='Card4_main_text'>
                Communities & organisations
             </div>
         </div>

         <div className='cards Card5_main'>
             <div className='cardi Card5_main_icon'>
                 <img src={Event} alt="icon" />
             </div>
            <div className='Card5_main_text'>
                Events
             </div>
         </div>
         </div>
    <div className='userhome_button'>
     Speak out?
    </div>
    </div>
  )
}

export default UserHome