import React from 'react';
import Home from './components/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App(){
  return (
    <div>
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App
