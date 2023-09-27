import express from 'express'
import cors from 'cors'

let users = [
    { id: 101, name: "Ajay Shekhawat", email: "ajayshekhawat1803@gmail.com", number: 9876543210 },
    { id: 102, name: "Omender Shekhawat", email: "omendershekhawat01@gmail.com", number: 9876543210 }
]

const app = express()

app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }))

app.get("/", (req, res) => {
    res.json(users)
})

app.post("/new", (req, res) => {
    const newUser = req.body
    let index = users.length
    let newId = 0;
    if (index == 0) {
        index++;
        newId = 1
    }
    else {
        newId = users[index - 1].id + 1
    }
    newUser.id = newId;
    users.push(newUser);
    res.json(users)
})

app.delete("/del/:id(\\d+)", (req, res) => {
    const idtoDelete = Number(req.url.split("/del/")[1])
    users = users.filter((user) => {
        return user.id != idtoDelete
    })
    res.json(users)
})

app.put("/change/:id(\\d+)", (req, res) => {
    const idtoChange = Number(req.url.split("/change/")[1])
    const updatedUser = req.body
    users = users.map((user) => {
        return user.id == idtoChange ?  {...user , ...updatedUser} : user
    })
    // res.json({ message: `Resource deleted successfully ${typeof updatedUser}` })
    res.json(users)
})


app.listen(4000, () => console.log("Server is Running at port 4000"))