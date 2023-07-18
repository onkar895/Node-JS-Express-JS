import axios from 'axios'

const URL = 'http://localhost:8000';

export const addUser = async (user) => {
  try {
    const data = await axios.post(`${URL}/add`, user)
    console.log(data.data)
    return data
  } catch (err) {
    console.log(err, "error while calling addUser api")
  }
}

export const getUsers = async () => {
  try {
    const users = await axios.get(`${URL}/all`)
    return users
  } catch (err) {
    console.log(err, "error while calling getUsers api")
}
}

export const getUser = async (id) => {
  try {
    const response = await axios.get(`${URL}/edit/${id}`)
    return response
  } catch (err) {
    console.log(err, "error while calling getUser api")
  }
}


export const editUser = async (id, data) => {
  try {
    const edit = await axios.put(`${URL}/${id}`, data)
    return edit
  } catch (error) {
    console.log(error, "error while calling editUser api")
  }
}


export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${URL}/${id}`)
    return response
  } catch (error) {
    console.log(error, 'error while calling deleteUser api')
    
  }
}