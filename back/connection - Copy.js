import mongoose from "mongoose";

const connection = mongoose.connect("mongodb+srv://ajayshekhawat1803:database@cluster0.l305iue.mongodb.net/?retryWrites=true&w=majority");

export default connection;