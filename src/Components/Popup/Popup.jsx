import React from "react";
import './Popup.scss'
// import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

 
const Popup = props => {
 
  const handleClick= () =>{
    
    props.handleClose();
  }
  return (
    <div className="popup-box">

      <div  className="box">
      <Fade In  duration={1000}  >
        <span className="close-icon" onClick={handleClick}>x</span>
        {props.content}
      </Fade>
      </div>
    </div>
  );
};
 
export default Popup;