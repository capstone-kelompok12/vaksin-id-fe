import React from 'react'
import { useLocation } from 'react-router-dom'
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../store/features/sidebar/sidebarSlice';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Navbar = () => {
  const {pathname} = useLocation()
  const heading = pathname.slice(1).replaceAll('-', ' ').toUpperCase()
  const dispatch = useDispatch()
  
  
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        minHeight: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        px: 2
      }}
    > 
      <Stack
        direction={'row'}
        spacing={2}
        alignItems='center'
      >
        <IconButton 
          onClick={() => dispatch(toggleSidebar()) }
          size="large"
        >
          <MenuRoundedIcon fontSize="inherit" />
        </IconButton>
        <Typography variant='h5'>
          {heading !== '' ? heading :  'DASHBOARD'}
        </Typography>
      </Stack>

      <Stack
        direction={'row'}
        spacing={2}
        alignItems='center'
      >
        <IconButton aria-label="toggle-sidebar" size="large">
          <NotificationsRoundedIcon color='danger' fontSize="inherit" />
        </IconButton>
        <Typography>Hi, Admin!</Typography>
        <Avatar sx={{ bgcolor: 'info.main' }}>A</Avatar>
      </Stack>
    </Box>
  )
}

export default Navbar