import React from "react";
import { useEffect, useRef } from 'react'
import { getApology } from './utils'

export default function Form(props) {

  const inputEl = useRef(null)

  useEffect(() => {
    inputEl.current.focus()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getResponse()
    // console.log(event.target[0].value)
  }

  async function getResponse() {
    const response = await getApology(props.myCrime)
    props.setResponse(response)
    props.setIsResponseShown(true)
    return response
  }

  const handleChange = (event) => {
    props.setMyCrime(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="my-sin"></label>
      <input type="text" name="my-sin" onChange={handleChange} value={props.myCrime} ref={inputEl}></input>
      <input type="submit" value="Fess up, bud" />
    </form>
  )
}