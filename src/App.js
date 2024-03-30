import React, { useState } from "react";
import logo from './logo.svg';
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
      <div className="left">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
      </div>
      <div className="right">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
