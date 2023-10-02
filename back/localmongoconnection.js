import {MongoClient} from "mongodb"
const url = "mongodb://127.0.0.1:27017/employee"
const dbname = "employee"

const connection = MongoClient.connect(url)
export default connection