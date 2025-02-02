import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FAQForm from './components/FAQ/FAQForm';

function App() {


  return (
    <>
       <Router>
      <Routes>
       
        <Route path="/add" element={<FAQForm />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
