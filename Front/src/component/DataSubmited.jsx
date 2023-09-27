import React from 'react'
import './DataSubmited.css'
import cancel from '../assets/remove.png'
import { Link } from 'react-router-dom'


const DataSubmited = () => {
    return (
        <div className='submitted-box'>
            <div className="box">
                <Link to={"/"}><img src={cancel} id='cancelBtn' /> </Link>
                <h1>Your Data has been Submitted</h1>
                <Link to={"/"}><button>Click to view</button> </Link>

            </div>
        </div>
    )
}

export default DataSubmited
