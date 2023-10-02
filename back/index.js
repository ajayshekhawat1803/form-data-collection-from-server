import express from 'express'
import cors from 'cors'
import userRouter from './userRouter.js'

import connection from './localmongoconnection.js'

const app = express()
const port = 4000

app.use(express.json())
app.use(cors({ origin: ["http://localhost:5173", "http://192.168.1.148:5173"] }))

app.use("/users", userRouter)

connection
    .then(async (client) => {
        await app.listen(port, () => console.log("Server started at port " + port));
    })
    .catch((err) => console.log("DB ERROR: " + err));

