import React from 'react'
import { 
  Box, 
  darken, 
  Link, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Stack, 
  Typography 
} from '@mui/material'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import vaksinIDLogo from '../assets/img/logo-vaksin-id-with-name.png'
import { NavLink as NavLinkBase, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import theme from '../themes';

// override react-router-dom's Link component to the MUI's ListItem component
const NavLink = React.forwardRef ((props, ref) =>{
  return <NavLinkBase ref={ref} {...props} className={({ isActive }) => `${props.className} ${isActive ? props.activeClassName : ''}`} />
})

const Sidebar = ({width}) => {
  const {open} = useSelector(state => state.sidebar)
  const {pathname} = useLocation()

  // add sidebar list item here
  const sidebarComponents = [
    {
      label: 'Beranda',
      route: '/dashboard',
      icon: <DashboardOutlinedIcon />
    },
    {
      label: 'Book Vaksinasi',
      route: '/manage-booking',
      icon: <ConfirmationNumberOutlinedIcon />
    },
    {
      label: 'Sesi Vaksinasi',
      route: '/manage-session',
      icon: <EventOutlinedIcon />
    },
    {
      label: 'Stok Vaksin',
      route: '/vaccine-stock',
      icon: <TimelineOutlinedIcon />
    },
    {
      label: 'Daftar Vaksin',
      route: '/vaccine-list',
      icon: <VaccinesOutlinedIcon />
    },
  ]

  // override react-router-dom's Link component to the MUI's ListItem component
  // const Link = React.forwardRef ((itemProps, ref) =>{
  //   return <RouterLink ref={ref} {...itemProps} role={undefined} />
  // })

  return (
    <Stack
      sx={{
        width: width,
        position: 'fixed',
        top: 0,
        bottom: 0,
        background: theme.color.greenOpaque,
        transition: '1s ease',
        px: 2,
        zIndex: 9999
      }}
    >
      <Stack
        alignItems= {'center'}
        sx={{mt: 4}}
      >
        <img 
          src={vaksinIDLogo} 
          alt="vaksin-id" 
          width={100}
          height={100}
        />
        {/* {open && 
          <Typography 
            variant='h5' 
            sx={{
              textAlign: 'center', 
              fontWeight: 'bold', 
              transition: '1s ease',
              mb: 2
            }}
          >
            VAKSIN.ID
          </Typography>
        } */}
      </Stack>
      <Box>
        <List>
          {sidebarComponents.map((item, idx) =>{
            const {label, route, icon} = item;
            return(
              <ListItem key={idx} disablePadding >
                <ListItemButton 
                  selected={pathname.includes(route)}
                  component={NavLink}
                  sx={{
                    borderRadius: 2, 
                    my: 1,
                    '&.Mui-selected':{
                      bgcolor: '#006D39',
                      color: theme.color.neutral,
                      '&:hover':{
                        bgcolor: darken('#006D39', 0.125),
                        color: theme.color.neutral,
                      }
                    }
                  }}
                  to={route}
                >
                  <ListItemIcon sx={{color: 'inherit'}}>
                    {icon}
                  </ListItemIcon>
                  {open && <ListItemText primary={label} sx={{transition: '.5s ease'}} />}
                </ListItemButton>
              </ListItem>            
            )
          })}
        </List>
      </Box>
      <Stack sx={{alignItems: 'center', position: 'fixed', bottom: 0, left: 0, transform: 'translate(25%,0)'}}>
        <Link underline='hover'>Tentang kami</Link>
        <Typography>&copy; Capstone Kelompok 12</Typography>
      </Stack>
    </Stack>
  )
}

export default Sidebar