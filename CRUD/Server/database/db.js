import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const MONGO_URL = process.env.MONGO_URL

const Connection = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      UseNewUrlParser: true,
      UseUnifiedTopology : true
    })
    console.log("databse connected succesfully")
  } catch (err) {
    console.log(err, "error while connecting to databse")
  }
}

export default Connection