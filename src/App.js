import React from 'react';
import Contact from './components/Contact'
import './components/chatapp.css'


const firstUser ={
  avatar :'https://zupimages.net/up/19/41/x5hv.gif',
  name : 'Homer',
  isStatus: false,
}
const secondUser ={
  avatar :'https://zupimages.net/up/19/41/i8wt.gif',
  name : 'Ainsley',
  isStatus: true,
}
const thirdUser ={
  avatar :'https://zupimages.net/up/19/41/boj7.gif',
  name : 'Nyan Cat',
  isStatus: false,
}



function App(props) {
  return (
    <div className="App">
      <Contact {...firstUser} />
      <Contact {...secondUser} />
      <Contact {...thirdUser} />
    </div>
  );
}

export default App;
