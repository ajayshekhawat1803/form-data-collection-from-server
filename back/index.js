import express from 'express'
import cors from 'cors'
import userRouter from './userRouter.js'
import connection from './connection.js'

// let users = [
//     { id: 101, name: "Ajay Shekhawat", email: "ajayshekhawat1803@gmail.com", number: 9876543210 },
//     { id: 102, name: "Omender Shekhawat", email: "omendershekhawat01@gmail.com", number: 9876547485 }
// ]

const app = express()

app.use(express.json())
app.use(cors({ origin: ["http://localhost:5173" ,"http://192.168.1.148:5173"] }))
// app.use(cors({ origin: "http://192.168.1.148:5173" }))

app.use("/users", userRouter)

connection.then(()=>{
    app.listen(4000, () => console.log("Server is Running at port 4000"))
})
.catch((err)=> console.log("DB ERROR:"+err))
