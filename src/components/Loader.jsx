import { Backdrop, Stack } from '@mui/material'
import React from 'react'
import style from '../styles/loader.module.css'

const Loader = () => {
  return (
    <Stack
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: 10000
      }}
    >
      <Backdrop
        open={true}
      >
        <div className={style.dots}></div>
      </Backdrop>
    </Stack>
  )
}

export default Loader