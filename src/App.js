import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Header from "./components/UI/header/Header";
import PostItemDetail from "./components/PostItemDetail";
import "./App.css"

function App() {

  const [posts, setPosts] = useState([])
  const [isDetailed, setIsDetailed] = useState(false)
  const [idOfDetailed, setIdOfDetailed] = useState('')

  function handleCreatePost(post) {
    if(post.subject.length && post.note.length) {
      setPosts([...posts, post])
    }
  }

  function handleRemovePost(id) {
    setPosts(posts.filter(post => post.id !== id))
  }

  function currentPost(id) {
    const post = posts.filter(post => post.id === id)
    return post[0]
  }


  const Posts = () => (
    <div className='container'>
      <PostForm createPost={handleCreatePost} />
      <div className='postsList'>
        <PostList
          posts={posts}
          removePost={handleRemovePost}
          setIsDetailed={setIsDetailed}
          setIdOfDetailed={setIdOfDetailed}
        />
      </div>
    </div>
  )

  return (
    <div className="App">
      <Header />
      {
        isDetailed
        ?
        <PostItemDetail post={currentPost(idOfDetailed)} setIsDetailed={setIsDetailed} removePost={handleRemovePost} />
        :
        <Posts />
      }
    </div>
  );
}


export default App;
