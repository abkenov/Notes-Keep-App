import React, { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyTextarea from './UI/input/MyTextarea'
import classes from '../styles/PostForm.module.css'

export default function PostForm({ createPost }) {

  const [post, setPost] = useState({subject: '', note: '', date: ''})

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  
  function handleSubmit(e) {
    e.preventDefault()
    const date = new Date()
    const newPost = { ...post, id: Date.now(), date: `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}` }
    createPost(newPost)
    setPost({ subject: '', note: '' })
  }

  return (
    <form className={classes.form}>
      <MyInput
        className={classes.subjectInput}
        type='text'
        placeholder='Subject'
        value={post.subject}
        onChange={e => setPost({...post, subject: e.target.value})}
      />
      <MyTextarea
        className={classes.noteInput}
        type='text'
        cols='60'
        rows='20'
        placeholder='Note'
        value={post.note}
        onChange={e => setPost({...post, note: e.target.value})}
      />
      <button className={classes.formButton} onClick={handleSubmit}>Post</button>
    </form>
  )
}
