import React, { useEffect,useState } from 'react'
import axios from 'axios'
const Patient = () => {
  const [showData,setShowData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/create/patient").then((resp)=>{
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
              <th>Disease</th>
              <th>Address</th>
            </tr>
              <tr>
                <td>{items.name}</td>
                <td>{items.role}</td>
                <td>{items.disease}</td>
                <td>{items.address}</td>
              </tr>
          </table>
        </div>
      )
    })}
    </div>
  )
}

export default Patient
