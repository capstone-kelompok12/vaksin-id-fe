import React from 'react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import HeroImg from '../assets/img/app-demo.png'
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import VaksinSlider from './VaksinSlider';

const Hero = () => {
  return (
    <Container
      disableGutters
      sx={{
        height: '80vh',
        maxHeight: '45rem',
        width: '100%',
        p: 0
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '85%',
          background: 'linear-gradient(90deg, rgba(195, 255, 207, 0.5) 0%, #BEEAF6 48.96%, rgba(234, 241, 255, 0.7) 100%)',
          borderRadius: '18px 18px 0px 0px',
          p: 4,
        }}
      >
        <Stack sx={{width: '40%'}} spacing={2} >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1,
              width: 'max-content',
              background: 'linear-gradient(270deg, rgba(94, 255, 157, 0.5) 0%, rgba(94, 255, 157, 0) 100%)',
              borderRadius: '0px 22px 22px 0px',
              py: 1.5,
              px: 4,
              transform: 'translate(-30px, 0px)'
            }}
          >
            <MilitaryTechRoundedIcon color='warning'/>
            <Typography variant='p' fontWeight={'bold'}>Top aplikasi no 1 kesehatan</Typography>
          </Box>
          <Box>
            <Typography variant='h2'>
              Lawan Pandemi dengan Vaksin!
            </Typography>
            <Typography variant='h6' gutterBottom>
              Book vaksin sekarang juga dan lindungi diri serta keluarga Anda dari ancaman pandemi.
            </Typography>
          </Box>
          <Button variant='contained' sx={{width: 'max-content',}}>Download Aplikasi</Button>
        </Stack>
        <img 
          src={HeroImg} 
          alt="hero-img" 
          height={380}
        />
      </Box>
      <VaksinSlider />
    </Container>
  )
}

export default Hero