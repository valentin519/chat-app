import React from 'react'
import Contact from './Contact'
import './chatapp.css'
const quotes = [
    {
      quote:
        "Hehe I'm the red, the boss ranger",
      character: "Red Ranger",
      image:
        "https://media.giphy.com/media/SKqyoM5mvEZAA/giphy.gif",
      
    },
    {
      quote: "I'm a roxxor nerd",
      character: "Blue Ranger",
      image:
        "https://media.giphy.com/media/5yjYSCkSpLU3e/giphy.gif",
        isStatus: true,
    },
    {
      quote: "The prod don't respect me",
      character: "Black Ranger",
      image:
        "https://media.giphy.com/media/1M2SPVruuneFO/giphy.gif",
        isStatus: false,
    },
    {
      quote:
        "Bruuuh i'm a bad man with a flute",
      character: "Green Ranger",
      image:
        "https://media.giphy.com/media/GKuexTKWpLoQM/giphy.gif",
        isStatus: true,
    },
    {
        quote:
          "Hello guy i'm just a recycled product",
        character: "White Ranger",
        image:
          "https://media.giphy.com/media/fYQSlnqGuyg92/giphy.gif",
          isStatus: false,
      }
  ];

  const ContactList = () => (
    <div>
      {quotes.map(item => (
        <Contact key={item.character} quote={item.quote} image={item.image} character={item.character} /> 
      ))}
    </div>
  );
  
  export default ContactList;
  