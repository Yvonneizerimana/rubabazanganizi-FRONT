import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import Register from './register';
import Login from './login';
import Index from './index'

function App(){

  const [currentForm, setCurrentForm]=useState('Register');
  
  const toggleForm=(formName)=>{
    setCurrentForm(formName)
  }
  return(
    <div className="App">
      <Router>
        <Routes>
        {currentForm === 'Login' && (
            <Route path="/" element={<Login onFormSwitch={toggleForm} />} />
          )}
          {currentForm === 'Register' && (
            <Route path="/" element={<Register onFormSwitch={toggleForm} />} />
          )}
        <Route path="/index" element={<Index />} />
         

        </Routes>
      </Router>
    </div> 
  )
}

export default App