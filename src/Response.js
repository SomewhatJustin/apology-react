import React from "react";

export default function Response(props) {
  return (
    <div className='response-container'>
      {<h1>I'm so sorry</h1>}
      {<p>{props.response}</p>}
    </div>
  )
}