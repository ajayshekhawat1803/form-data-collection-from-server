import React from 'react'
import './DataDeleted.css'
import cancel from '../assets/remove.png'
import { Link } from 'react-router-dom'


const Datadeleted = () => {
    return (
        <div className='delete-box'>
            <div className="box">
                <a href="/"><img src={cancel} id='cancelBtn' /> </a>
                <h1>Your Data has been Deleted</h1>
                <a href='/'><button>Click to view</button> </a>
            </div>
        </div>
    )
}

export default Datadeleted
