import React from 'react';
import skills from "../JSON/skills.json";

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        {/* <button className='close-btn'>
          X
        </button> */}
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Popup