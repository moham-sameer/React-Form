import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { signInFailure, signInStart, signInSuccess } from '../../redux/userSlice'
const Signup = () => {
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
  const data = await axios.post("http://localhost:3000/auth/signup",authData)
  if(data.success === false){
   dispatch(signInFailure(data.message))
   return;
  }   
  dispatch(signInSuccess(data))
    
  
 } catch (error) {
   dispatch(signInFailure(error.message))
 }
 history('/')
 }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
    <form onSubmit={SubmitHandler} className='flex flex-col space-y-8 w-[19rem] border border-slate-300 p-9 shadow-md'>
     <input onChange={changeHandler} id='username' type='username' placeholder='Enter your username...' required/>
     <input onChange={changeHandler} id='password' type='password' placeholder='Enter your password...' required/>
      <button className='bg-green-800 text-white font-serif '>Sign Up</button>
    </form>
    <div className='text-red-600 font-semibold'>{error? <span>user not found or wrong credentials!</span>:null}</div>
    <div>Already a User ? <Link to='/'><span className='text-blue-600 underline'>Sign In</span></Link></div>
    </div>
  )
}

export default Signup
