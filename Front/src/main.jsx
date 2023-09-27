import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import InputForm from './component/InputForm'
import {BrowserRouter, Routes,Route} from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element ={<App/>} />
      <Route path="/add" element ={<InputForm/>} />
    </Routes>
  </BrowserRouter>
)
