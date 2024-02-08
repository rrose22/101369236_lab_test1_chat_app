// App.js
import React from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';

function App() {
  return (
    <div className="App">
     <a href="user/register">Register</a>
     <a href="login/register">Login</a>
    </div>
  );
}

export default App;