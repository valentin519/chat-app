import React from 'react'
import './chatapp.css'
import './ContactList'

const Contact = (props) => (
    <div className="Contact">
       <img className = 'avatar' src = {props.image} alt =''/> 
      <div>
        <h4 className ='name'>{props.character}</h4>
        <small className = 'quote'> {props.quote} </small>
        <div className= 'status'>
          <div className={props.isStatus ? 'status-online' : 'status-offline' } />
          <p  style = {{color : props.isStatus ? '#aed581' : '#f4511e'}}> {props.isStatus ?  'Online'  : 'Offline'}</p> 
           
        </div>
      </div>

      
    </div>
  );

  export default Contact