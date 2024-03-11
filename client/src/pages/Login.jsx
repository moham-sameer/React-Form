import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const history = useNavigate()
  const [userType,setUserType] = useState('')
 const SubmitHandler = (e)=>{
  e.preventDefault()
  if(userType === 'doctor'){
      history('/doctors')
  } else if(userType === 'patient'){
    history('/patients')
  }
 }
  return (
    <div className='flex items-center justify-center h-screen'>
    <form onSubmit={SubmitHandler} className='flex flex-col space-y-3'>
     <input type='text' placeholder='Enter your username...' required/>
     <input type='password' placeholder='Enter your password...' required/>
      <label >Role:</label>
      <select id='role' onChange={(e)=>setUserType(e.target.value)}>
        <option value="selects">Select...</option>
        <option value="doctor">Doctor</option>
        <option value="patient">Patient</option>
      </select>
      <button className='bg-gray-500 text-white font-serif'>Submit</button>
    </form>
    </div>
  )
}

export default Login
