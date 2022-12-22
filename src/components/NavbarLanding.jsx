import React from 'react'
import { Box, Button, Container, MenuItem, MenuList, Stack } from '@mui/material'
import Logo from '../assets/img/logo-vaksin-id-with-name.png'
import { useLocation, useNavigate } from 'react-router-dom'

const menuList = [
  {
    label: 'Beranda',
    top: 0,
    path: '/',
  },
  {
    label: 'Tentang Kami',
    top: 520,
    path: '/#about',
  },
  {
    label: 'Layanan',
    top: 1000,
    path: '/#service',
  },
]

const NavbarLanding = () => {
  const { hash } = useLocation()
  const navigate = useNavigate()

  const handleNav = ({top, path}) =>{
    navigate(path)
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    })
  }

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        minHeight: '50px',
        width: '100%',
        zIndex: 99,
        background: 'rgba(250,250,251,0.7)',
        '&::-webkit-backdrop-filter':{
          blur: '20px',
        },
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(250,250,251,0.375)',
        mb: 0.5
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          p: 2,
        }}
      >
        <img src={Logo} alt="logo-vaksin-id" width={55} />
        <Stack>
          <MenuList sx={{display: 'flex', flexDirection: 'row', gap: 2}}>
            {menuList.map(item =>{
              const {label, top, path} = item
              return(
                <MenuItem 
                  key={label} 
                  selected={path.slice(1) === hash}
                  onClick={() => handleNav({top, path})}
                  sx={{borderRadius: 4, color: 'primary.dark'}} 
                >
                  {label}
                </MenuItem>
              )
            })}
          </MenuList>
        </Stack>
        <Button 
          onClick={() => navigate('/login')}
          variant='outlined' 
        >
          Login as Admin
        </Button>
      </Container>
    </Box>
  )
}

export default NavbarLanding