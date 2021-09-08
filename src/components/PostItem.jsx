import React, { useState } from 'react'
import classes from '../styles/PostItem.module.css'

export default function PostItem({ post, removePost, setIsDetailed, setIdOfDetailed }) {

  const [isCopied, setIsCopied] = useState(false)

  function copyToClipBoard(note) {
    setIsCopied(!isCopied)
    navigator.clipboard.writeText(note)
  }

  function handleDetailedView() {
    setIsDetailed(true)
    setIdOfDetailed(post.id)
  }

  return (
    <div className={classes.container}>
      <div className={classes.text} onClick={() => handleDetailedView()}>
        <h2>{post.subject}</h2>
        <hr />
        <p className={classes.note}>{post.note}</p>
        <p className={classes.date}>{post.date}</p>
      </div>
      <button onClick={() => copyToClipBoard(post.note)}>
        {isCopied ? 'Copied to clipboard' : 'Copy to clipboard'}
      </button>
      <button onClick={() => removePost(post.id)}>Delete</button>
    </div>
  )
}
