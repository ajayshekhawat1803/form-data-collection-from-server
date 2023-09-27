import React, { useState } from 'react'
import './InputForm.css'
import axios from 'axios'
import DataSubmited from './DataSubmited'

const InputForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [show, setShow] = useState(false)

  const sendData = ()=>{
    axios.post("http://localhost:4000/new",{
      name : name,
      email : email, 
      number : number
    })
  }
  return (
    <form id='container' onSubmit={(e) => {
      e.preventDefault()
      sendData()
      setShow(true)
    }}>
      {show &&<DataSubmited/>}
      <div className='inp'>
        <label htmlFor='name'>Name:</label>
        <input id='name' type='text' placeholder='Enter Your Name' value={name}
          onChange={(e) => {
            setName(e.target.value)
          }} />
      </div>

      <div className='inp'>
        <label htmlFor='email'>Email:</label>
        <input id='email' type='email' placeholder='Enter Your Email' value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }} />
      </div>
      <div className='inp'>
        <label htmlFor='number'>Mobile:</label>
        <input id='number' type='number' placeholder='Enter Your Mobile Number' value={number}
          onChange={(e) => {
            setNumber(e.target.value)
          }} />
      </div>
      <div className='inp'>
        <input type='submit' id='submit' className='btn' />
        <input type='reset' id='reset' className='btn' />
      </div>

    </form>
  )
}

export default InputForm
