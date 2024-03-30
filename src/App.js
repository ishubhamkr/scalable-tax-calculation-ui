import React, { useState } from "react";

import './App.css';
import { Login } from './loginandregistration/Login'; // Adjust import path as necessary
import { Register } from './loginandregistration/Register'; // Adjust import path as necessary

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
