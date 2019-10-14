import React from 'react'
import './chatapp.css'

const Contact = (props) => (
    <div className="Contact">
       <img className = 'avatar' src = {props.avatar} alt =''/> 
      <div>
        <h4 className ='name'>{props.name}</h4>
        <div className= 'status'>
          <div className={props.isStatus ? 'status-online' : 'status-offline' } />
          <p  style = {{color : props.isStatus ? '#aed581' : '#f4511e'}}> {props.isStatus ?  'Online'  : 'Offline'}</p>  
        </div>
      </div>

      
    </div>
  );

  export default Contact