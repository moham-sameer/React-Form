import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Doctor from './pages/Doctor'
import Patient from './pages/Patient'
const App = () => {
  return (
    <div>
      <Router>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/create' element={<Signup/>}/>
      <Route path='/doctors' element={<Doctor/>}/>
      <Route path='/patients' element={<Patient/>}/>
     </Routes>
      </Router>
    </div>
  )
}

export default App
