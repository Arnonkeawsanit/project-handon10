import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import usePosts from '../hooks/usePosts'

const Content = () => {
    const { posts, setPosts, isLoading } = usePosts()
    const { isLoggedIn } = useAuth()
  
    console.log('from home:', isLoggedIn)
  
    if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="feed-container">
    {isLoggedIn && <Link to="./create">Create new content</Link>}
    {posts &&
      posts.map((post) => {
        return <Post key={post.id} post={post} />
      })}
  </div>
)
}

export default Content