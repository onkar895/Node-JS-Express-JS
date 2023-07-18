/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { getUsers, deleteUser } from '../Api'
import { styled, Button, Box, TableBody, TableCell, TableRow, Table, TableHead, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const AllUsers = () => {

  const [data, setData] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getAllUsers()
  }, [])


  const getAllUsers = async () => {
    const { data } = await getUsers()
    setData(data)
  }

  const handleDelete = async (id) => {
    await deleteUser(id)
    getAllUsers()
  }

  return (
    <Container>
      {
        data.length <= 0 ? (
          <Box>
            <h1>Users Not Added</h1>
            <Button onClick={() => navigate('/add')} variant='contained'>Add User</Button>
          </Box>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Id</TableCell>
                <TableCell align='center'>Name</TableCell>
                <TableCell align='center'>Username</TableCell>
                <TableCell align='center'>Email</TableCell>
                <TableCell align='center'>Phone No</TableCell>
                <TableCell align='center'>Edit</TableCell>
                <TableCell align='center'>Delete</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {
                data.map((user) => {
                  return (
                    <TableRow key={user._id} sx={{ '& : last-child td, & : last-child th': { border: 0 } }}>
                      <TableCell align='center'>{user._id}</TableCell>
                      <TableCell align='center'>{user.name}</TableCell>
                      <TableCell align='center'>{user.username}</TableCell>
                      <TableCell align='center'>{user.email}</TableCell>
                      <TableCell align='center'>{user.phone}</TableCell>
                      <TableCell align='center'><Button variant='contained' onClick={() => navigate(`/edit/${user._id}`)}>Edit</Button></TableCell>
                      <TableCell align='center'><Button variant='contained' color='error' onClick={() => handleDelete(user._id)}>Delete</Button></TableCell>
                    </TableRow>
                  )
                })
              }

            </TableBody>
          </Table>
        )
      }

    </Container>
  )
}

const Container = styled(Box)`
display : flex;
align-items : center;
justify-content : center;
padding : 2rem;
width : 80%;
margin : 50px auto;
background : rgba(0,0,0,0.8);
border : 1px solid rgba(128,128,128,0.4);
border-radius : 5px;
`

export default AllUsers
