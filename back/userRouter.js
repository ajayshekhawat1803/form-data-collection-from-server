import express from "express"
import employeeModel from './userModel.js'



const userRouter = express.Router();
// console.log(db);



userRouter.get("/", async (req, res) => {
     const result = await employeeModel.find({})
     console.log(result);
})

// userRouter.post("/new", async (req, res) => {
//     const { id, name, email, number } = req.body
//     const newUser = new userModel({
//         // id: id,
//         name: name,
//         email: email,
//         number: number
//     })

//     const result = await newUser.save()
//     res.status(201).json(result)
// })

// userRouter.delete("/del/:id", async (req, res) => {
//     const idtoDelete = req.url.split("/del/")[1];
//     await userModel.deleteOne({ _id: idtoDelete });
// })

// userRouter.put("/change/:id", async (req, res) => {
//     const idtoChange = req.url.split("/change/")[1]
//     console.log(idtoChange);
//     const { name, email, number } = req.body;
//     const updatedUser = new userModel({
//         _id: idtoChange,
//         name: name,
//         email: email,
//         number: number
//     });
//     const result = await userModel.updateMany({_id:idtoChange},{$set:updatedUser})
//     console.log(result);

// })

export default userRouter;