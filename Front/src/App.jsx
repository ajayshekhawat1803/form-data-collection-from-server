import React, { useEffect, useState } from 'react'
import InputForm from './component/InputForm'
import './App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Datadeleted from './component/DataDeleted'
import Edit from './component/Edit'

const App = () => {
  const [data, setData] = useState([])
  const [deleted, setDeleted] = useState(false)
  const [edit, setEdit] = useState(false)
  const [editID, setEditID] = useState(0)
  const [editName, setEditName] = useState(0)
  const [editEmail, setEditEmail] = useState(0)
  const [editNumber, setEditNumber] = useState(0)

  // const [idtoDelete, setidtoDelete] = useState("")
  // let idtoDelete;
  const getData = async () => {
    let res = await axios.get("http://localhost:4000/users/")
      .then((result) => {
        // setData(result.data)
        console.log(result);
      })
  }
  const deleteData = async (idtoDelete) => {
    console.log(`http://localhost:4000/del/${idtoDelete}`);
    let res = await axios.delete(`http://localhost:4000/users/del/${idtoDelete}`)
  }
  // getData()

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <div className='data'>
        {deleted && <Datadeleted />}
        {edit && <Edit id={editID} name={editName} email={editEmail} number={editNumber} />}
        {data.length > 0 ? (
          <table>
            <thead>
              <tr>
                {/* <td>ID</td> */}
                <td>Name</td>
                <td>Email</td>
                <td>Mobile</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {
                data.map((curr) => {
                  return (
                    <tr key={curr._id}>
                      {/* <td>{curr.id}</td> */}
                      <td className='name'>{curr.name}</td>
                      <td className='email'>{curr.email}</td>
                      <td>{curr.number}</td>
                      <td className='action'>
                        <span onClick={
                          () => {
                            // console.log(curr._id);
                            deleteData(curr._id);
                            setDeleted(true)
                          }}>Delete </span>
                        <span onClick={
                          () => {
                            setEditID(curr._id)
                            setEditName(curr.name)
                            setEditEmail(curr.email)
                            setEditNumber(curr.number)
                            // changeData(curr.id, curr.name, curr.email, curr.number)
                            setEdit(true)
                          }}> Edit</span>

                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        ) : ""}
        <Link to="./add/" id='clicktoadd'>Click to add</Link>
      </div>
    </>
  )
}

export default App
