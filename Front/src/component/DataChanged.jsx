import React from 'react'
import './DataChanged.css'
import cancel from '../assets/remove.png'
import { Link } from 'react-router-dom'


const DataChanged = () => {
    // console.log(props);
    return (
        <div className='changed-box'>
            <div className="box">
                <a href="/"><img src={cancel} id='cancelBtn' /> </a>
                <h1>Your Data has been Changed</h1>
                <a href="/" id='btn'>Click to view </a>

            </div>
        </div>
    )
}

export default DataChanged
