import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    // id: {
    //     type: Number,
    //     required: true
    // },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
})

const userModel = mongoose.model("userModel",userSchema)
export default userModel
