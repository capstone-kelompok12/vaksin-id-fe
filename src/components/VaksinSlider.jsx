import { Box } from '@mui/material'
import React from 'react'

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
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6,
        height: '15vh',
        backgroundColor: '#F0F1EC',
        mixBlendMode: 'luminosity',
        borderRadius: '0px 0px 18px 18px',
        overflowX: 'auto',
        overflowY: 'hidden',
        px: 4,
        // hide-scrollbar
        '&::-webkit-scrollbar':{
          display: 'none'
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
      }}
    >
      {vaksin.map((item, idx) =>{
        const {name} = item
        return(
          <img 
            key={idx}
            src={require(`../assets/img/vaksin/${name}.png`)} 
            alt={name}
            loading='lazy'
            width={186}
          />
        )
      })}
    </Box>
  )
}

export default VaksinSlider