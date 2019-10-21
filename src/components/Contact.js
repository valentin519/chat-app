import React from 'react'
import './chatapp.css'
import './ContactList'


class Contact extends React.Component{
  constructor(props){
      super(props);
      this.state={
          isStatus : false
      };
  }

render (){
  return(
    <div className="Contact">
       <img className = 'avatar' src = {this.props.image} alt =''/> 
      <div>
        <h4 className ='name'>{this.props.character}</h4>
        <small className = 'quote'> {this.props.quote} </small>
        <div className= 'status'>
          <div className={this.state.isStatus ? 'status-online' : 'status-offline' }
          onClick = {event =>{
            const online= !this.state.isStatus;
            this.setState({isStatus : online});
          }} />
          <p  style = {{color :this.state.isStatus ? '#aed581' : '#f4511e'}}> {this.state.isStatus ?  'Online'  : 'Offline'}</p> 
           
        </div>
      </div>

      
    </div>
  );
}
}
  export default Contact