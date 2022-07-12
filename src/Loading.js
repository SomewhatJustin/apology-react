import React, { useState, useEffect } from "react";
import { SpinnerCircularFixed } from 'spinners-react';

export default function Loading(props) {

  const [comment, setComment] = useState("")

  useEffect(() => {
    const changeComment = () => {
      const randomNum = Math.floor(Math.random() * commentArr.length)
      const newComment = commentArr[randomNum]
      console.log("running")
      setComment(newComment)
    }

    changeComment()

    const intervalID = setInterval(() => {
      changeComment()
    }, 3000)

    return () => clearInterval(intervalID)
  }, [comment])

  const commentArr = ["Wow this is pretty bad",
    "I can't believe you've done this",
    "This is a very hard apology to write, I hope you know that",
    "There's no coming back from that"]


  return (
    <div className='loading-container' >
      <SpinnerCircularFixed size={50} thickness={139} speed={133} color="rgba(82, 57, 172, 1)" secondaryColor="rgba(0, 0, 0, 0)" />
      <h2>{comment}</h2>
    </div >
  )
}