import React from "react";
import { useEffect, useRef } from 'react'
import { getApology } from './utils'

export default function Form(props) {

  const inputEl = useRef(null)
  const errorEl = useRef(null)

  useEffect(() => {
    inputEl.current.focus()
  }, [])

  useEffect(() => {
    let currentLength = checkInputLength()

    if (currentLength < 70) {
      inputEl.current.className = ""
      console.log("is fine")
    } else if (currentLength >= 70 && currentLength < 100) {
      inputEl.current.className = "warning"
      console.log("is warning")
    } else if (currentLength >= 100) {
      inputEl.current.className = "error"
      console.log("is error")
    }
  }, [props.myCrime])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (checkInputLength() > 100) {
      errorEl.current.className = ""
    } else {
      props.setIsLoading(true)
      getResponse()
    }
  }

  async function getResponse() {
    const response = await getApology(props.myCrime)
    props.setResponse(response)
    props.setIsResponseShown(true)
    props.setIsLoading(false)
    return response
  }

  const handleChange = (event) => {
    props.setMyCrime(event.target.value)
  }

  const checkInputLength = () => {
    return props.myCrime.length
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="my-sin"></label>
      <input type="text" name="my-sin" onChange={handleChange} value={props.myCrime} ref={inputEl}></input>
      <input type="submit" value="Send in my confession" />
      <p ref={errorEl} className="hidden">Your confession must be less than 100 characters. You're at {checkInputLength()}</p>
    </form>
  )
}