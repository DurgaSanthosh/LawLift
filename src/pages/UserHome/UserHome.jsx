import React from 'react'
import Bot from '../../assets/Bot.png'
import Connections from '../../assets/Connections.png'
import Feed from '../../assets/Feed.png'
import Commu from '../../assets/Comm.png'
import Event from '../../assets/Event.png'
import Feed2 from '../Feed2/feed2'
import {useNavigate} from 'react-router-dom'
// import Profile from '../../assets/Profile.png'
import "./UserHome.css"
import { Link } from 'react-router-dom'
function UserHome() {
  return (
    <div className='userhome_main'>
        
        <div className='userhome_main_container'>
        
       <div className='cards Card1_main'>
             <Link to='/consult' className="my-link"> <div className='cardi Card1_main_icon'>
                 <img src={Bot} alt="icon" />
             </div>
            <div className='cardi Card1_main_text'>
                AI Legal Consultant
             </div></Link>
         </div>
         <div className='cards Card2_main'>
             <Link to='/connect' className="my-link"><div className='cardi Card2_main_icon'>
                 <img src={Connections} alt="icon" />
             </div>
            <div className='Card2_main_text'>
                Connections
             </div></Link>
         </div>

         <div className='cards Card3_main'>
             <Link to='/feed2' className="my-link"><div className='cardi Card3_main_icon'>
                 <img src={Feed} alt="icon" />
             </div>
            <div className='Card3_main_text'>
                Feed
             </div></Link>
         
            </div>
            
         <div className='cards Card4_main'>
             <div className='cardi Card4_main_icon'>
                 <img src={Commu} alt="icon" />
             </div>
            <div className='Card4_main_text'>
                Communities & organisations
             </div>
         </div>
         
         </div>
    <Link to='/feed'><div className='userhome_button'>
     Speak out?
    </div></Link>
    </div>
  )
}

export default UserHome