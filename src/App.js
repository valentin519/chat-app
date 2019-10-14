import React from 'react';

import './components/chatapp.css'
import './components/ContactList'
import ContactList from './components/ContactList'

// const firstUser ={
//   avatar :'https://zupimages.net/up/19/41/x5hv.gif',
//   name : 'Homer',
//   isStatus: false,
// }
// const secondUser ={
//   avatar :'https://zupimages.net/up/19/41/i8wt.gif',
//   name : 'Ainsley',
//   isStatus: true,
// }
// const thirdUser ={
//   avatar :'https://zupimages.net/up/19/41/boj7.gif',
//   name : 'Nyan Cat',
//   isStatus: false,
// }



function App(props) {
  return (
    <div className="App">
      <ContactList />
    </div>
  );
}

export default App;
