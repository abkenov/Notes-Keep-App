import React from 'react'
import PostItem from './PostItem'

export default function PostList({ posts, removePost, setIsDetailed, setIdOfDetailed }) {
  return (
    posts.map(post => (
      <PostItem 
        removePost={removePost}
        post={post}
        key={post.id}
        setIsDetailed={setIsDetailed}
        setIdOfDetailed={setIdOfDetailed}
      />
    ))
  )
}
