import User from "../Models/userSchema.js"

export const addUser = async (req, res) => {
  try {
    const data = req.body
    const newUser = new User(data)
    await newUser.save()
    res.status(200).json(newUser)
  } catch (err) {
    res.status(500).json(err, "error while posting the data")
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(err, "error while getting users")
  }
}


export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err, "error while getting user")
  }
  
}

export const editUser = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const editUser = await User.findByIdAndUpdate(id, data)
    res.status(200).json(editUser)
  } catch (error) {
    res.status(500).json(error, "error while editing the user")
  }
}


export const deleteUser = async (req, res) => {
  try {
    const {id} = req.params
    const deleteUser = await User.findByIdAndDelete(id)
    res.status(200).json(deleteUser)
  } catch (error) {
    res.status(500).json(error, "error while deleting the user")
  }
}