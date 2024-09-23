import React, { useEffect, useState} from 'react'
import MyForm from './MyForm'
import Profile from './Profile'
import Login from './Login'

function App() {
  const[count , setCount] = useState(4)
  function decrementCount(){
    setCount(count-1)
  }
  function incrementCount(){
    setCount(count+1)
  }
  const [resourceType, setResourceType] = useState('posts')
  return (
    <>
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
    <Login/>
    <div>
      <button onClick={()=> setResourceType('posts')}>Posts</button>
      <button onClick={()=> setResourceType('users')}>Users</button>
      <button onClick={()=> setResourceType('comments')}>Comments</button>

    </div>
    <h1>{resourceType}</h1>
    <MyForm/>

    <Profile  
        name="Kebe"
        bio="I am a frontend web developer for the past 10 years"
        imgeUrl='../public/logo192.png'    />

    
    </>
  )
}

export default App
