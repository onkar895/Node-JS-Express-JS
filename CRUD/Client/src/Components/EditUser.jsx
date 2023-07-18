/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Box, TextField, styled, Paper, Button } from '@mui/material'
import { getUser, editUser } from '../Api'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    name: ' ',
    username: ' ',
    phone: ' ',
    email: ' ',
  })

  useEffect(() => {
    getSingleUser()
  }, [])

  const getSingleUser = async () => {
    const { data } = await getUser(id);
    setFormValues(data)
  }
  console.log(formValues)
  const handleEdit = async () => {
    await editUser(id, formValues)
    navigate('/all')
  }

  return (

    <Container>

      <Paper sx={{ padding: '1rem 2rem' }}>
        <Box>
          <TextField
            type='Name' label='Name' name='name'
            value={formValues.name}
            onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} fullWidth />
        </Box>

        <Box>
          <TextField type='Username ' label='Username' name='username' value={formValues.username}
            onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} fullWidth />
        </Box>

        <Box>
          <TextField type='email' label='Email' name='email' value={formValues.email}
            onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} fullWidth />
        </Box>

        <Box>
          <TextField type='Phone No' label='Phone No' name='phone' value={formValues.phone}
            onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })} fullWidth />
        </Box>

        <Box>
          <Button variant="contained" fullWidth onClick={handleEdit}>EDIT</Button>
        </Box>

      </Paper>

    </Container>

  )
}


const Container = styled(Box)`
max-width : 1200px;
margin : 10px auto;
display : flex;
palign-items : center;
justify-content : center;
padding : 2rem;

& > div {
  width : 80%;
  max-width : 600px;
  padding : 1rem 2rem;

  & > div {

  }

}
`
export default EditUser
