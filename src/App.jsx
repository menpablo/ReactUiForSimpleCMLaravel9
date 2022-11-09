import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PostsList from './components/posts/PostsList'
import AddPost from './components/posts/AddPost'
import Posts from './scenes/Posts'

function App() {
  const [count, setCount] = useState(0)
  const [post, setPost] = useState({})
  const [showNewPost, setShowNewPost] = useState({})


  return (
    <div>
      <Posts />
    </div>
  
  )

}

export default App
