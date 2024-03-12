import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { signInFailure, signInStart, signInSuccess } from '../../redux/userSlice'
const Login = () => {
  const history = useNavigate()
  const dispatch = useDispatch()
  const {currentUser,loading,error} = useSelector((state)=>state.user)
  const [userType,setUserType] = useState('')
  const [authData,setAuthData] = useState()
  const changeHandler = (e)=>{
       setAuthData({...authData,
      [e.target.id]:e.target.value
      })
  }
 const SubmitHandler = async(e)=>{
 try {
  e.preventDefault()
  dispatch(signInStart())
  const data = await axios.post("http://localhost:3000/auth/login",authData)
  if(data.success === false){
   dispatch(signInFailure(data.message))
   return;
  }   
  dispatch(signInSuccess(data))
     if(userType === 'doctor'){
    
       history('/doctors')
     }
  else if(userType === 'patient'){
     history('/patients')
  }
  
 } catch (error) {
   dispatch(signInFailure(error.message))
 }
 }
  return (
    <div className='  flex flex-col items-center justify-center h-screen'>
    <Link to='/create'>
     <div className='fixed text-white p-2 uppercase border-2 bg-black border-gray-500 font-bold top-2 right-3'>Create Data</div>
    </Link>
    <form  onSubmit={SubmitHandler} className='flex flex-col space-y-8 w-[19rem] border border-slate-300 p-9 shadow-md'>
     <input onChange={changeHandler} id='username' type='username' placeholder='Enter your username...' required/>
     <input onChange={changeHandler} id='password' type='password' placeholder='Enter your password...' required/>
      <label >Role:</label>
      <select id='role' onChange={(e)=>setUserType(e.target.value)}>
        <option value="selects">Select...</option>
        <option value="doctor">Doctor</option>
        <option value="patient">Patient</option>
      </select>
      <button className='bg-gray-500 text-white font-serif'>Submit</button>
    </form>
    <div className='text-red-600 font-semibold'>{error? <span>user not found or wrong credentials!</span>:null}</div>
    <p>New User? <Link to='/signup'><span className='text-blue-600 underline'>Sign Up</span></Link></p>
    </div>
  )
}

export default Login
