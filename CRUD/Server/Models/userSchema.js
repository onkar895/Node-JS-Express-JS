import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  phone: Number
})

const User = mongoose.model('user', userSchema)

export default User
