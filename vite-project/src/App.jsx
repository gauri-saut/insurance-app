import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Card from './Pages/Card'
import Signin from './Pages/Signin'
import NewInsurance from './Pages/NewInsurance'
import Signup from './Pages/Signup'
import Insure from './Comman/Insure'
import Renew from './Comman/Renew'
import GovSchem from './Comman/GovSchem'
import InSanjo from './Comman/InSanjo'
import Support from './Pages/Support' // Corrected import path for Support
import About from './Pages/About'
import Careers from './Pages/Careers'
import Award from './Pages/Award'
import Become from './Pages/Become'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/card' element={<Card />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/newinsurance' element={<NewInsurance />} />
        <Route path='/renew' element={<Renew />} />
        <Route path='/insure' element={<Insure />} />
        <Route path='/insanjo' element={<InSanjo />} />
        <Route path='/govschem' element={<GovSchem />} />
        <Route path='/support' element={<Support />} />
        <Route path='/About' element={<About/>} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/become' element={<Become />} />
        <Route path='/award' element={<Award />} />


      </Routes>
    </Router>
  )
}

export default App


