import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema({
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

const employeeModel = mongoose.model("employee",employeeSchema)
export default employeeModel
