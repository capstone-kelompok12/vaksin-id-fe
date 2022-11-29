import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Avatar, IconButton, Stack, Typography } from '@mui/material'
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Auth from '../utils/Auth';
import { Container } from '@mui/system';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Navbar = () => {
  const {pathname} = useLocation()
  const heading = pathname.slice(1).replaceAll('-', ' ').toUpperCase()
  const navigate = useNavigate()  
  
  return (
    <Container
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
        {/* <IconButton 
          onClick={() => dispatch(toggleSidebar()) }
          size="large"
        >
          <MenuRoundedIcon fontSize="inherit" />
        </IconButton> */}
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
        <Avatar sx={{ bgcolor: 'info.main' }} onClick={() => Auth.logout(navigate)}>A</Avatar>
      </Stack>
    </Container>
  )
}

export default Navbar