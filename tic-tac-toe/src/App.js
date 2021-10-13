import './App.css';
import React from 'react';

const displayEmojiName = event => alert(event.target.id);
const emojisList=[
{
    emoji: '😀',
    name: "test grinning face"
  },
  {
    emoji: '🎉',
    name: "party popper"
  },
  {
    emoji: '💃',
    name: "woman dancing"
  }

]


function App() {
  const appDescription='emoji';
  return (
      <div className="container">
    <h1 id={appDescription}>Emoji Picker</h1>
  <p>I am writing my first JSX code</p>
  <ul>
{
          emojisList.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
</ul>
  </div>
  
  )
 
}

export default App;
