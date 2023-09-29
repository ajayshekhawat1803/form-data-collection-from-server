import express from "express"
import userModel from "./userModel.js";

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
    const existingUser = await userModel.find({})
    console.log(existingUser[0]);
    res.json(existingUser)
})

userRouter.post("/new", async (req, res) => {
    const { id, name, email, number } = req.body
    const newUser = new userModel({
        // id: id,
        name: name,
        email: email,
        number: number
    })

    const result = await newUser.save()
    res.status(201).json(result)
})

userRouter.delete("/del/:id", async (req, res) => {
    const idtoDelete = req.url.split("/del/")[1];
    await userModel.deleteOne({ _id: idtoDelete });
})

userRouter.put("/change/:id", async (req, res) => {
    const idtoChange = req.url.split("/change/")[1]
    console.log(idtoChange);
    const { name, email, number } = req.body;
    const updatedUser = new userModel({
        _id: idtoChange,
        name: name,
        email: email,
        number: number
    });
    // console.log(updatedUser);
    // const result = await userModel.findByIdAndUpdate({ idtoChange }, { $set: updatedUser })
    const result = await userModel.updateMany({_id:idtoChange},{$set:updatedUser})
    console.log(result);

})

// let users = [
//     { id: 101, name: "Ajay Shekhawat", email: "ajayshekhawat1803@gmail.com", number: 9876543210 },
//     { id: 102, name: "Omender Shekhawat", email: "omendershekhawat01@gmail.com", number: 9876547485 }
// ]

// userRouter.get("/", (req, res) => {
//     res.json(users)
// })

// // userRouter.post("/new", (req, res) => {
// //     const newUser = req.body
// //     let index = users.length
// //     let newId = 0;
// //     if (index == 0) {
// //         index++;
// //         newId = 101
// //     }
// //     else {
// //         newId = users[index - 1].id + 1
// //     }
// //     newUser.id = newId;
// //     users.push(newUser);
// //     res.json(users)
// // })


// userRouter.delete("/del/:id(\\d+)", (req, res) => {
//     const idtoDelete = Number(req.url.split("/del/")[1])
//     users = users.filter((user) => {
//         return user.id != idtoDelete
//     })
//     res.json(users)
// })

// userRouter.put("/change/:id(\\d+)", (req, res) => {
//     const idtoChange = Number(req.url.split("/change/")[1])
//     const updatedUser = req.body
//     users = users.map((user) => {
//         return user.id == idtoChange ? { ...user, ...updatedUser } : user
//     })
//     // res.json({ message: `Resource deleted successfully ${typeof updatedUser}` })
//     res.json(users)
// })


export default userRouter;