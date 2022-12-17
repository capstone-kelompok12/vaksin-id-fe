import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  const {open} = useSelector(state => state.sidebar)
  const width = open ? '320px' : '90px'
  const {loading: vaksinLoading} = useSelector(state => state.vaksin)
  const {loading: sessionLoading} = useSelector(state => state.session)

  const showLoader = Boolean(vaksinLoading || sessionLoading)

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
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
      {showLoader && <Loader />}
    </Box>
  )
}

export default Layout