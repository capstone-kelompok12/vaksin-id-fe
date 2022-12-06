import { Box } from '@mui/material'
import React from 'react'
import { Slide } from 'react-slideshow-image'

const vaksin = [
  {name: 'sinovac'},
  {name: 'moderna'},
  {name: 'sputnik-v'},
  {name: 'novavax'},
  {name: 'sinopharm'},
  {name: 'convidencia'},
  {name: 'pfizer'},
  {name: 'astrazeneca'},
  {name: 'janssen'},
]

const VaksinSlider = () => {
  return (
    <Box 
      className='slide-container'
      sx={{
        bgcolor: '#F0F1EC',
        // make the image blended with the background (grayscale)
        mixBlendMode: 'luminosity',
        borderRadius: '0px 0px 18px 18px',
      }}      
    >
      <Slide slidesToScroll={1} slidesToShow={5} duration={2500}>
        {vaksin.map((item, idx) =>{
          const {name} = item
          return(
            <div 
              key={idx} 
              className='each-slide' 
              style={{
                height: '6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 2
              }}
            >
              <img 
                key={idx}
                className='each-slide' 
                src={require(`../assets/img/vaksin/${name}.png`)} 
                alt={name}
                loading='lazy'
                width={'186'}
              />
            </div>
          )
        })}
      </Slide>
      </Box>
  )
}
// 
export default VaksinSlider