import React, { useState } from 'react';
import './App.css';

function App() {
  const quotes = [
    { text: "Everything has beauty, but not everyone can see.", author: "Confucius" },
    { text: "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.", author: "Erma Bombeck" },
    { text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" },
    { text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.", author: "Joshua J. Marine" },
    { text: "Life shrinks or expands in proportion to one’s courage.", author: " Anais Nin" }
  ];

  const colors = [
    '#FFDDC1', '#FFABAB', '#FFC3A0', '#FF677D', '#D4A5A5', '#392F5A'
  ];

  const [quote, setQuote] = useState(getRandomQuote);
  const [bgColor, setBgColor] = useState(getRandomColor);

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  const handleNewQuote = () => {
    setQuote(getRandomQuote());
    setBgColor(getRandomColor());
  };

  document.body.style.backgroundColor = bgColor;

  return(
    <div className="quote-box" id="quote-box">

      <div id="text">"{quote.text}"</div>
      
      <div id="author">- {quote.author}</div>
      
      <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
      
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`} 
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet
      </a>
    </div>
  );
}

export default App;
