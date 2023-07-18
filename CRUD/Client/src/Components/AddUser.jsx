/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Box, TextField, styled, Paper, Button } from '@mui/material'
import { addUser } from '../Api'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {

  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    name: ' ',
    username: ' ',
    phone: ' ',
    email: ' ',
  })

  const handleSubmit = async () => {
    await addUser(formValues)
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
          <Button variant="contained" fullWidth onClick={handleSubmit}>ADD</Button>
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
margin : 12px 0;
  }

}
`
export default AddUser
