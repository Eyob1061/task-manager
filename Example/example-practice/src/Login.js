import React from 'react'
import { useState } from 'react'

function Login() {
    const [username, setUserName]=useState("");
    const [password, setPassword]=useState("");
  return (
    <div>
      <input type="text" placeholder='Username' value={username}
         onChange={(e)=> setUserName(e.target.value)} />
      <input type="text" placeholder="password" value={password} 
       onChange={ (e)=> setPassword(e.target.value)} />
       <button onClick={()=>alert("Welcome"+ username)}>Login</button>
    </div>
  )
}

export default Login
