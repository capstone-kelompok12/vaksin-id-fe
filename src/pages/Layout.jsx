import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  const {open} = useSelector(state => state.sidebar)
  const width = open ? '320px' : '90px'

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative'
      }}
    >
      <Sidebar width={width}/>
      <Box
        sx={{
          position: 'absolute',
          left: open ? 320 : 90,
          right: 0,
          transition: '1s ease'
        }}
      >
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout