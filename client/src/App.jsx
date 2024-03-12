import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Doctor from './pages/Doctor'
import Patient from './pages/Patient'
import Create from './pages/Create'
const App = () => {
  return (
    <div>
      <Router>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/doctors' element={<Doctor/>}/>
      <Route path='/patients' element={<Patient/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
      </Router>
    </div>
  )
}

export default App
