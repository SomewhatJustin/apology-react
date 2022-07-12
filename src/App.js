import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react'

import Form from './Form';
import Response from './Response';

function App() {

  const [myCrime, setMyCrime] = useState("")
  const [response, setResponse] = useState("")
  const [isResponseShown, setIsResponseShown] = useState(false)


  return (
    <main>
      {!isResponseShown && <h1>Oh no. What did you do this time?</h1>}
      {!isResponseShown && <Form myCrime={myCrime} setMyCrime={setMyCrime} response={response} setResponse={setResponse} setIsResponseShown={setIsResponseShown} />}
      <br />
      {isResponseShown && <Response response={response} />}
    </main>
  );
}

export default App;
