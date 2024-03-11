import React from 'react'

const Signup = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <form className='flex flex-col'>
        <label>
            Name
        </label>
        <input type='name' placeholder='Enter the name'/>
        <label>Role</label>
        <input type='role' placeholder='Enter the Role'/>
        <label>Speciality(if a doctor):</label>
        <input type='speciality' placeholder='Enter the speciality...'/>
        <label>Disease(if a patient):</label>
        <input type='disease' placeholder='Enter the disease'/>
        <label>Address:</label>
        <textarea type='address' placeholder='Enter the address details here'/>
       <button className='bg-lime-600 text-white'>Submit</button>
      </form>
    </div>
  )
}

export default Signup
