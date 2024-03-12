import React, { useEffect,useState } from 'react'
import axios from 'axios'
const Doctor = () => {
  const [showData,setShowData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/create/doctor").then((resp)=>{
       setShowData(resp.data)
       console.log(resp.data)
    }).catch((error)=>{
      console.error("error fetcing data:", error)
    })
  },[])
  return (
    <div>
    {showData.map((items,index)=>{
      return(
        <div key={index}>
          <table className='font-serif'>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Speciality</th>
              <th>Address</th>
            </tr>
              <tr>
                <td>{items.name}</td>
                <td>{items.role}</td>
                <td>{items.speciality}</td>
                <td>{items.address}</td>
              </tr>
          </table>
        </div>
      )
    })}
    </div>
  )
}

export default Doctor
