import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const dbConnection=()=>{
    const params={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("Db Connected Successfully")
    } catch (error) {
        console.log(error)
    }
}

export default dbConnection