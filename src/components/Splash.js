import React from 'react';

const Splash = () => {
  
  return (
    <div>
      <h1>Let's vote!</h1>
      <h2>Arizona Election / Voting Resources </h2>
      <p>Election content curated by Gus Miranda</p>
      <a
        className="App-link"
        href="https://servicearizona.com/VoterRegistration/selectLanguage"
        target="_blank"
        rel="noopener noreferrer"
        >
        Register to vote
      </a>
      <p> 
        <a
          className="App-link"
          href="https://recorder.maricopa.gov/BeBallotReady/"
          target="_blank"
          rel="noopener noreferrer"
          >
          check/edit your voter registration status
        </a>
      </p>
    </div>
  );
}

export default Splash;