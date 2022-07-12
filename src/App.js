import './App.css';
import { useState, useRef } from 'react'

import Form from './Form';
import Response from './Response';
import Loading from './Loading';

function App() {

  const [myCrime, setMyCrime] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isResponseShown, setIsResponseShown] = useState(false)


  return (
    <main>
      {(!isResponseShown && !isLoading) && <h1>Oh no. What did you do this time?</h1>}
      {(!isResponseShown && !isLoading) &&
        <Form
          myCrime={myCrime}
          setMyCrime={setMyCrime}
          response={response}
          setResponse={setResponse}
          setIsResponseShown={setIsResponseShown}
          setIsLoading={setIsLoading}
        />}
      <br />
      {isResponseShown && <Response response={response} />}
      {isLoading && <Loading isLoading={isLoading} />}
    </main>
  );
}

export default App;
