import React, { Component } from 'react'
import { FiArrowLeftCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import './Chat.css'

export class Chat extends Component {
    componentDidMount() {   
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"2de7fddb4e212142a4c2ad5c5803a6e3b","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
    
        }
  render() {
    
    return (
      <div className='consult' ><Link to='/userhome'><h1 className='consult_leftbtn'><FiArrowLeftCircle/> </h1> </Link></div>
    )
  }
}

export default Chat