import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Create = () => {
 const [formData,setFormData] = useState('');
 const history = useNavigate();
 const changeHandler = (e)=>{
     setFormData({
      ...formData,[e.target.id]:e.target.value
     })
 }
 const submitHandler = async(e)=>{
   e.preventDefault()
   if(role === 'doctor'){
     const data = await axios.post("http://localhost:3000/create/doctor",formData)
     console.log(data)
    }else{
      const data = await axios.post("http://localhost:3000/create/patient",formData)
      console.log(data)
    }
    history('/')
 }
  return (
    <div className='flex items-center justify-center h-screen'>
      <form onSubmit={submitHandler} className='flex flex-col'>
        <label>
            Name
        </label>
        <input id='name' type='name' onChange={changeHandler} placeholder='Enter the name'/>
        <label>Role</label>
        <input id='role' type='role'onChange={changeHandler} placeholder='Enter the Role'/>
        <label>Speciality(if a doctor):</label>
        <input id='speciality' onChange={changeHandler} type='speciality' placeholder='Enter the speciality...'/>
        <label>Disease(if a patient):</label>
        <input id='disease' onChange={changeHandler} type='disease' placeholder='Enter the disease'/>
        <label>Address:</label>
        <textarea id='address' onChange={changeHandler} type='address' placeholder='Enter the address details here'/>
       <button className='bg-lime-600 text-white'>Submit</button>
      </form>
    </div>
  )
}

export default Create
