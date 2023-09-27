import React, { useState } from 'react'
import './Edit.css'
import axios from 'axios'
import DataChanged from './Datachanged'

const Edit = (props) => {
    const [show, setShow] = useState(false)
    const [id, setid] = useState(props.id)
    const [name, setName] = useState(props.name)
    const [email, setEmail] = useState(props.email)
    const [number, setNumber] = useState(props.number)

    const changeData = async () => {
        let res = await axios.put(`http://localhost:4000/change/${id}`, {
           name: name,
           email : email,
           number : number
        })
        // console.log(`http://localhost:4000/del/${idtoDelete}`);
        // console.log(idtoChange);
        // console.log(editID);
    }

    return (
        <div id='edit-cont'>
            <form id='container' onSubmit={(e) => {
                e.preventDefault()
                setShow(true)
                changeData()
            }}>
                {show && <DataChanged />}
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
                </div>

            </form>
        </div>
    )
}

export default Edit
