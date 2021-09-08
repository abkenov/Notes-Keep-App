import React, { useState } from 'react'
import classes from '../styles/PostItemDetail.module.css'

export default function PostItemDetail({ post, removePost, setIsDetailed }) {

  const [isCopied, setIsCopied] = useState(false)

  function copyToClipBoard(note) {
    setIsCopied(!isCopied)
    navigator.clipboard.writeText(note)
  }

  function handleDeleteFromDetailed(id) {
    setIsDetailed(false)
      removePost(id)
  }

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h2>{post.subject}</h2>
        <hr />
        <p className={classes.note}>{post.note}</p>
        <p className={classes.date}>{post.date}</p>
      </div>
      <button onClick={() => copyToClipBoard(post.note)}>
        {isCopied ? 'Successfuly copied to clipboard' : 'Copy to clipboard'}
      </button>
      <button onClick={() => handleDeleteFromDetailed(post.id)}>Delete</button>
      <button onClick={() => setIsDetailed(false)}>Exit from detailed view</button>
    </div>
  )
}
