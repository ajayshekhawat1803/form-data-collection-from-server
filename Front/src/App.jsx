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
    let res = await axios.get("http://localhost:4000")
      .then((result) => {
        setData(result.data)
      })
  }
  const deleteData = async (idtoDelete) => {
    let res = await axios.delete(`http://localhost:4000/del/${idtoDelete}`)
    // console.log(`http://localhost:4000/del/${idtoDelete}`);
  }
  

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
                <td>ID</td>
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
                    <tr key={curr.id}>
                      <td>{curr.id}</td>
                      <td className='name'>{curr.name}</td>
                      <td className='email'>{curr.email}</td>
                      <td>{curr.number}</td>
                      <td className='action'>
                        <span onClick={
                          () => {
                            deleteData(curr.id);
                            setDeleted(true)
                          }}>Delete </span>
                        <span onClick={
                          () => {
                            setEditID(curr.id)
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
