/* eslint-disable no-unused-vars */
import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const links = [
    { name: "Crud App", to: "/" },
    { name: "All Users", to: "/all" },
    { name: "Add Users", to: "/add" },
  ]

  return (
    <AppBar position="static">
      <Header>
        {
          links.map((link) => (
            <Link to={link.to} key={link.to}>{link.name}</Link>
          ))
        }
      </Header>
    </AppBar>
  )
}


const Header = styled(Toolbar)(({ theme }) => ({
  background: 'black',
  "& > a": {
    color: "white",
    fontSize: "1.2rem",
    textDecoration: "none",
    margin: '0 15px'
  }
}))

export default Navbar
