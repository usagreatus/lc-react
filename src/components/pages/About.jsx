import React, { useState } from 'react';
import Reddit from '../Reddit';
import Joke from '../Joke';

export default function About() {
  const [redditVisible, setRedditVisible] = useState(false);
  const [jokeVisible, setJokeVisible] = useState(false);

  return (
    <div className="container">
      <h2>This Is About Page</h2>
      <div className="buttons">
        <button
          onClick={() => setRedditVisible(prevRedditVisible => !redditVisible)}
        >
          Toggle Reddit
        </button>
        <button
          onClick={() => setJokeVisible(prevJokeVisible => !jokeVisible)}
        >
          Toggle Joke
        </button>
      </div>
      {redditVisible && <Reddit />}
      {jokeVisible && <Joke />}
    </div>
  )
}
