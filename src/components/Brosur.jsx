import React from 'react'
import { Avatar, Box, Button, Card, CardContent, Container, Rating, Stack, Typography } from '@mui/material'
import MobileApp from '../assets/img/mobile-app.png'
import UserAvatar from '../assets/img/user-avatar.png'
import useCurrentScreen from '../hooks/useCurrentScreen'

const Brosur = () => {
  const {mobile, tablet} = useCurrentScreen()
  return (
    <Container
      sx={{
        height: (mobile || tablet) ? '45rem' : '30rem',
        background: 'linear-gradient(95.17deg, rgba(234, 241, 255, 0.7) 0%, #BEEAF6 48.96%, rgba(195, 255, 207, 0.5) 100%)',
        borderRadius: 4,
        display: 'flex',
        flexDirection: (mobile || tablet) ? 'column-reverse' : 'row',
        justifyContent: (mobile || tablet) ? 'center' : 'space-between',
        alignItems: 'center',
        p: 4,
        my: 4,
      }}
    >
      <Box sx={{
        width: (mobile || tablet) ? '85%' : '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Box>
          <Typography variant='h4' gutterBottom>
            Download. Book vaksinasi. <br/>
            Lindungi Keluarga. Lawan Pandemi!
          </Typography>
          <Button variant='contained' sx={{mt: 2, width: 'max-content'}}>Download Aplikasi</Button>
        </Box>
      </Box>
      <Box
        sx={{
          height: '100%',
          width: (mobile || tablet ) ? '80%' : '46%',
          position: 'relative',
          display: 'flex',
          justifyContent: (mobile || tablet ) && 'center',
          gap: 4
        }}
      >
        <img 
          src={MobileApp} 
          alt='mobile-app' 
          height={360} 
          style={{position: 'absolute', transform: (mobile || tablet ) ? 'translate(-68px, 88px)' : 'translate(-32px, 88px)'}}
        />
        <Stack sx={{position: 'relative', pt: 4}} spacing={2}>
          <Stack
            sx={{
              borderRadius: 2,
              background: 'rgba(190, 234, 246, 0.7)',
              color: 'softInfo.text',
              transform: (mobile || tablet ) ? 'translate(100%, 0)' : 'translate(135%, 0)',
              p: 1
            }}
            >
            <Typography variant='h5'>10k+</Typography>
            <Typography gutterBottom>Pengguna telah terdaftar</Typography>
          </Stack>
          <Stack
            sx={{
              borderRadius: 2,
              background: 'rgba(206, 255, 172, 0.4)',
              color: 'softSuccess.text',
              transform: (mobile || tablet ) ? 'translate(90%, 0)' : 'translate(120%, 0)',
              p: 1
            }}
          >
            <Typography variant='h5'>8k+</Typography>
            <Typography>Book vaksinasi telah dilayani</Typography>
          </Stack>
        </Stack>
        <Card 
          sx={{
            width: 330, 
            position: 'absolute', 
            borderRadius: 6,
            background: 'rgba(250,250,251,0.7)',
            '&::-webkit-backdrop-filter':{
              blur: '20px',
            },
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(250,250,251,0.35)',
            transform: (mobile || tablet ) ? 'translate(180px, 220px)' : 'translate(200px, 220px)'
          }}
        >
          <CardContent>
            <Stack spacing={1}>
              <Rating value={5} readOnly/>
              <Typography gutterBottom>
                Aplikasi ini sangat memudahkan saya dan keluarga untuk mencari tempat dan mendapat vaksinasi dengan cepat.
              </Typography>
              <Stack direction={'row'} spacing={1} sx={{alignItems: 'center'}}>
                <Avatar alt='user' src={UserAvatar} />
                <Typography fontWeight={'bold'} >Jonathan Christie</Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}

export default Brosur;