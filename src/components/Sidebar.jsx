import React from 'react'
import { Box, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import BookOnlineRoundedIcon from '@mui/icons-material/BookOnlineRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import VaccinesRoundedIcon from '@mui/icons-material/VaccinesRounded';
import vaksinIDLogo from '../assets/img/logo-vaksin-id-with-name.png'
import { /*Link as RouterLink,*/ NavLink as NavLinkBase, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
      label: 'Dashboard',
      route: '/dashboard',
      icon: <DashboardRoundedIcon />
    },
    {
      label: 'Manage Booking',
      route: '/manage-booking',
      icon: <BookOnlineRoundedIcon />
    },
    {
      label: 'Manage Session',
      route: '/manage-session',
      icon: <EventNoteRoundedIcon />
    },
    {
      label: 'Vaccine Stock',
      route: '/vaccine-stock',
      icon: <ShowChartRoundedIcon />
    },
    {
      label: 'Vaccine List',
      route: '/vaccine-list',
      icon: <VaccinesRoundedIcon />
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
        backgroundColor: '#FBFDF7',
        transition: '1s ease',
        px: 2,
        zIndex: 9999
      }}
    >
      <Stack
        alignItems= {'center'}
        sx={{my: 4}}
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
              <ListItem key={idx} disablePadding>
                <ListItemButton 
                  selected={pathname.includes(route)}
                  component={NavLink}
                  sx={{borderRadius: 2, my: 1}}
                  to={route}
                >
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                  {open && <ListItemText primary={label} sx={{transition: '1s ease'}} />}
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