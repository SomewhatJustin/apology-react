import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react'

import Form from './Form';

function App() {

  const [myCrime, setMyCrime] = useState("")
  const [response, setResponse] = useState("")


  return (
    <main>
      <h1>Oh no. What did you do this time?</h1>
      <br />
      <Form myCrime={myCrime} setMyCrime={setMyCrime} response={response} setResponse={setResponse} />
      <br />
      <div className='response-container'>
        {response !== "" && <h1>I'm so sorry</h1>}
        {response !== "" && <p>{response}</p>}
      </div>
    </main>
  );
}

export default App;
